import { useContext, useReducer, useState } from 'react'
import UserContext from '../context/userContext'

const reducer = (state, actions) => {
    switch (actions.type) {
        case ("increament"):

            return { count: state.count + 1, arr: [...state.arr, actions.name] }

        case ("decreament"):
            return { count: state.count - 1 }

        default:
            return state
    }

}
const TodoList = () => {
    const [state, dispach] = useReducer(reducer, { count: 0, arr: [] })
    const [todo, setTodo] = useState([])
    const [inputText, setInputText] = useState("")
    const { user } = useContext(UserContext)
    return (
        <>

            <div className="container bg-blue-500">
                <div>TodoList</div>
                <div className="counting">"This is final " {state.count}</div>
                <div className="items">
                    "linking"
                    {state && state.arr.map((val, ind) => {
                        return (<div key={`index-${ind}`}>
                            {val}
                        </div>)
                    })}
                </div>
                <div className="sumit bg-blue-900 flex   h-full gap-[40px]">


                    <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
                    <input type="submit" value="submit" onClick={() => {
                        const newTodo = [...todo, inputText]
                        setTodo(newTodo)
                        setInputText("")
                        dispach({ type: "increament" })

                    }} className='text-white p-2 bg-black' />
                    {todo && todo.map((val, ind) => {
                        return (<div onClick={() => dispach({ type: "decreament", name: `rutvik-${ind}` })} className='p-2 bg-black rounded-md text-white' key={`val-${ind}`}>{val}</div>)
                    })}
                </div>
                <main className="domain">
                    This is final words : {user}
                </main>
            </div >
        </>
    )
}

export default TodoList;