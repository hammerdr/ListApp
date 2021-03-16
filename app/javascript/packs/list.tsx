import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

type Item = {
  id: number;
  name: string;
}

const ItemComponent = ({ item }: { item: Item }): JSX.Element => {
  return (<div>{item.name}</div>);

};

const ListApp = (): JSX.Element => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetch('/items', { headers: { 'Accept': 'application/json' } }).then(async (response) => {
      setItems((await response.json()) as Item[]);
    });
  }, [fetch]);

  if (items.length === 0) {
    return (<div style={{padding: 20}}>There are no items.</div>);
  }

  return (
    <div style={{padding: 20}}>
      {items.map(item => <ItemComponent key={item.id} item={item} />)}
    </div>
  )
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ListApp />,
    document.getElementById('list-app')
  )
})
