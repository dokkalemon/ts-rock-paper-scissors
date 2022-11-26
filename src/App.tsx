import React, { useState } from 'react';
import { Header, RulesButton, Dialog } from 'components'

function App() {
  const [dialog, setDialog] = useState<boolean>(false)


  return (
    <div className="App" style={{ height: '100vh', overflow: 'hidden' }}>
      <Header bonus={true} />
      <RulesButton onClick={() => setDialog(true)} />
      {dialog && <Dialog bonus={true} closeDialog={() => setDialog(false)} />}
    </div>
  );
}

export default App;
