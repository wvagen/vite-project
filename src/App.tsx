import { useState } from 'react';
import Alert from './components/Alert';
import ListGroup from './components/ListGroup';
import Button from './components/Button';

function App() {

  const [color, setColor] = useState('');
  const [label, setLabel] = useState('');
  const [visible, setVisible] = useState(false);

  return <div>
    {<Alert onClose={() => setVisible(false)} color={color} label={label} />}
    <Button onOpenAlert={() => setVisible(true)} color='success' label='Roua' changeMyLabel={setLabel} changeMyColor={setColor} />
    <Button onOpenAlert={() => setVisible(true)} color='primary' label='Mouadh' changeMyLabel={setLabel} changeMyColor={setColor} />
    <Button onOpenAlert={() => setVisible(true)} color='secondary' label='Sohaieb' changeMyLabel={setLabel} changeMyColor={setColor} />
  </div>
}

export default App;