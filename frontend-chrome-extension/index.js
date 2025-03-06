
import React from 'react';
import ReactDOM from 'react-dom/client';
import EmailSidebar from './src/EmailSidebar';

// Wait for the sidebar div to be available
const renderSidebar = () => {
  const sidebarDiv = document.getElementById('financial-aid-sidebar');
  if (sidebarDiv) {
    const root = ReactDOM.createRoot(sidebarDiv);
    root.render(<EmailSidebar />);
  } else {
    setTimeout(renderSidebar, 100);
  }
};

renderSidebar();