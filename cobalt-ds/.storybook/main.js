/** @type {import('@storybook/react-webpack5').StorybookConfig} */
const config = {
  stories: ['../components/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  webpackFinal: async (config) => {
    const path = require('path');
    
    // Add path alias support
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../'),
      };
    }

    // Ensure TypeScript files are processed with babel-loader
    if (config.module?.rules) {
      // Find and update the rule for TypeScript files
      const tsRuleIndex = config.module.rules.findIndex((rule) => {
        if (rule && typeof rule === 'object' && rule.test) {
          const testStr = rule.test.toString();
          return testStr.includes('tsx?') || testStr.includes('\\.ts');
        }
        return false;
      });

      if (tsRuleIndex !== -1) {
        const tsRule = config.module.rules[tsRuleIndex];
        // Ensure babel-loader is used
        if (Array.isArray(tsRule.use)) {
          const hasBabel = tsRule.use.some((loader) => {
            const loaderStr = typeof loader === 'string' ? loader : (loader.loader || '');
            return loaderStr.includes('babel');
          });
          if (!hasBabel) {
            tsRule.use.unshift({
              loader: require.resolve('babel-loader'),
            });
          }
        } else if (!tsRule.use || (typeof tsRule.use === 'object' && !tsRule.use.loader?.includes('babel'))) {
          tsRule.use = [
            {
              loader: require.resolve('babel-loader'),
            },
            ...(Array.isArray(tsRule.use) ? tsRule.use : tsRule.use ? [tsRule.use] : []),
          ];
        }
      } else {
        // Add a new rule for TypeScript if none exists
        config.module.rules.push({
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: require.resolve('babel-loader'),
            },
          ],
        });
      }

      // Ensure CSS files are processed with PostCSS
      // Webpack processes loaders from RIGHT to LEFT in the use array
      // So [style-loader, css-loader, postcss-loader] processes as:
      // postcss-loader -> css-loader -> style-loader
      const cssRuleIndex = config.module.rules.findIndex((rule) => {
        if (rule && typeof rule === 'object' && rule.test) {
          const testStr = rule.test.toString();
          return testStr.includes('css') && !testStr.includes('module');
        }
        return false;
      });

      if (cssRuleIndex !== -1) {
        const cssRule = config.module.rules[cssRuleIndex];
        if (Array.isArray(cssRule.use)) {
          // Check if postcss-loader is already in the chain
          const hasPostcss = cssRule.use.some((loader) => {
            const loaderStr = typeof loader === 'string' ? loader : (loader.loader || '');
            return loaderStr.includes('postcss');
          });

          if (!hasPostcss) {
            // Add postcss-loader at the END of the array (runs FIRST in processing)
            // This ensures it processes the raw CSS before css-loader
            cssRule.use.push({
              loader: require.resolve('postcss-loader'),
              options: {
                postcssOptions: {
                  config: path.resolve(__dirname, './postcss.config.js'),
                },
              },
            });
          }
        }
      }
    }

    return config;
  },
};

module.exports = config;
