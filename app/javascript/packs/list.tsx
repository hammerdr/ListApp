import React from 'react';
import ReactDOM from 'react-dom';

const ListApp = (): JSX.Element => {
  return (<div>Hello World!</div>);
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ListApp />,
    document.body.appendChild(document.createElement('div')),
  )
})
