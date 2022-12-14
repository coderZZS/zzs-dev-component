/*
 * @Descripttion:
 * @Author: BZR
 * @Date: 2022-06-21 15:38:34
 * @LastEditTime: 2022-09-19 15:10:37
 */
module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    // extends: ['plugin:vue/vue3-recommended', 'eslint:recommended', '@vue/typescript/recommended', 'prettier', 'prettier/vue'],
    extends: ['plugin:vue/vue3-recommended', 'eslint:recommended', '@vue/typescript/recommended', 'prettier'],
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: [],
    rules: {
        'vue/multi-word-component-names': 'off', // 关闭多词组件名称规范
        '@typescript-eslint/no-explicit-any': ['off'],
    },
}
