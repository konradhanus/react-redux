import React, { useState } from 'react';
import Level1 from './Level1';

export const TextContext = React.createContext('light');

function Tree() {
  const [state, setState] = useState(1)

  return (
    <div className="Tree">
      <TextContext.Provider value={state}  >
        <button onClick={()=>setState(state+1)}>Add</button>
        <Level1/>
      </TextContext.Provider>
    </div>
  );
}

export default Tree;
