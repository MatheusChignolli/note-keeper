import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';

import "./styles.css";

export default function Input(props) {

    const [note, setNote] = useState({
        nTitle: "",
        nText: "",
    })

    function handleChange(e) {
        const { name, value } = e.target;
        setNote(() => { return {...note, [name]: value,} })
    }

    function addNote() {
        if(note.nTitle === "" || note.nText === "") {
            alert("Preencha os dois campo!");
        } else {
            props.addItem(note);
            setNote({
                nTitle: "",
                nText: "",
            })
        }
    }

    return(
        <>
        <div className={"input-form"}>
            <div className={"form-group"}>
                <div className={"form-item"} >
                    <input name={"nTitle"} type={"text"} value={note.nTitle} onChange={handleChange} placeholder={"Title"} />
                </div>
                <div className={"form-item"} >
                    <textarea name={"nText"} id={""} cols={"30"} rows={"5"}value={note.nText} onChange={handleChange} placeholder={"Content"}></textarea>
                </div>
            </div>
            <div className={"form-submit"}>
                <button onClick={() => addNote()} ><AddIcon/></button>
            </div>
        </div>
        </>
    )
}