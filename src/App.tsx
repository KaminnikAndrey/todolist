import React, {MouseEvent, useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {List} from "./List";
import {Button} from "./Button";

export type ItemListPropsType = {
    manufacturer: string
    model: string
}

type FilterType = 'all' | 'Dollars' | 'RUBLS'

function App() {
    const title1 = '1'
    const title2 = '2'

    const m = [
        {id: 1, banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {id: 2, banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {id: 3, banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {id: 4, banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {id: 5, banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {id: 6, banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {id: 7, banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {id: 8, banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ]

    const [money, setMoney] = useState(m)

    const onClickHandker = (banknot: FilterType) => {
        if (banknot === 'all') {
            let currentMoney = m.filter((filteredMoney) => filteredMoney.banknots !== banknot)
            setMoney(currentMoney)
        }
        else{
            let currentMoney = m.filter((filteredMoney) => filteredMoney.banknots === banknot)
            setMoney(currentMoney)
        }
    }

    return (
        <div className="App">
            <Todolist title={title1}/>
            <Todolist title={title2}/>
            <div>
                {money.map((objInfo) => {
                    return (
                        <li key={objInfo.id}>
                            <span>{objInfo.banknots} </span>
                            <span>{objInfo.value} </span>
                            <span>{objInfo.number}</span>
                        </li>
                    )
                })}
            </div>
            <button onClick={() => onClickHandker('all')}>all</button>
            <button onClick={() => onClickHandker('RUBLS')}>RUBLS</button>
            <button onClick={() => onClickHandker('Dollars')}>Dollars</button>
        </div>
    );
}

export default App;
