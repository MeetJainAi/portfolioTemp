'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'service_c1nfyu3',
        'template_ln0cb1k',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Meet Shah',
        },
        'fZSQblpprIaKu8X1t'
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} className="min-h-screen bg-space/95 py-20 px-4 md:px-8" id="contact">
      {/* Rest of your component JSX */}
    </section>
  );
}
