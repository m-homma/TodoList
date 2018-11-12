import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

// アプリ全体をまとめるコンポーネント
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { title: 'Default Todo', id: 0 }
      ],
      uniqueId: 1
    };
    // addTodo内のthisを固定するためにここでbindする。
    this.addTodo = this.addTodo.bind(this);
    this.resetTodo = this.resetTodo.bind(this);
  }

  resetTodo() {
    this.setState({
      tasks: []
    });
  }

  addTodo(title) {
    // constの{}内で宣言された値は変数として個別に使える。（constなので変更は不可）
    const {
      tasks,
      uniqueId
    } = this.state;

    tasks.push({
      title,
      id: uniqueId
    });

    this.setState({
      tasks,
      uniqueId: uniqueId + 1
    });
  }

  render() {
    return (
      <div>
        <h1>TODO App</h1>
        <button onClick={this.resetTodo}>リセット</button>
        <TodoInput addTodo={this.addTodo} />
        <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
