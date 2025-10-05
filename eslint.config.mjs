import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import configPrettier from 'eslint-config-prettier';
import pluginReactNative from 'eslint-plugin-react-native';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        plugins: {
            js,
            'react-native': pluginReactNative,
        },
        extends: ['js/recommended'],
    },
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    configPrettier, // Desactiva reglas de ESLint que entran en conflicto con Prettier
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        settings: {
            react: {
                version: 'detect', // Detecta automáticamente la versión de React
            },
        },
        rules: {
            // Reglas específicas de React Native
            'react-native/no-unused-styles': 'error',
            'react-native/split-platform-components': 'error',
            'react-native/no-inline-styles': 'error',
            'react-native/no-color-literals': 'error',
            'react-native/no-raw-text': 'error',
            'react-native/no-single-element-style-arrays': 'warn',
            // "react-native/sort-styles": "warn",
        },
    },
]);
