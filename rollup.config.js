import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import filesize from 'rollup-plugin-filesize';
import pkg from './package.json' with { type: 'json' };


const extensions = ['.js', '.ts', '.tsx', '.jsx', '.json'];
const externalIds = [...Object.keys(pkg.dependencies ?? {}), ...Object.keys(pkg.peerDependencies ?? {})];
const external = (id) => externalIds.some(dep => id === dep || id.startsWith(dep + '/'));

export default {

    input: 'src/icons/components/index.ts',
    external,

    plugins: [
        nodeResolve({ extensions }),
        commonjs(),
        typescript({ tsconfig: 'tsconfig.build.json' }),
        filesize()
    ],

    output: {
        dir: 'dist',
        format: 'esm',
        sourcemap: true
    }

};
