import React, { PureComponent } from 'react';

const generateId = () => {
  return Math.random().toString(36).substring(2)
    + (new Date()).getTime().toString(36);
};

export default class App extends PureComponent {
  state = {
    name: '',
    searchText: '',
    todoItems: [],
  }

  onInputChange = (event) => {
    const label = event.target.name;
    this.setState({
      [label]: event.target.value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      name: '',
      todoItems: [
        {
          done: false,
          id: generateId(),
          name: this.state.name
        },
        ...this.state.todoItems
      ]
    })
  }

  handleItemClick = (itemId) => {
    const { todoItems } = this.state;
    const itemIndex = todoItems.findIndex(({ id }) => id === itemId);
    const { done, ...restData } = todoItems[itemIndex];

    this.setState({
      todoItems: [
        ...todoItems.slice(0, itemIndex),
        { done: !done, ...restData },
        ...todoItems.slice(itemIndex + 1)
      ]
    })
  }

  handleItemDelete = (event, itemId) => {
    event.stopPropagation();
    const { todoItems } = this.state;
    const itemIndex = todoItems.findIndex(({ id }) => id === itemId);
    this.setState({
      todoItems: [
        ...todoItems.slice(0, itemIndex),
        ...todoItems.slice(itemIndex + 1)
      ]
    })
  }

  handleItemSearch = (todoItems, searchText) => {
    if (searchText.length === 0) return todoItems;
    const filteredItems = todoItems.filter(({ name }) => (
      name.toLowerCase().includes(searchText.toLowerCase())
    ));
    return filteredItems;
  }

  render() {
    const { name, todoItems, searchText } = this.state;
    const filteredItems = this.handleItemSearch(todoItems, searchText);
    return (
      <div>
        <div>
          <input
            type="text"
            name="searchText"
            value={searchText}
            onChange={this.onInputChange}
            placeholder="Enter task name for search"
          />
        </div>
        <ul>
          {filteredItems && filteredItems.map(({ id, name, done }) => (
            <li
              key={id}
              onClick={() => this.handleItemClick(id)}
              className={done ? "done" : "active"}
            >
              {name}
              {done && <span>
                <button onClick={(event) => this.handleItemDelete(event, id)}>
                  Delete
                </button>
              </span>}
            </li>
          ))}
        </ul>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.onInputChange}
          />
          <button
            type="submit"
          >
            Add Task
          </button>
        </form>
      </div>
    )
  }
}