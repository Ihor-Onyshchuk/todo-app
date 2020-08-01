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
      <div onClick={onClose} className="modal-backdrop" />
      <div className="modal-content">
        <h3 className="modal-title">
          Are you sure to want delete <b>{name}</b>?
        </h3>
        <div className="modal-footer">
          <Button onClick={() => onConfirm(id)}>Ok</Button>
          <Button onClick={onClose}>Cancel</Button>
        </div>
      </div>
    </div>
  );

Modal.propTypes = {
  item: T.object.isRequired,
  onConfirm: T.func.isRequired,
  onClose: T.func.isRequired,
}

export default Modal;
