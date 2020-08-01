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
      className={cx("todos-item", { done })}
    >
      <p title={name} className="todos-item-text">
        {name}
      </p>
      {done &&
        <Button
          onClick={handleDelete}
          className="btn-danger btn-remove"
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
