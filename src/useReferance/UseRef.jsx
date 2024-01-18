import { useState, useEffect, useRef } from "react";

function Apping() {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
        console.log(count.current);
    });

    return (
        <>
            <input

                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h1>Render Count: {inputValue}</h1>
        </>
    );
}

export default Apping;