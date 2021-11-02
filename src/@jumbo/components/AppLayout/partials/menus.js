import React from 'react';
import { PostAdd } from '@material-ui/icons';
import IntlMessages from '../../../utils/IntlMessages';

export const sidebarNavs = [
  {
    name: <IntlMessages id={'sidebar.main'} />,
    type: 'section',
    children: [
      // {
      //   name: <IntlMessages id={'pages.samplePage'} />,
      //   type: 'item',
      //   icon: <PostAdd />,
      //   link: '/sample-page',
      // },
      {
        name: <IntlMessages id={'pages.tablePage'} />,
        type: 'item',
        icon: <PostAdd />,
        link: '/table-page',
      },
      {
        name: <IntlMessages id={'pages.fieldPage'} />,
        type: 'item',
        icon: <PostAdd />,
        link: '/field-page',
      },
    ],
  },
];

export const horizontalDefaultNavs = [
  {
    name: <IntlMessages id={'sidebar.main'} />,
    type: 'collapse',
    children: [
      // {
      //   name: <IntlMessages id={'pages.samplePage'} />,
      //   type: 'item',
      //   icon: <PostAdd />,
      //   link: '/sample-page',
      // },
      {
        name: <IntlMessages id={'pages.tablePage'} />,
        type: 'item',
        icon: <PostAdd />,
        link: '/table-page',
      },
      {
        name: <IntlMessages id={'pages.fieldPage'} />,
        type: 'item',
        icon: <PostAdd />,
        link: '/field-page',
      },
    ],
  },
];

export const minimalHorizontalMenus = [
  {
    name: <IntlMessages id={'sidebar.main'} />,
    type: 'collapse',
    children: [
      // {
      //   name: <IntlMessages id={'pages.samplePage'} />,
      //   type: 'item',
      //   icon: <PostAdd />,
      //   link: '/sample-page',
      // },
      {
        name: <IntlMessages id={'pages.tablePage'} />,
        type: 'item',
        icon: <PostAdd />,
        link: '/table-page',
      },
      {
        name: <IntlMessages id={'pages.fieldPage'} />,
        type: 'item',
        icon: <PostAdd />,
        link: '/field-page',
      },
    ],
  },
];
