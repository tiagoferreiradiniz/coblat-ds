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
        { 
          className: theme === 'dark' ? 'dark' : '', 
          style: { 
            padding: '1rem',
            minHeight: '100vh',
            backgroundColor: theme === 'dark' ? 'var(--background)' : 'transparent',
            color: theme === 'dark' ? 'var(--foreground)' : 'inherit'
          } 
        },
        React.createElement(Story)
      );
    },
  ],
};

export default preview;
