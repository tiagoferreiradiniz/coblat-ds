import React from 'react';
import { Field, FieldLabel, FieldDescription, FieldError, FieldGroup, FieldContent } from './field';
import { Input } from './input';
import { Label } from './label';

const meta = {
  title: 'UI/Field',
  component: Field,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal', 'responsive'],
    },
  },
};

export default meta;

export const Vertical = {
  render: () => {
    const React = require('react');
    return React.createElement(Field, { orientation: 'vertical' },
      React.createElement(FieldLabel, null,
        React.createElement(Label, null, 'Email')
      ),
      React.createElement(FieldContent, null,
        React.createElement(Input, { type: 'email', placeholder: 'email@example.com' }),
        React.createElement(FieldDescription, null, 'Enter your email address.')
      )
    );
  },
};

export const Horizontal = {
  render: () => {
    const React = require('react');
    return React.createElement(Field, { orientation: 'horizontal' },
      React.createElement(FieldLabel, null,
        React.createElement(Label, null, 'Email')
      ),
      React.createElement(FieldContent, null,
        React.createElement(Input, { type: 'email', placeholder: 'email@example.com' }),
        React.createElement(FieldDescription, null, 'Enter your email address.')
      )
    );
  },
};

export const WithError = {
  render: () => {
    const React = require('react');
    return React.createElement(Field, { orientation: 'vertical' },
      React.createElement(FieldLabel, null,
        React.createElement(Label, null, 'Email')
      ),
      React.createElement(FieldContent, null,
        React.createElement(Input, { type: 'email', placeholder: 'email@example.com', 'aria-invalid': true, defaultValue: 'invalid-email' }),
        React.createElement(FieldError, null, 'Please enter a valid email address.')
      )
    );
  },
};

export const FieldGroupExample = {
  render: () => {
    const React = require('react');
    return React.createElement(FieldGroup, null,
      React.createElement(Field, { orientation: 'vertical' },
        React.createElement(FieldLabel, null,
          React.createElement(Label, null, 'First Name')
        ),
        React.createElement(FieldContent, null,
          React.createElement(Input, { placeholder: 'John' })
        )
      ),
      React.createElement(Field, { orientation: 'vertical' },
        React.createElement(FieldLabel, null,
          React.createElement(Label, null, 'Last Name')
        ),
        React.createElement(FieldContent, null,
          React.createElement(Input, { placeholder: 'Doe' })
        )
      )
    );
  },
};
