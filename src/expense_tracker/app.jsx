import React from "react";


import { useState, useEffect } from "react";


const Expense_tracker = () => {
    const [total_balance, set_total_balance] = useState(0)
    const [total_income, set_total_income] = useState(0)
    const [total_expense, set_total_expense] = useState(0)
    const [history_items, set_history_items] = useState([])
    const [inputValue, setInputValue] = useState('');
    const [input_num, set_input_num] = useState(0);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handle_cash = (event) => {
        console.log(event.target);
        set_input_num(event.target.value);
    };

    return (
        <>
            <main className="page-main" >
                <div className="layout  w-[500px] m-auto mt-[55px]">

                    <div className="title text-[25px] text-slate-100 text-center">Expense Tracker</div>
                    <div className="balance-layout px-5">
                        <span className="block text-slate-100">Your balance</span>
                        <span className="text-slate-100">${total_balance}</span>
                    </div>

                    <div className="income-expense-layout flex mt-2 gap-1">
                        <span className="flex flex-col p-2 w-[50%]  bg-slate-500">
                            <span className="title text-slate-100">Income</span>
                            <span className="title text-green-500">${total_income}</span>
                        </span>
                        <span className="flex flex-col w-[50%] p-2 bg-slate-500">
                            <span className="title text-slate-100">Expense</span>
                            <span className="title text-red-600">${total_expense}</span>
                        </span>
                    </div>
                    <div className="cash-transaction flex flex-col py-5">
                        <h1 className="text-slate-300 pb-5">History</h1>
                        <div className="wrapper overflow-y-auto h-[200px]">


                            {
                                history_items && history_items.map((val) => {
                                    return (
                                        <>

                                            <span className={`flex justify-between item-center bg-slate-500 p-2 border-r-4  mt-2 ${val.num > 0 ? "border-green-700 border-g-4" : "border-red-4 border-red-700"}`}>
                                                <span className="text-slate-300">{val.name}</span>
                                                <span className="flow text-slate-300">{val.num > 0 ? `+${val.num}` : `${val.num}`}</span>
                                            </span>
                                        </>
                                    )
                                })
                            }
                        </div>

                    </div>
                    {/* adding the transitions */}
                    <div>
                        <div className="flex flex-col gap-2">
                            <span className="block text-[20px] text-2xl font-bold text-slate-300">Text</span>
                            <input
                                type="text"
                                value={inputValue}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="block text-[20px] text-2xl font-bold text-slate-300">Cash (inflow/outflow)</span>
                            <input
                                type="number"
                                value={input_num}
                                onChange={handle_cash}
                            />
                        </div>
                        <div className="m-auto flex justify-center">

                            <input className="text-center mt-5 text-slate-300 p-2 cursor-pointer bg-indigo-500" type="submit" required value="Submit" onClick={() => {

                                const transition_name = inputValue;
                                const value = input_num;
                                if (transition_name === '' || value === '') {
                                    alert("not found")
                                    return
                                }
                                const new_arrr = [...history_items, { "name": transition_name, "num": value }]
                                set_history_items(new_arrr)
                                console.log(history_items);
                            }} />
                        </div>
                    </div>

                </div>
            </main>
        </>
    )
}

export default Expense_tracker;