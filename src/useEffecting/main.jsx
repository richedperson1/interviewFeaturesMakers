
import { useEffect, useState, useContext } from 'react'
import UserContext from '../context/userContext'

const Effecting = () => {
    const [count, setCount] = useState(0)
    const [final, setFinal] = useState("I'm coder")
    const { setUser } = useContext(UserContext)

    // 
    // useEffect(() => {
    //     console.log("Final words");
    //     setFinal("Do it forever !");

    //     // Move the condition that updates the context outside the rendering phase
    //     if (count >= 5) {
    //         setUser(`pach pati mil gai please check ${count - 4}`);
    //     }
    // }, [count, setUser]);

    useEffect(() => {
        console.log("Final words")
        setFinal("Do it forever !")
    }, [])

    useEffect(() => {
        console.log("This is setUser : ", setUser)
        if (count >= 5) {
            setUser(`pach pati mil gai please check ${count - 5}`)
        }
    }, [count, setUser])

    return (
        <>
            <div className="input-val text-black text-bold ">Total Count is : {count}</div>
            <div className="heading">{final}</div>
            <input type="submit" value="submit" onClick={() => setCount(count + 1)} className='text-black p-3 bg-indigo-500 ' />
        </>
    )
}

export default Effecting