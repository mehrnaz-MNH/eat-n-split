import { useState } from 'react'
import React from 'react';

export const BillForm = ({ friend, onSubmitForm }) => {
    const [option, setOption] = useState();
    const [bill, setBill] = useState(0);
    const [expense, setExpense] = useState(0);
    const othersExpense = bill - expense;
    const balance = option === "you" ? othersExpense : -othersExpense;

    if (!friend) {
        return <div>Please select a friend to split the bill with.</div>;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(balance);
        onSubmitForm(friend.id, balance);
    };
    return (
        <div>
            <form className="form-split-bill" onSubmit={handleSubmit}>

                <label> 🤑 Bill Value</label>
                <input type="number" value={bill} onChange={e => setBill(Number(e.target.value))} />
                <label> 👩 Your Expense</label>
                <input type="number" value={expense} onChange={e => setExpense(Number(e.target.value))} />
                <label> 🤸‍♀️ {friend.name} Expense</label>
                <input type="number" readOnly={true} defaultValue={0} value={othersExpense} />
                <label> 💸 Who is paying the bill?</label>
                <select onSelect={(e) => setOption(e.target.value)} value={option}>
                    <option value="you">You</option>
                    <option value="other">{friend.name}</option>
                </select>
                <button type="submit" className="button">Split Bill</button>


            </form>
        </div>
    )
}
