import { useContext, useEffect} from "react";
import {UserContext} from "../providers/userProvider";
import {useHistory} from "react-router-dom";

export default function Logout () {
    const {logout} = useContext(UserContext)
    const history = useHistory()
    useEffect(() => {
        logout()
        history.goBack()
    })
    return(<></>)
}
