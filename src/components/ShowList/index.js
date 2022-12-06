/* This component will show the list of items that the person has entered.*/
import React from "react";
import ListItem from "../ListItem";

function ShowList({ list, tickItem, setList }) {
  //function for deleting
  function handleDeleteClick(id) {
    console.log(id);
    id = id - 1;
    setList([...list.slice(0, id), ...list.slice(id + 1)]);
  }

  return (
    <ol>
      {list.map((listItem) => (
        <ListItem
          name={listItem.item}
          completed={listItem.completed}
          key={listItem.id}
          tickItem={() => tickItem(listItem.id)}
          deleteClick={() => {
            handleDeleteClick(listItem.id);
          }}
        />
      ))}
    </ol>
  );
}

export default ShowList;
