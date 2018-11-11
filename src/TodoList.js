import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    render() {
        // tasks内の各todoをTodoItemコンポーネントを用いてエレメントにしている。
        // listにはTodoItemエレメントの配列が入っている。
        const list = this.props.tasks.map(todo => {
            return <TodoItem {...todo} key={todo.id} />;
        });
        return(
            <div>
                <ul>
                    {list}
                </ul>
            </div>
        );
    }
}

export default TodoList;