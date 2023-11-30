import { useState } from 'react'

const TodoList = () => {
    const [todo, setTodo] = useState([])
    const [inputText, setInputText] = useState("")
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
            </div >
        </>
    )
}

export default TodoList;