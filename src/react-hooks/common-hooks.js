import React, { useCallback, useEffect, useState } from "react";

function CommonHooks(props) {
  const [toDoList, setToDoList] = useState([]);
  const [value, setValue] = useState("");
  const [actionsPerforms, setActionPerforms] = useState(0);

  const handleAdd = useCallback(() => {
    try {
      let tempList = toDoList;
      toDoList.push({ id: toDoList.length + 1, value });
      setToDoList([...tempList]);
      setValue("");
    } catch (error) {
      console.log(error);
    }
  });

  const handleDelete = useCallback((id) => {
    try {
      let tempList = toDoList;
      const filterIndex = toDoList.filter((itm) => itm.id == id);
      tempList.splice(filterIndex, 1);
      setToDoList([...tempList]);
      setValue("");
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    if (toDoList.length > 0) {
      setActionPerforms(actionsPerforms + 1);
    }
  }, [toDoList]);

  return (
    <div>
      <p>Total actions counts {actionsPerforms}</p>
      <div style={{ display: "flex" }}>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={() => handleAdd()}>Add</button>
      </div>
      <div>
        {toDoList.map((itm, indx) => {
          return (
            <div style={{ display: "flex" }}>
              <p>{itm.value}</p>
              <p onClick={() => handleDelete(itm.id)}>Delete</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CommonHooks;
