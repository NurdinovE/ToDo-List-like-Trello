import React,{ useState,useEffect } from "react";
import ToDoInfo from "./ToDoInfo/ToDoInfo.jsx"
import StoreApi from "../../utlts/storeApi.jsx";
import store from "../../utlts/store"
import {v4 as uuid} from "uuid"
import InputContainer from "./Input/InputContainer.jsx";
import { DragDropContext } from "react-beautiful-dnd";



const Content = () => {
    const [ data, setData ] = useState(store)
    

    
  
    const addMoreCard = (title,listId) => {
        const newCardId = uuid()
        const newCard = {
            id: newCardId,
            title
        };
        const list = data.lists[listId]
        list.cards=[...list.cards,newCard]

        const newState = {
            ...data,
            lists:{
                ...data.lists,
                [listId]: list
            }
        }
        setData(newState)
    }
    
    const addMoreList = (title) => {
        const newListId = uuid()
        const newList = {
            id: newListId,
            title,
            cards:[]
        }
        const newState = {
            listIds: [...data.listIds,newListId],
            lists:{
                ...data.lists,
                [newListId]: newList
            }
        }
        setData(newState)

    }

    const updateListTitle = (title, listId) => {
        const list = data.lists[listId]
        list.title = title
        const newState = {
            ...data,
            lists: {
                ...data.lists,
                [listId]: list
            },
        }
        setData(newState)
    }



    const removeTask = (id) => {
        
    }

    
  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    if (!destination) {
      return;
    }

    const sourceList = data.lists[source.droppableId];
    const destinationList = data.lists[destination.droppableId];
    const draggingCard = sourceList.cards.filter(
      (card) => card.id === draggableId
    )[0];

    if (source.droppableId === destination.droppableId) {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);
      const newSate = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: destinationList,
        },
      };
      setData(newSate);
    } else {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);

      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: sourceList,
          [destinationList.id]: destinationList,
        },
      };
      setData(newState);
    }
  };
  
  
 


    return(
        <StoreApi.Provider value={{ addMoreCard, addMoreList, updateListTitle, removeTask }}>
                <DragDropContext onDragEnd={onDragEnd}>
                <div className="container">
                {data.listIds.map((listId) => {
                    const list = data.lists[listId]
                    return <ToDoInfo list = {list} key = {listId}/>
                })}
              
                </div>
                </DragDropContext>
              
        </StoreApi.Provider>
        
    )
}

export default Content