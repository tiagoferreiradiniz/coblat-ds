import React from 'react';
import '../app/globals.css';

/** @type {import('@storybook/react').Preview} */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'light';
      return React.createElement(
        'div',
        { className: theme === 'dark' ? 'dark' : '' },
        React.createElement(
          'div',
          { className: 'min-h-screen bg-background text-foreground p-8' },
          React.createElement(Story)
        )
      );
    },
  ],
};

export default preview;
