/*
 * @Descripttion:
 * @Author: BZR
 * @Date: 2022-09-19 16:05:50
 * @LastEditTime: 2022-09-19 16:16:01
 */
import defaultConfig, { name, file } from './rollup.config.js'

export default {
    ...defaultConfig,
    output: {
        name,
        file: file('esm'),
        format: 'es',
    },
}
