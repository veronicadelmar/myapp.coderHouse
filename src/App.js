import React from 'react';
import Header from './components/Header/Header';
import Container from './components/ItemlistContainer/ItemListContainer';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    
    <main style={{padding:'0', margin:'10px' }} >
      <Header />
      <Container />
      <Footer />
    </main>


      
  );
}

export default App;
