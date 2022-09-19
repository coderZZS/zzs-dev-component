/*
 * @Descripttion:
 * @Author: BZR
 * @Date: 2022-09-19 16:05:50
 * @LastEditTime: 2022-09-19 16:15:33
 */
import defaultConfig, { file } from './rollup.config.js'

export default {
    ...defaultConfig,
    output: {
        name: 'ZzsComponent',
        file: file('umd'),
        format: 'umd',
        globals: {
            vue: 'Vue',
            'lodash-es': '_',
        },
        exports: 'named',
    },
}
