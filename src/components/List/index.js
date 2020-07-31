import React from 'react';
import T from 'prop-types';

import ListItem from './ListItem';

const List = ({ todos, ...restProps }) => (
  <ul>
    {todos.map(todo => (
      <ListItem
        key={todo.id}
        item={todo}
        {...restProps}
      />
    ))}
  </ul>
);

List.propTypes = {
  todos: T.array.isRequired,
}

export default List;