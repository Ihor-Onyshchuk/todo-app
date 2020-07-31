import React from 'react';
import T from 'prop-types';

import Button from '../../common/Button';

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
      className={done ? "done" : "active"}
    >
      {name}
      {done && <span>
        <Button
          onClick={handleDelete}
        >
          Delete
        </Button>
      </span>}
    </li>
  );
};

ListItem.propTypes = {
  item: T.object.isRequired,
  onChange: T.func.isRequired,
  onDelete: T.func.isRequired,
}

export default ListItem;