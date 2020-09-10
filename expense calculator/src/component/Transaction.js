import React,{useContext} from 'react'
import {GloablContext, GlobalContext} from '../context/GlobalState'
export const Transaction = (props) => {
    const {deleteTransaction} = useContext(GlobalContext);
    const sign = props.money <0 ? '-' : '+';
    return (
        <div>
            <li className={props.money < 0 ? 'minus':'plus'}>
    {props.name} <span>{sign}${Math.abs(props.money)}</span><button className="delete-btn" onClick={() => deleteTransaction(props.uid)}>x</button>
        </li>
        </div>
    )
}
