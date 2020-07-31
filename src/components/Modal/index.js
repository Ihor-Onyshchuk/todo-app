import React from 'react';
import T from 'prop-types';

import Button from '../common/Button';
import './Modal.scss';

const Modal = ({
  onClose,
  onConfirm,
  item: { id, name },
}) => (
    <div className="modal">
      <h3 className="modal-title">
        Are you sure to want delete {name} item?
      </h3>
      <Button
        onClick={() => onConfirm(id)}
        className="modal-button"
      >
        Ok
      </Button>
      <Button
        onClick={onClose}
        className="modal-button"
      >
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