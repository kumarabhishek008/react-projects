import React,{useContext} from 'react'
import {Transaction} from './Transaction';
import {GlobalContext} from '../context/GlobalState';
function TransactionList() {
    const {transactions} = useContext(GlobalContext);
    
    return (
        <>
    <h3>History</h3>
      <ul id="list" className="list">
          {transactions.map(transactions => 
        <Transaction key={transactions.id} name={transactions.text} money={transactions.amount} uid={transactions.id}/>)}
      </ul>
        </>
    )
}

export default TransactionList
