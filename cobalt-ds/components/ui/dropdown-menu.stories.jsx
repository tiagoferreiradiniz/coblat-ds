import React from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
} from './dropdown-menu';
import { Button } from './button';
import { MoreVerticalIcon, UserIcon, SettingsIcon, LogOutIcon } from 'lucide-react';

const meta = {
  title: 'UI/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default = {
  render: () => {
    const React = require('react');
    return React.createElement(DropdownMenu, null,
      React.createElement(DropdownMenuTrigger, { asChild: true },
        React.createElement(Button, { variant: 'outline' }, 'Open Menu')
      ),
      React.createElement(DropdownMenuContent, null,
        React.createElement(DropdownMenuItem, null, 'Profile'),
        React.createElement(DropdownMenuItem, null, 'Settings'),
        React.createElement(DropdownMenuItem, null, 'Logout')
      )
    );
  },
};

export const WithIcons = {
  render: () => {
    const React = require('react');
    return React.createElement(DropdownMenu, null,
      React.createElement(DropdownMenuTrigger, { asChild: true },
        React.createElement(Button, { variant: 'outline', size: 'icon' }, React.createElement(MoreVerticalIcon))
      ),
      React.createElement(DropdownMenuContent, null,
        React.createElement(DropdownMenuItem, null,
          React.createElement(UserIcon, { className: 'mr-2' }),
          'Profile'
        ),
        React.createElement(DropdownMenuItem, null,
          React.createElement(SettingsIcon, { className: 'mr-2' }),
          'Settings'
        ),
        React.createElement(DropdownMenuSeparator, null),
        React.createElement(DropdownMenuItem, null,
          React.createElement(LogOutIcon, { className: 'mr-2' }),
          'Logout'
        )
      )
    );
  },
};

export const WithGroups = {
  render: () => {
    const React = require('react');
    return React.createElement(DropdownMenu, null,
      React.createElement(DropdownMenuTrigger, { asChild: true },
        React.createElement(Button, { variant: 'outline' }, 'Options')
      ),
      React.createElement(DropdownMenuContent, null,
        React.createElement(DropdownMenuGroup, null,
          React.createElement(DropdownMenuLabel, null, 'My Account'),
          React.createElement(DropdownMenuItem, null, 'Profile'),
          React.createElement(DropdownMenuItem, null, 'Settings')
        ),
        React.createElement(DropdownMenuSeparator, null),
        React.createElement(DropdownMenuItem, { variant: 'destructive' }, 'Delete Account')
      )
    );
  },
};
