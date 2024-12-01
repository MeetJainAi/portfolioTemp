declare module 'maath/random/dist/maath-random.esm' {
    export interface RandomOptions {
        radius?: number;
        radius_min?: number;
        radius_max?: number;
        position?: [number, number, number];
    }

    export interface Random {
        inSphere: (buffer: Float32Array, options?: RandomOptions) => Float32Array;
        inCircle: (buffer: Float32Array, options?: RandomOptions) => Float32Array;
        onSphere: (buffer: Float32Array, options?: RandomOptions) => Float32Array;
        insideSphere: (buffer: Float32Array, options?: RandomOptions) => Float32Array;
        // Add other methods you're using from maath/random
    }

    const random: Random;
    export default random;
}
