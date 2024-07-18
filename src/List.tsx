import * as React from 'react';
import {ItemListPropsType} from "./App";

type ListPropsType = {
    list: ItemListPropsType[]
}

export const List = ({list}: ListPropsType) => {
    return (
        <div>
            {list.map((item: ItemListPropsType) => {
                return (
                    <div>
                        <div>{item.manufacturer}</div>
                        <div>{item.model}</div>
                    </div>
                )
            })}
        </div>
    );
};