import React from 'react';
import { Label } from './label';

const meta = {
  title: 'UI/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default = {
  args: {
    children: 'Label',
  },
};

export const WithInput = {
  render: () => {
    const React = require('react');
    const { Input } = require('./input');
    return React.createElement('div', { className: 'flex flex-col gap-2 w-64' },
      React.createElement(Label, { htmlFor: 'input-1' }, 'Email Address'),
      React.createElement(Input, { id: 'input-1', type: 'email', placeholder: 'email@example.com' })
    );
  },
};

export const Required = {
  render: () => {
    const React = require('react');
    return React.createElement(Label, null,
      'Required Field ',
      React.createElement('span', { className: 'text-destructive' }, '*')
    );
  },
};
