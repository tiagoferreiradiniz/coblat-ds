import React from 'react';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from './alert-dialog';
import { Button } from './button';

const meta = {
  title: 'UI/AlertDialog',
  component: AlertDialog,
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
    return React.createElement(AlertDialog, null,
      React.createElement(AlertDialogTrigger, { asChild: true },
        React.createElement(Button, { variant: 'primary' }, 'Open Dialog')
      ),
      React.createElement(AlertDialogContent, { size: 'default' },
        React.createElement(AlertDialogHeader, null,
          React.createElement(AlertDialogTitle, null, 'Are you sure?'),
          React.createElement(AlertDialogDescription, null, 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.')
        ),
        React.createElement(AlertDialogFooter, null,
          React.createElement(AlertDialogCancel, null, 'Cancel'),
          React.createElement(AlertDialogAction, null, 'Continue')
        )
      )
    );
  },
};

export const Small = {
  render: () => {
    const React = require('react');
    return React.createElement(AlertDialog, null,
      React.createElement(AlertDialogTrigger, { asChild: true },
        React.createElement(Button, { variant: 'primary' }, 'Open Small Dialog')
      ),
      React.createElement(AlertDialogContent, { size: 'sm' },
        React.createElement(AlertDialogHeader, null,
          React.createElement(AlertDialogTitle, null, 'Confirm'),
          React.createElement(AlertDialogDescription, null, 'Are you sure you want to proceed?')
        ),
        React.createElement(AlertDialogFooter, null,
          React.createElement(AlertDialogCancel, null, 'Cancel'),
          React.createElement(AlertDialogAction, null, 'Confirm')
        )
      )
    );
  },
};

export const Destructive = {
  render: () => {
    const React = require('react');
    return React.createElement(AlertDialog, null,
      React.createElement(AlertDialogTrigger, { asChild: true },
        React.createElement(Button, { variant: 'destructive' }, 'Delete Account')
      ),
      React.createElement(AlertDialogContent, null,
        React.createElement(AlertDialogHeader, null,
          React.createElement(AlertDialogTitle, null, 'Delete Account'),
          React.createElement(AlertDialogDescription, null, 'This will permanently delete your account. This action cannot be undone.')
        ),
        React.createElement(AlertDialogFooter, null,
          React.createElement(AlertDialogCancel, null, 'Cancel'),
          React.createElement(AlertDialogAction, { variant: 'destructive' }, 'Delete')
        )
      )
    );
  },
};
