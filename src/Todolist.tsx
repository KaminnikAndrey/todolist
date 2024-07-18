import React from 'react';

type TodolistPropsType = {
    title: string
}

export const Todolist = (props: TodolistPropsType) => {
    const {title} = props
    const tasks1 = [{id: 1, title: 'HTML&CSS', isDone: true}, {id: 2, title: 'JS', isDone: true}, {
        id: 3,
        title: 'ReactJS',
        isDone: false
    },]
    const tasks2 = [{id: 1, title: 'Hello world', isDone: true}, {id: 2, title: 'I am Happy', isDone: false}, {
        id: 3,
        title: 'Yo',
        isDone: false
    },]

    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                <li><input type="checkbox" checked={true}/> <span>HTML&CSS</span></li>
                <li><input type="checkbox" checked={true}/> <span>JS</span></li>
                <li><input type="checkbox" checked={false}/> <span>React</span></li>
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
            <div></div>
        </div>
    );
};