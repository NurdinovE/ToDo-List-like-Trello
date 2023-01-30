import React, { useState } from 'react';
import {Button, IconButton, InputBase, Paper} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles, alpha } from "@material-ui/core/styles";
import { useContext } from 'react';
import storeApi from '../../../utlts/storeApi';

const useStyle = makeStyles((theme) => ({
    card: {
        width: '280px',
        margin: theme.spacing(0, 1, 1, 1),
        paddingBottom: theme.spacing(4),
    },
    input: {
        marginLeft: theme.spacing(1)

    },
    btnConfirm: {
        background: '#5AAC44',
        color: '#fff',
        '&:hover': {
            background: alpha('#5AAC44', 0.75),
        },
    },
    confirm: {
        margin: theme.spacing(0, 1, 1, 1),
    },
}));
const InputCard = ( { setOpen, listId, type } ) => {
    const classes = useStyle()
    const [title, setTitle] = useState("")
    const {addMoreCard, addMoreList} = useContext(storeApi)

    const handleOnChange = (e) => {
        setTitle(e.target.value)
    }

    const handleBtnConfirm = () =>{
        if (type === "card"){
            addMoreCard(title, listId)
            setTitle('')
            setOpen(false)
            
        }
        else{
            addMoreList(title)
            setTitle('')
            setOpen(false)
        }
    }

    return (
        <div>
            <div>
                <Paper className={classes.card}>
                    <InputBase
                        onChange={handleOnChange}
                        onBlur={() => setOpen(false)}
                        multiline
                        fullWidth
                        inputProps={{
                            className: classes.input,
                        }}
                        value = {title}
                        placeholder={ type === "card"?  
                                'Enter a title of this card..': 
                                'Enter list title...'
                        }
                    />
                </Paper>
            </div>
            <div className={classes.confirm}>
                <Button className={classes.btnConfirm} onClick={handleBtnConfirm}>
                    {type === "card" ? "Add cart" : "Add List"}
                </Button>
                <IconButton onClick={() => setOpen(false)}>
                    <ClearIcon />
                </IconButton>

            </div>

        </div>
    );
};

export default InputCard;