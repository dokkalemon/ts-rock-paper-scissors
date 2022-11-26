import React, { useState } from 'react';
import { Header, RulesButton, Dialog, Wrapper, Choice, Battle } from 'components'

function App() {
  const [dialog, setDialog] = useState<boolean>(false)
  const [bonus] = useState<boolean>(false)

  return (
    <div className="App" style={{ height: '100vh', overflow: 'hidden' }}>
      <Header bonus={bonus} />
      <RulesButton onClick={() => setDialog(true)} />
      {dialog && <Dialog bonus={bonus} closeDialog={() => setDialog(false)} />}
      <Wrapper>
        {/* <Choice bonus={bonus} /> */}
        <Battle />
      </Wrapper>
    </div>
  );
}

export default App;
