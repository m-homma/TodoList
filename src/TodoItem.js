import React, { Component } from 'react';

// TODOを一覧に表示するためのコンポーネント
function TodoItem(props) {
    return (
        <li>
            {props.title}
        </li>
    );
}

export default TodoItem;