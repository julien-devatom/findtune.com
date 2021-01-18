import {Alert} from "@material-ui/lab";
import {useContext, useEffect} from "react";
import {FlashContext} from "../providers/flashProvider";

export default function Flashs(){
    const {flash, removeFlash} = useContext(FlashContext)
    const close = (key) => {
        removeFlash(key)
    }
    useEffect(() =>{
        console.log(flash)
    })
    return(
    <div className="container mt-3">
        {flash !== [] && flash.map(( _flash, key) =>  <Alert key={key} onClose={close(key)} severity={_flash.type}>{_flash.message}</Alert>)}
    </div>
    )
}
