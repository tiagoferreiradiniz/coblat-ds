import React from 'react';
import { Textarea } from './textarea';

const meta = {
  title: 'UI/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
    rows: {
      control: 'number',
    },
  },
};

export default meta;

export const Default = {
  args: {
    placeholder: 'Enter your message...',
    rows: 4,
  },
};

export const WithValue = {
  args: {
    defaultValue: 'This is a sample textarea with some content.',
    rows: 4,
  },
};

export const Disabled = {
  args: {
    placeholder: 'Disabled textarea',
    disabled: true,
    rows: 4,
  },
};

export const Invalid = {
  args: {
    placeholder: 'Invalid textarea',
    'aria-invalid': true,
    defaultValue: 'Invalid value',
    rows: 4,
  },
};
