import React from 'react';
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Draggable } from 'react-beautiful-dnd';
import { Delete } from '@material-ui/icons';
import storeApi from '../../../utlts/storeApi';
import { useContext } from 'react';


const useStyle = makeStyles((theme) => ({
    cart: {
        fontFamily: 'sans-serif',
        fontWeight: '500',
        padding: theme.spacing(1, 1, 1, 2),
        margin: theme.spacing(1),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: "center",
    },
    deleteIcon: {
        cursor: "pointer"
    }
}));

const Todo = ({ card, index, list }) => {
    const classes = useStyle()
    const { removeTask } = useContext(storeApi)

    const handleDelete = (id, listId) => {
        removeTask(id, listId)
    }


    return (
        <Draggable draggableId={card.id} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                >
                    <Paper className={classes.cart}>
                        {card.title}
                        <Delete
                            className={classes.deleteIcon}
                            onClick={() => handleDelete(card.id, list)}
                        />
                    </Paper>
                </div>
            )}


        </Draggable>

    );
};

export default Todo;