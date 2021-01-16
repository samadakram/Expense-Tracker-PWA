import React, {useContext} from 'react'
import {GlobalContext} from '../Context/GlobalContext';

export const Transaction = ({transaction}) => {

  const {deleteTransactions} = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
          {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button className="delete-btn" onClick={()=> deleteTransactions(transaction.id)}>x</button>
        </li>
    )
}
