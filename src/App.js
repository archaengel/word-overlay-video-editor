import React from 'react';
import { AppContainer } from './lib/components';
import { Editor, DragLayer, Toggles } from './sections';

function App() {
  return (
    <div className="App">
      <AppContainer>
        <DragLayer />
        <Editor
          source="https://frontend-coding-challenge.s3.amazonaws.com/moonwalker.mp4"
          type="video/mp4"
        />
        <Toggles />
      </AppContainer>
    </div>
  );
}

export default App;
