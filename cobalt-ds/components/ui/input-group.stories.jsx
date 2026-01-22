import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText } from './input-group';
import { Button } from './button';
import { SearchIcon, MailIcon, LockIcon } from 'lucide-react';

const meta = {
  title: 'UI/InputGroup',
  component: InputGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const WithPrefix = {
  render: () => {
    const React = require('react');
    return React.createElement(InputGroup, { className: 'w-64' },
      React.createElement(InputGroupAddon, { align: 'inline-start' },
        React.createElement(InputGroupText, null, React.createElement(MailIcon))
      ),
      React.createElement(InputGroupInput, { placeholder: 'email@example.com' })
    );
  },
};

export const WithSuffix = {
  render: () => {
    const React = require('react');
    return React.createElement(InputGroup, { className: 'w-64' },
      React.createElement(InputGroupInput, { placeholder: 'Search...' }),
      React.createElement(InputGroupAddon, { align: 'inline-end' },
        React.createElement(InputGroupText, null, React.createElement(SearchIcon))
      )
    );
  },
};

export const WithButton = {
  render: () => {
    const React = require('react');
    return React.createElement(InputGroup, { className: 'w-64' },
      React.createElement(InputGroupInput, { placeholder: 'Enter value...' }),
      React.createElement(InputGroupAddon, { align: 'inline-end' },
        React.createElement(InputGroupButton, null, 'Submit')
      )
    );
  },
};

export const WithIconButton = {
  render: () => {
    const React = require('react');
    const { SearchIcon } = require('lucide-react');
    return React.createElement(InputGroup, { className: 'w-64' },
      React.createElement(InputGroupInput, { placeholder: 'Search...' }),
      React.createElement(InputGroupAddon, { align: 'inline-end' },
        React.createElement(InputGroupButton, { size: 'icon-xs' }, React.createElement(SearchIcon))
      )
    );
  },
};

export const BothSides = {
  render: () => {
    const React = require('react');
    return React.createElement(InputGroup, { className: 'w-64' },
      React.createElement(InputGroupAddon, { align: 'inline-start' },
        React.createElement(InputGroupText, null, React.createElement(LockIcon))
      ),
      React.createElement(InputGroupInput, { type: 'password', placeholder: 'Password' }),
      React.createElement(InputGroupAddon, { align: 'inline-end' },
        React.createElement(InputGroupButton, { size: 'icon-xs' }, React.createElement(require('lucide-react').EyeIcon))
      )
    );
  },
};
