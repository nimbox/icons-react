import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import filesize from 'rollup-plugin-filesize';
import pkg from './package.json' with { type: 'json' };


const entries = {

    'index': 'src/icons/components/index.ts'

};

const extensions = ['.js', '.ts', '.tsx', '.jsx', '.json'];
const externalIds = [...Object.keys(pkg.dependencies ?? {}), ...Object.keys(pkg.peerDependencies ?? {})];
const external = (id) => externalIds.some(dep => id === dep || id.startsWith(dep + '/'));

export default [{

    input: entries,
    external,

    plugins: [
        nodeResolve({ extensions }),
        commonjs(),
        typescript({ tsconfig: 'tsconfig.build.json' }),
        filesize()
    ],

    output: [
        {
            dir: 'dist/cjs',
            format: 'cjs',
            sourcemap: true,
            entryFileNames: '[name].js',
            chunkFileNames: 'chunks/[hash].js',
            exports: 'auto'
        },
        {
            dir: 'dist/esm',
            format: 'esm',
            sourcemap: true,
            entryFileNames: '[name].js',
            chunkFileNames: 'chunks/[hash].js'
        }
    ]

}];
