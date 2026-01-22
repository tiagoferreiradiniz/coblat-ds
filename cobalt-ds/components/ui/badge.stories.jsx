import React from 'react';
import { Badge } from './badge';

const meta = {
  title: 'UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'],
    },
  },
};

export default meta;

export const Default = {
  args: {
    children: 'Badge',
    variant: 'default',
  },
};

export const Secondary = {
  args: {
    children: 'Badge',
    variant: 'secondary',
  },
};

export const Destructive = {
  args: {
    children: 'Badge',
    variant: 'destructive',
  },
};

export const Outline = {
  args: {
    children: 'Badge',
    variant: 'outline',
  },
};

export const Ghost = {
  args: {
    children: 'Badge',
    variant: 'ghost',
  },
};

export const Link = {
  args: {
    children: 'Badge',
    variant: 'link',
  },
};
