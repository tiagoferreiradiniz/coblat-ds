import React from 'react';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectGroup } from './select';

const meta = {
  title: 'UI/Select',
  component: Select,
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
    return React.createElement(Select, { defaultValue: 'option1' },
      React.createElement(SelectTrigger, { size: 'default' },
        React.createElement(SelectValue, { placeholder: 'Select an option' })
      ),
      React.createElement(SelectContent, null,
        React.createElement(SelectItem, { value: 'option1' }, 'Option 1'),
        React.createElement(SelectItem, { value: 'option2' }, 'Option 2'),
        React.createElement(SelectItem, { value: 'option3' }, 'Option 3')
      )
    );
  },
};

export const Small = {
  render: () => {
    const React = require('react');
    return React.createElement(Select, { defaultValue: 'option1' },
      React.createElement(SelectTrigger, { size: 'sm' },
        React.createElement(SelectValue, { placeholder: 'Select an option' })
      ),
      React.createElement(SelectContent, null,
        React.createElement(SelectItem, { value: 'option1' }, 'Option 1'),
        React.createElement(SelectItem, { value: 'option2' }, 'Option 2'),
        React.createElement(SelectItem, { value: 'option3' }, 'Option 3')
      )
    );
  },
};

export const WithGroups = {
  render: () => {
    const React = require('react');
    return React.createElement(Select, { defaultValue: 'apple' },
      React.createElement(SelectTrigger, null,
        React.createElement(SelectValue, { placeholder: 'Select a fruit' })
      ),
      React.createElement(SelectContent, null,
        React.createElement(SelectGroup, null,
          React.createElement(SelectItem, { value: 'apple' }, 'Apple'),
          React.createElement(SelectItem, { value: 'banana' }, 'Banana'),
          React.createElement(SelectItem, { value: 'orange' }, 'Orange')
        ),
        React.createElement(SelectGroup, null,
          React.createElement(SelectItem, { value: 'grape' }, 'Grape'),
          React.createElement(SelectItem, { value: 'strawberry' }, 'Strawberry')
        )
      )
    );
  },
};

export const Disabled = {
  render: () => {
    const React = require('react');
    return React.createElement(Select, { defaultValue: 'option1', disabled: true },
      React.createElement(SelectTrigger, null,
        React.createElement(SelectValue, { placeholder: 'Disabled select' })
      ),
      React.createElement(SelectContent, null,
        React.createElement(SelectItem, { value: 'option1' }, 'Option 1'),
        React.createElement(SelectItem, { value: 'option2' }, 'Option 2')
      )
    );
  },
};
