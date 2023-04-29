// const cards = [
//   {
//     id: 'card-1',
//     title: 'Learning how to cook',
//   },
//   {
//     id: 'card-2',
//     title: 'Making sandwich',
//   },
//   {
//     id: 'card-3',
//     title: 'Taking the trash out',
//   },
// ];


let todos = (localStorage.getItem("todo")) ? [JSON?.parse(localStorage.getItem("todo"))] : [];
let allCards = Object.values(todos[0].lists).map((item) => {
  return item
})



const data = {
  lists: {
    'list-1': {
      id: 'list-1',
      title: 'Todo',
      cards: allCards[0].cards,
    },
    'list-2': {
      id: 'list-2',
      title: 'Doing',
      cards: allCards[1].cards,
    },
    'list-3': {
      id: 'list-3',
      title: 'Done',
      cards: allCards[2].cards,
    },
  },
  listIds: ['list-1', 'list-2', 'list-3'],
};

// localStorage.setItem('todo', JSON.stringify(data))

export default data;
