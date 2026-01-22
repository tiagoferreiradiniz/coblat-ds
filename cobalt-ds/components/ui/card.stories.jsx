import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction } from './card';
import { Button } from './button';

const meta = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'sm'],
    },
  },
};

export default meta;

export const Default = {
  render: () => {
    const React = require('react');
    return React.createElement(Card, null,
      React.createElement(CardHeader, null,
        React.createElement(CardTitle, null, 'Card Title'),
        React.createElement(CardDescription, null, 'Card description goes here.')
      ),
      React.createElement(CardContent, null,
        React.createElement('p', { className: 'text-sm text-muted-foreground' }, 'Card content area.')
      ),
      React.createElement(CardFooter, null,
        React.createElement(Button, { variant: 'primary', size: 'md' }, 'Action')
      )
    );
  },
};

export const WithAction = {
  render: () => {
    const React = require('react');
    return React.createElement(Card, null,
      React.createElement(CardHeader, null,
        React.createElement(CardTitle, null, 'Card with Action'),
        React.createElement(CardDescription, null, 'This card has an action button in the header.'),
        React.createElement(CardAction, null,
          React.createElement(Button, { variant: 'ghost', size: 'icon' }, React.createElement(require('lucide-react').MoreVerticalIcon))
        )
      ),
      React.createElement(CardContent, null,
        React.createElement('p', { className: 'text-sm text-muted-foreground' }, 'Card content with header action.')
      )
    );
  },
};

export const Small = {
  render: () => {
    const React = require('react');
    return React.createElement(Card, { size: 'sm' },
      React.createElement(CardHeader, null,
        React.createElement(CardTitle, null, 'Small Card'),
        React.createElement(CardDescription, null, 'Small card variant.')
      ),
      React.createElement(CardContent, null,
        React.createElement('p', { className: 'text-sm text-muted-foreground' }, 'Compact card content.')
      )
    );
  },
};

export const Simple = {
  render: () => {
    const React = require('react');
    return React.createElement(Card, null,
      React.createElement(CardContent, { className: 'pt-6' },
        React.createElement('p', { className: 'text-sm' }, 'Simple card with just content.')
      )
    );
  },
};
