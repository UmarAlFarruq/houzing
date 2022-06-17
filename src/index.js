import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import { Root } from './root/index';
import 'antd/dist/antd.css';
import "react-alice-carousel/lib/alice-carousel.css";
import { QueryClient, QueryClientProvider } from 'react-query';


const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <QueryClientProvider client={queryClient} >
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </QueryClientProvider>
  // </React.StrictMode>
);


