import React from 'react';
import { Button } from './button';
import { HeartIcon, StarIcon, PlusIcon, SettingsIcon } from 'lucide-react';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'secondary', 'ghost', 'destructive', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'xs', 'sm', 'lg', 'icon', 'icon-xs', 'icon-sm', 'icon-lg'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;

export const Default = {
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default',
  },
};

export const Outline = {
  args: {
    children: 'Button',
    variant: 'outline',
    size: 'default',
  },
};

export const Secondary = {
  args: {
    children: 'Button',
    variant: 'secondary',
    size: 'default',
  },
};

export const Ghost = {
  args: {
    children: 'Button',
    variant: 'ghost',
    size: 'default',
  },
};

export const Destructive = {
  args: {
    children: 'Button',
    variant: 'destructive',
    size: 'default',
  },
};

export const Link = {
  args: {
    children: 'Button',
    variant: 'link',
    size: 'default',
  },
};

export const Sizes = {
  render: (args) => {
    const React = require('react');
    return React.createElement('div', { className: 'flex items-center gap-4' },
      React.createElement(Button, { ...args, size: 'xs' }, 'Extra Small'),
      React.createElement(Button, { ...args, size: 'sm' }, 'Small'),
      React.createElement(Button, { ...args, size: 'default' }, 'Default'),
      React.createElement(Button, { ...args, size: 'lg' }, 'Large')
    );
  },
};

export const Disabled = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

export const Icon = {
  render: () => React.createElement(Button, { 
    size: 'icon', 
    'aria-label': 'Like' 
  }, React.createElement(HeartIcon)),
};

export const IconXS = {
  render: () => React.createElement(Button, { 
    size: 'icon-xs', 
    'aria-label': 'Favorite' 
  }, React.createElement(StarIcon)),
};

export const IconSM = {
  render: () => React.createElement(Button, { 
    size: 'icon-sm', 
    'aria-label': 'Add' 
  }, React.createElement(PlusIcon)),
};

export const IconLG = {
  render: () => React.createElement(Button, { 
    size: 'icon-lg', 
    'aria-label': 'Settings' 
  }, React.createElement(SettingsIcon)),
};

export const IconVariants = {
  render: () => {
    const React = require('react');
    return React.createElement('div', { className: 'flex items-center gap-4' },
      React.createElement(Button, { size: 'icon-xs', 'aria-label': 'Extra Small Icon' }, React.createElement(StarIcon)),
      React.createElement(Button, { size: 'icon-sm', 'aria-label': 'Small Icon' }, React.createElement(PlusIcon)),
      React.createElement(Button, { size: 'icon', 'aria-label': 'Default Icon' }, React.createElement(HeartIcon)),
      React.createElement(Button, { size: 'icon-lg', 'aria-label': 'Large Icon' }, React.createElement(SettingsIcon))
    );
  },
};
