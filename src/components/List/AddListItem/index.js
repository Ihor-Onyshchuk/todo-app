import React, { PureComponent } from 'react';
import T from 'prop-types';

import Input from '../../common/Input';
import Button from '../../common/Button';
import { uuid } from '../../../utils/uuid';
import './AddListItem.scss';

export default class AddListItem extends PureComponent {
  state = {
    name: "",
  };

  get hasValue() {
    return !!this.state.name.trim();
  };

  onInputChange = ({ target: { value } }) => {
    this.setState({ name: value });
  };

  addItem = (event) => {
    event.preventDefault();
    const { onAddItem } = this.props;
    const { name } = this.state;

    if (this.hasValue) {
      onAddItem(
        {
          done: false,
          id: uuid(),
          name: name,
        }
      )
      this.setState({ name: '', });
    }
  };

  render() {
    const { name } = this.state;
    return (
      <form
        onSubmit={this.addItem}
        className="form"
      >
        <div className="form-inner">
          <Input
            onChange={this.onInputChange}
            value={name}
            className="form-input"
            placeholder="Enter task and press 'Add Task' button"
          />
          <Button
            type="submit"
            disabled={!this.hasValue}
            className="form-button"
          >
            Add Task
        </Button>
        </div>
      </form>
    );
  }
}

AddListItem.propTypes = {
  onAddItem: T.func.isRequired,
}