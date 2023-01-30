import React, {useState} from 'react';
import {Typography, InputBase} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import {MoreHoriz} from "@material-ui/icons";
import { useContext } from 'react';
import storeApi from '../../../utlts/storeApi';


const useStyle = makeStyles((theme) => ({

    editableTitle: {
        flexGrow: 1,
        fontSize: '1.2rem',
        fontWeight: 'bold',
    },
    editableTitleContainer:{
        display: "flex",
        margin:theme.spacing(0,1.5)
    },
    input: {
        margin: theme.spacing(1),

        '&:focus': {
            background: '#ddd',
        }
    }
}));
const Title = ( { title, listId } ) => {
    const classes = useStyle()

    const [open, setOpen] = useState()
    const [newTitle, setNewTitle] = useState(title)
    const { updateListTitle }= useContext(storeApi)
    const handleOnChange = (e) => {
        setNewTitle(e.target.value)
    }
    const handleOnBlur = () => {
        setOpen(false)
        updateListTitle(newTitle, listId)
    }


    return (
        <div>
            {
                open?
                    <div>
                        <InputBase
                            onChange={handleOnChange}
                            value = {newTitle}
                            inputProps={{
                                className: classes.input,
                            }}
                        fullWidth
                            onBlur = {handleOnBlur}
                        />
                    </div>
                    :
                    <div className={classes.editableTitleContainer}>
                        <Typography
                        onClick={() => setOpen(!open)} className={classes.editableTitle}>{title}</Typography>
                        <MoreHoriz/>
                    </div>
            }
        </div>
    );
};

export default Title;