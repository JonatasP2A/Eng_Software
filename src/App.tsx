import React from 'react';
import AppProvider from './hooks';
import Home from './pages/Home/index';

function App() {

  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}

export default App;
