import * as p from 'path';
import * as fs from 'fs';
import { rollup } from 'rollup';
import buble from 'rollup-plugin-buble';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
import filesize from 'rollup-plugin-filesize';
import json from 'rollup-plugin-json';
import commonJS from 'rollup-plugin-commonjs';
import pkg from '../package.json';

/*
 * Banner
 **/
const copyright =
    '/*!\n' +
    ' * ' + pkg.name + ' v' + pkg.version + '\n' +
    ' * (c) ' + new Date().getFullYear() + ' ' + pkg.author.name + '\n' +
    ' * Released under the ' + pkg.license + ' License.\n' +
    ' */';

Promise.resolve(rollup({
    entry: p.resolve('src/index.js'),
    plugins: [
        process.env.NODE_ENV === 'production' ? uglify({
            warnings: false,
            compress: {
                screw_ie8: true,
                dead_code: true,
                unused: true,
                keep_fargs: false,
                drop_debugger: true
            },
            mangle: {
                screw_ie8: true
            }
        }) : {},
        buble({
            // TODO
            include: [ 'src/**'] // other files can be included in the bundle as well
        }),
        nodeResolve({
            jsnext: true,
            main: true
        }),
        filesize(),
        commonJS(),
        // This allows you to require in JSON files
        json(),
        replace({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            VERSION: pkg.version
        })
    ]
}))
    .then(({write}) => write({
        dest: p.resolve(`dist/${pkg.name}.${process.env.NODE_ENV === 'production' ? 'min.js' : 'js'}`),
        moduleName: pkg.name[0].toUpperCase() + pkg.name.slice(1),
        format: 'umd',
        banner: copyright,
        sourceMap: false
    }));
