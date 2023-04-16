import { useContext } from "react";
import userContext from "./userContext";

function ChildComp() {
    const user = useContext(userContext);
    if ( user?.name ) {
        return <h2>I am {user.name}</h2>
    } else {
        return <h2>I have no provider.</h2>
    }
}

export default ChildComp;
