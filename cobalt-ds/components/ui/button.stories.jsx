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
      options: ['primary', 'outline', 'secondary', 'ghost', 'destructive', 'link'],
    },
    size: {
      control: 'select',
      options: ['md', 'sm', 'lg', 'icon', 'icon-sm', 'icon-lg'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;

export const Primary = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
  },
  render: (args) => {
    // If size is an icon variant, show an icon instead of text
    const iconSizes = ['icon', 'icon-sm', 'icon-lg'];
    if (iconSizes.includes(args.size)) {
      return React.createElement(Button, { 
        ...args, 
        'aria-label': 'Icon button' 
      }, React.createElement(HeartIcon));
    }
    // Otherwise, show the text children
    return React.createElement(Button, args);
  },
};

export const Outline = {
  args: {
    children: 'Button',
    variant: 'outline',
    size: 'md',
  },
  render: (args) => {
    // If size is an icon variant, show an icon instead of text
    const iconSizes = ['icon', 'icon-sm', 'icon-lg'];
    if (iconSizes.includes(args.size)) {
      return React.createElement(Button, { 
        ...args, 
        'aria-label': 'Icon button' 
      }, React.createElement(HeartIcon));
    }
    // Otherwise, show the text children
    return React.createElement(Button, args);
  },
};

export const Secondary = {
  args: {
    children: 'Button',
    variant: 'secondary',
    size: 'md',
  },
  render: (args) => {
    // If size is an icon variant, show an icon instead of text
    const iconSizes = ['icon', 'icon-sm', 'icon-lg'];
    if (iconSizes.includes(args.size)) {
      return React.createElement(Button, { 
        ...args, 
        'aria-label': 'Icon button' 
      }, React.createElement(HeartIcon));
    }
    // Otherwise, show the text children
    return React.createElement(Button, args);
  },
};

export const Ghost = {
  args: {
    children: 'Button',
    variant: 'ghost',
    size: 'md',
  },
  render: (args) => {
    // If size is an icon variant, show an icon instead of text
    const iconSizes = ['icon', 'icon-sm', 'icon-lg'];
    if (iconSizes.includes(args.size)) {
      return React.createElement(Button, { 
        ...args, 
        'aria-label': 'Icon button' 
      }, React.createElement(HeartIcon));
    }
    // Otherwise, show the text children
    return React.createElement(Button, args);
  },
};

export const Destructive = {
  args: {
    children: 'Button',
    variant: 'destructive',
    size: 'md',
  },
  render: (args) => {
    // If size is an icon variant, show an icon instead of text
    const iconSizes = ['icon', 'icon-sm', 'icon-lg'];
    if (iconSizes.includes(args.size)) {
      return React.createElement(Button, { 
        ...args, 
        'aria-label': 'Icon button' 
      }, React.createElement(HeartIcon));
    }
    // Otherwise, show the text children
    return React.createElement(Button, args);
  },
};

export const Link = {
  args: {
    children: 'Button',
    variant: 'link',
    size: 'md',
  },
  render: (args) => {
    // If size is an icon variant, show an icon instead of text
    const iconSizes = ['icon', 'icon-sm', 'icon-lg'];
    if (iconSizes.includes(args.size)) {
      return React.createElement(Button, { 
        ...args, 
        'aria-label': 'Icon button' 
      }, React.createElement(HeartIcon));
    }
    // Otherwise, show the text children
    return React.createElement(Button, args);
  },
};

