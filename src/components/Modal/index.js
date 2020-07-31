import React from 'react';
import T from 'prop-types';

import Button from '../common/Button';

const Modal = ({
  onClose,
  onConfirm,
  item: { id, name },
}) => (
    <div>
      <h2>Are you sure to want delete {name}</h2>
      <Button
        onClick={() => onConfirm(id)}
      >
        Ok
      </Button>
      <Button onClick={onClose}>
        Cancel
      </Button>
    </div>
  );

Modal.propTypes = {
  item: T.object.isRequired,
  onConfirm: T.func.isRequired,
  onClose: T.func.isRequired,
}

export default Modal;