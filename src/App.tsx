import ListGroup from './components/ListGroup';

function App() {
  let list = ["Roua", "Sohaieb", "Mouadh", "Gattouss"];

  const handleClick = (item: string) => {
    console.log(item);
  }

  return <div>
    <ListGroup items={list} heading='Test' onSelectItem={handleClick} />
  </div>
}

export default App;