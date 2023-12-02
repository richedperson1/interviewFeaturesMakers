
import { useState } from "react";
import UserContext from "./userContext";

const UserContextProviderFun = (props) => {
    const [user, setUser] = useState(null)
    return (
        <>
            <UserContext.Provider value={{ user, setUser }}>
                {props.children}
            </UserContext.Provider>
        </>
    )

}

export default UserContextProviderFun;