import React from 'react';
import {createRoot} from 'react-dom/client';

require('./bootstrap');

import ReactDataTableApp from './ReactDataTableApp';

const rootElement = document.getElementById('datatable');
const root = createRoot(rootElement);

if (document.getElementById('datatable')) {
    root.render(<ReactDataTableApp />);
}