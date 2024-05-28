import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Capzul/relatorio',
    component: ComponentCreator('/Capzul/relatorio', '611'),
    exact: true
  },
  {
    path: '/Capzul/docs',
    component: ComponentCreator('/Capzul/docs', 'fb8'),
    routes: [
      {
        path: '/Capzul/docs',
        component: ComponentCreator('/Capzul/docs', 'd29'),
        routes: [
          {
            path: '/Capzul/docs',
            component: ComponentCreator('/Capzul/docs', '6e6'),
            routes: [
              {
                path: '/Capzul/docs/intro',
                component: ComponentCreator('/Capzul/docs/intro', '6c7'),
                exact: true,
                sidebar: "defaultSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/Capzul/',
    component: ComponentCreator('/Capzul/', 'c42'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
