import React from "react";
import { Paper,Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core";
import Title from "../Title/Title.jsx";
import Todo from "../Todo/Todo.jsx";
import InputContainer from "../Input/InputContainer.jsx";
import { Droppable } from "react-beautiful-dnd";



const useStyle = makeStyles((theme) => ({
    root: {
        width: '300px',
        backgroundColor: '#EBECF0',
        marginLeft: theme.spacing(2)

    },
    cardContainer:{
        marginTop: theme.spacing(4),
    }
}));
const ToDoInfo = ({ list, listId }) => {
    const classes = useStyle()
    return(
        <div>
            <Paper className={classes.root}>
                <Title title = {list.title} listId={list.id}/>
                <Droppable droppableId={list.id}>
                    {(provided) =>(
                        <div ref={provided.innerRef} {...provided.droppableProps} className={classes.cardContainer}>
                            {list.cards.map((card, index) => (
                            <Todo key = {card.id} card = { card } index={ index } list={listId}/>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                    

                </Droppable>
                
                <InputContainer listId={list.id} type="card" />
            </Paper>
        </div>
        
    )
}

export default ToDoInfo