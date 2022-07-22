import React, { useCallback, useState } from 'react';
import Button from './components/UI/Button/Button';

import './App.css'
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  //  console.log('APP RUNNING');


  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      console.log(allowToggle);
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle])

  const allowToggleHandler = () => {
    setAllowToggle(true);
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggling paragraph</Button>
    </div>
  );
}

export default App;
