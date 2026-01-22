import React from 'react';
import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxItem,
  ComboboxEmpty,
} from './combobox';

const meta = {
  title: 'UI/Combobox',
  component: Combobox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

const items = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
  { value: 'strawberry', label: 'Strawberry' },
];

export const Default = {
  render: () => {
    const React = require('react');
    const [value, setValue] = React.useState('');
    return React.createElement(Combobox, { value: value, onValueChange: setValue },
      React.createElement(ComboboxInput, { placeholder: 'Search fruits...', showTrigger: true, showClear: true }),
      React.createElement(ComboboxList, null,
        items.map((item) =>
          React.createElement(ComboboxItem, { key: item.value, value: item.value }, item.label)
        ),
        React.createElement(ComboboxEmpty, null, 'No results found.')
      )
    );
  },
};

export const WithDefaultValue = {
  render: () => {
    const React = require('react');
    const [value, setValue] = React.useState('apple');
    return React.createElement(Combobox, { value: value, onValueChange: setValue },
      React.createElement(ComboboxInput, { placeholder: 'Search fruits...', showTrigger: true, showClear: true }),
      React.createElement(ComboboxList, null,
        items.map((item) =>
          React.createElement(ComboboxItem, { key: item.value, value: item.value }, item.label)
        ),
        React.createElement(ComboboxEmpty, null, 'No results found.')
      )
    );
  },
};

export const Disabled = {
  render: () => {
    const React = require('react');
    return React.createElement(Combobox, { disabled: true },
      React.createElement(ComboboxInput, { placeholder: 'Disabled combobox', showTrigger: true, disabled: true }),
      React.createElement(ComboboxList, null,
        items.map((item) =>
          React.createElement(ComboboxItem, { key: item.value, value: item.value }, item.label)
        )
      )
    );
  },
};
