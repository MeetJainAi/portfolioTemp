'use client';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiDocument } from 'react-icons/hi';

interface SocialButtonProps {
  href: string;
  icon: 'github' | 'linkedin' | 'document';
  className?: string;
}

export default function SocialButton({ href, icon, className }: SocialButtonProps) {
  const getIcon = () => {
    switch (icon) {
      case 'github':
        return <FaGithub className="w-6 h-6" />;
      case 'linkedin':
        return <FaLinkedin className="w-6 h-6" />;
      case 'document':
        return <HiDocument className="w-6 h-6" />;
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block p-3 bg-neural/10 rounded-full hover:bg-neural/20 transition-colors ${className}`}
    >
      {getIcon()}
    </a>
  );
}
