import Effecting from './useEffecting/main';
import UserContextProviderFun from './context/userContextProvider';
import TodoList from './todoList/app';
import Forming from './todoList/useReducer';

const App = () => {

    // const { user } = useContext(UserContext)

    return (
        <>
            <UserContextProviderFun>
                <TodoList />
                <Forming />

            </UserContextProviderFun>
        </>
    )
}

export default App;