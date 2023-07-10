import React from 'react'
import "./App.css";
import Searchbar from './Components/Searchbar';
import BookData from './mock-data.json';
function App() {
  return (
    <div className='App'>
      <Searchbar placeholder="Type Here to Search..." data={BookData}/>
      </div>
  )
}

export default App