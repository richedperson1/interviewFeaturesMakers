import { useContext, useState } from 'react'
import UserContext from '../context/userContext'

const TodoList = () => {
    const [todo, setTodo] = useState([])
    const [inputText, setInputText] = useState("")
    const { user } = useContext(UserContext)
    return (
        <>

            <div className="container bg-blue-500">
                <div>TodoList</div>

                <div className="sumit bg-blue-900 flex   h-full gap-[40px]">


                    <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
                    <input type="submit" value="submit" onClick={() => {
                        const newTodo = [...todo, inputText]
                        setTodo(newTodo)
                        setInputText("")
                    }} className='text-white p-2 bg-black' />
                    {todo && todo.map((val, ind) => {
                        return (<div className='text-white' key={`val-${ind}`}>{val}</div>)
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