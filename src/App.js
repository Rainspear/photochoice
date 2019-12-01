import React from 'react';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Containers/Home/Home';
function App() {
  return (
    <div className="App">
      <Layout>
        <Home></Home>  
      </Layout> 
      </div>
  );
}

export default App;
