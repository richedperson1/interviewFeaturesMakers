import { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'incremented_age': {
            return {
                name: state.name,
                age: state.age + 1,
                arr: state.arr
            };
        }
        case 'changed_name': {
            return {
                name: action.nextName,
                age: state.age,
                arr: state.arr
            };
        }
        case "addingnum": {
            return {
                ...state,
                arr: [...state.arr, action.naming]
            }
        }
    }
    throw Error('Unknown action: ' + action.type);
}

const initialState = { name: 'Taylor', age: 42, arr: [] };

export default function Form() {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleButtonClick() {
        dispatch({ type: 'incremented_age' });
        dispatch({
            type: 'addingnum',
            naming: state.name
        });
        console.log("The name is  : ", state.arr)
    }

    function handleInputChange(e) {
        dispatch({
            type: 'changed_name',
            nextName: e.target.value
        });

    }

    return (
        <>
            <div>
                this is final workds : ==
                {state.arr.map((val, ind) => {
                    return (<div key={`rutvik-${ind}`}>{val}</div>)
                })}
            </div>
            <input
                value={state.name}
                onChange={handleInputChange}
            />
            <button onClick={handleButtonClick}>
                Increment age
            </button>
            <p>Hello, {state.name}. You are {state.age}.</p>
        </>
    );
}
