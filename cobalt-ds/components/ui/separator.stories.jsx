import React from 'react';
import { Separator } from './separator';

const meta = {
  title: 'UI/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
};

export default meta;

export const Horizontal = {
  args: {
    orientation: 'horizontal',
  },
  render: (args) => {
    const React = require('react');
    return React.createElement('div', { className: 'w-64 space-y-4' },
      React.createElement('div', null, 'Content above'),
      React.createElement(Separator, args),
      React.createElement('div', null, 'Content below')
    );
  },
};

export const Vertical = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => {
    const React = require('react');
    return React.createElement('div', { className: 'flex items-center h-20 gap-4' },
      React.createElement('div', null, 'Left'),
      React.createElement(Separator, args),
      React.createElement('div', null, 'Right')
    );
  },
};

export const WithText = {
  render: () => {
    const React = require('react');
    return React.createElement('div', { className: 'w-64 space-y-4' },
      React.createElement('div', null, 'Content above'),
      React.createElement('div', { className: 'flex items-center gap-4' },
        React.createElement(Separator, { className: 'flex-1' }),
        React.createElement('span', { className: 'text-sm text-muted-foreground px-2' }, 'OR'),
        React.createElement(Separator, { className: 'flex-1' })
      ),
      React.createElement('div', null, 'Content below')
    );
  },
};