export const Sizes = {
  render: (args) => {
    const React = require('react');
    return React.createElement('div', { className: 'flex items-center gap-4' },
      React.createElement(Button, { ...args, size: 'sm' }, 'Small'),
      React.createElement(Button, { ...args, size: 'md' }, 'Medium'),
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

export const States = {
  render: () => {
    const React = require('react');
    return React.createElement('div', { className: 'flex flex-col gap-8' },
      React.createElement('div', { className: 'flex flex-col gap-3' },
        React.createElement('h3', { className: 'text-sm font-semibold text-foreground mb-1' }, 'Default State'),
        React.createElement('div', { className: 'flex items-center gap-4 flex-wrap' },
          React.createElement(Button, { variant: 'primary' }, 'Primary'),
          React.createElement(Button, { variant: 'outline' }, 'Outline'),
          React.createElement(Button, { variant: 'secondary' }, 'Secondary'),
          React.createElement(Button, { variant: 'ghost' }, 'Ghost'),
          React.createElement(Button, { variant: 'destructive' }, 'Destructive'),
          React.createElement(Button, { variant: 'link' }, 'Link')
        )
      ),
      React.createElement('div', { className: 'flex flex-col gap-3' },
        React.createElement('h3', { className: 'text-sm font-semibold text-foreground mb-1' }, 'Hover State (hover over buttons to see)'),
        React.createElement('p', { className: 'text-xs text-muted-foreground mb-2' }, 'Move your mouse over the buttons below to see hover effects'),
        React.createElement('div', { className: 'flex items-center gap-4 flex-wrap' },
          React.createElement(Button, { variant: 'primary' }, 'Primary'),
          React.createElement(Button, { variant: 'outline' }, 'Outline'),
          React.createElement(Button, { variant: 'secondary' }, 'Secondary'),
          React.createElement(Button, { variant: 'ghost' }, 'Ghost'),
          React.createElement(Button, { variant: 'destructive' }, 'Destructive'),
          React.createElement(Button, { variant: 'link' }, 'Link')
        )
      ),
      React.createElement('div', { className: 'flex flex-col gap-3' },
        React.createElement('h3', { className: 'text-sm font-semibold text-foreground mb-1' }, 'Focus State (click to focus)'),
        React.createElement('p', { className: 'text-xs text-muted-foreground mb-2' }, 'Click or tab to focus the buttons below to see focus ring'),
        React.createElement('div', { className: 'flex items-center gap-4 flex-wrap' },
          React.createElement(Button, { variant: 'primary' }, 'Primary'),
          React.createElement(Button, { variant: 'outline' }, 'Outline'),
          React.createElement(Button, { variant: 'secondary' }, 'Secondary'),
          React.createElement(Button, { variant: 'ghost' }, 'Ghost'),
          React.createElement(Button, { variant: 'destructive' }, 'Destructive'),
          React.createElement(Button, { variant: 'link' }, 'Link')
        )
      ),
      React.createElement('div', { className: 'flex flex-col gap-3' },
        React.createElement('h3', { className: 'text-sm font-semibold text-foreground mb-1' }, 'Disabled State'),
        React.createElement('div', { className: 'flex items-center gap-4 flex-wrap' },
          React.createElement(Button, { variant: 'primary', disabled: true }, 'Primary'),
          React.createElement(Button, { variant: 'outline', disabled: true }, 'Outline'),
          React.createElement(Button, { variant: 'secondary', disabled: true }, 'Secondary'),
          React.createElement(Button, { variant: 'ghost', disabled: true }, 'Ghost'),
          React.createElement(Button, { variant: 'destructive', disabled: true }, 'Destructive'),
          React.createElement(Button, { variant: 'link', disabled: true }, 'Link')
        )
      )
    );
  },
};

export const Icon = {
  render: () => React.createElement(Button, { 
    size: 'icon', 
    'aria-label': 'Like' 
  }, React.createElement(HeartIcon)),
};

export const IconSM = {
  render: () => React.createElement(Button, { 
    size: 'icon-sm', 
    'aria-label': 'Add' 
  }, React.createElement(HeartIcon)),
};

export const IconLG = {
  render: () => React.createElement(Button, { 
    size: 'icon-lg', 
    'aria-label': 'Settings' 
  }, React.createElement(HeartIcon)),
};

export const IconVariants = {
  render: () => {
    const React = require('react');
    return React.createElement('div', { className: 'flex items-center gap-4' },
      React.createElement(Button, { size: 'icon-sm', 'aria-label': 'Small Icon' }, React.createElement(HeartIcon)),
      React.createElement(Button, { size: 'icon', 'aria-label': 'Medium Icon' }, React.createElement(HeartIcon)),
      React.createElement(Button, { size: 'icon-lg', 'aria-label': 'Large Icon' }, React.createElement(HeartIcon))
    );
  },
};
