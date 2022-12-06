/* This component will show the list of items that the person has entered.*/
import React from "react";
import ListItem from "../ListItem";

function ShowList({ list, tickItem, setList }) {
  //function for deleting
  function handleDeleteClick(index) {
    console.log(index);
    setList([...list.slice(0, index), ...list.slice(index + 1)]);
  }

  return (
    <ol>
      {list.map((listItem, index) => (
        <ListItem
          name={listItem.item}
          completed={listItem.completed}
          key={listItem.id}
          tickItem={() => tickItem(listItem.id)}
          deleteClick={handleDeleteClick}
          index={index}
        />
      ))}
    </ol>
  );
}

export default ShowList;
