import { useState } from "react";

interface Props {
  heading: string,
  items: string[],
  onSelectItem(item: string): void,
}

function ListGroup({ items, heading, onSelectItem }: Props) {

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      {items.length == 0 &&
        <h1>List is Empty</h1>}
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li className={selectedIndex == index ? "list-group-item active" : 'list-group-item'} onClick={() => {
            setSelectedIndex(index);
            onSelectItem(item)
          }
          }>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
