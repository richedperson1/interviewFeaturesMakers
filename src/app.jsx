import Effecting from './useEffecting/main';
import UserContextProviderFun from './context/userContextProvider';
import TodoList from './todoList/app';
const App = () => {

    // const { user } = useContext(UserContext)

    return (
        <>
            <UserContextProviderFun>
                <TodoList />
                <Effecting />

            </UserContextProviderFun>
        </>
    )
}

export default App;