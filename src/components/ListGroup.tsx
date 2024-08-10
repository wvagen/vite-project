const list = ["Roua", "Sohaieb", "Mouadh"];

function ListGroup() {
  return (
    <>
      <h1>My List</h1>
      <ul className="list-group">
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
