import Effecting from './useEffecting/main';
import UserContextProviderFun from './context/userContextProvider';
import TodoList from './todoList/app';
import Forming from './todoList/useReducer';
import Expense_tracker from './expense_tracker/app';
import Apping from './useReferance/UseRef';
const App = () => {

    // const { user } = useContext(UserContext)

    return (
        <>
            <UserContextProviderFun>
                {/* <TodoList />
            */}
                <Apping />
                {/* <Expense_tracker /> */}

            </UserContextProviderFun>
        </>
    )
}

export default App;