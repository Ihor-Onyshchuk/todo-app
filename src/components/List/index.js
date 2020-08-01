import React from 'react';
import T from 'prop-types';

import ListItem from './ListItem';

import './List.scss';

const List = ({ todos, ...restProps }) => (
  <ul className="todos">
    {
      todos.map(todo => (
        <ListItem
          key={todo.id}
          item={todo}
          {...restProps}
        />
      ))
    }
  </ul >
);

List.propTypes = {
  todos: T.array.isRequired,
}

export default List;
