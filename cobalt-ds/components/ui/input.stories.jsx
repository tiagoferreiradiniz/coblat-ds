import React from 'react';
import { Input } from './input';

const meta = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
    },
    disabled: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
  },
};

export default meta;

export const Default = {
  args: {
    type: 'text',
    placeholder: 'Enter text...',
  },
};

export const WithValue = {
  args: {
    type: 'text',
    defaultValue: 'Sample text',
  },
};

export const Email = {
  args: {
    type: 'email',
    placeholder: 'email@example.com',
  },
};

export const Password = {
  args: {
    type: 'password',
    placeholder: 'Enter password',
  },
};

export const Disabled = {
  args: {
    type: 'text',
    placeholder: 'Disabled input',
    disabled: true,
  },
};

export const Invalid = {
  args: {
    type: 'text',
    placeholder: 'Invalid input',
    'aria-invalid': true,
    defaultValue: 'Invalid value',
  },
};
