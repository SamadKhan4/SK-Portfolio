import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
export default [
 {ignores:['dist/**','node_modules/**','.npm-cache/**']},
 js.configs.recommended,
 {files:['**/*.{js,jsx}'],languageOptions:{ecmaVersion:'latest',sourceType:'module',globals:globals.browser,parserOptions:{ecmaFeatures:{jsx:true}}},plugins:{react},rules:{'react/jsx-uses-react':'error','react/jsx-uses-vars':'error','no-unused-vars':['error',{varsIgnorePattern:'^[A-Z_]',argsIgnorePattern:'^_'}]}}
];
