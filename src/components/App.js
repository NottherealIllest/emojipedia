import React from 'react';
import '../index.css';
import Entry from './Entry';
import emojipedia from '../emojipedia'


function createEntry(emojipedia){
  return <Entry
  key = {emojipedia.id}
  emoji = {emojipedia.symbol}
  name = {emojipedia.title}
  meaning = {emojipedia.keywords}
  />
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
     {emojipedia.map(createEntry)}
      </dl>
    </div>
  );
}


export default App;
