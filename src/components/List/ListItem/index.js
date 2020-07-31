import React from 'react';
import T from 'prop-types';
import cx from 'classnames';

import Button from '../../common/Button';
import './ListItem.scss';

const ListItem = ({
  onChange,
  onDelete,
  item: { id, name, done },
}) => {
  const handleDelete = (event) => {
    event.stopPropagation();
    onDelete({ id, name });
  }
  return (
    <li
      onClick={() => onChange(id)}
      className={cx("todos-item", { 'done': done })}
    >
      {name}
      {done &&
        <Button
          onClick={handleDelete}
          className="todos-item-button"
        >
          Delete
        </Button>
      }
    </li>
  );
};

ListItem.propTypes = {
  item: T.object.isRequired,
  onChange: T.func.isRequired,
  onDelete: T.func.isRequired,
}

export default ListItem;