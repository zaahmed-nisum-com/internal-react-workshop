import React, { useEffect, useState } from "react";
import Table from "./components/table";
import TotalCounter from "./components/totalCounter";

function Lecture_4(props) {
  const [todos, setToDos] = useState([]);
  useEffect(() => {
    fetchTodos();
  }, []);
  // const [recorde, setRecorde] = useState([
  //   { id: 1, name: "Zain Ahmed", designation: "software engineer" },
  //   { id: 2, name: "Muhammad Anas", designation: "software engineer" },
  // ]);

  // const [totalRecordes, setTotalrecordes] = useState(recorde.length);
  // const handleInsetRecorde = () => {
  //   const newRecorde = [
  //     ...recorde,
  //     {
  //       id: 3,
  //       name: "Subhan Nazir",
  //       designation: "Senior Software Engineer",
  //     },
  //   ];
  //   setRecorde(newRecorde);
  //   setTotalrecordes(newRecorde.length);
  // };
  // const handleUpdaterecorde = () => {
  //   const updatedRecordes = recorde.map((item) => {
  //     if (item.id === 1) return { ...item, name: "Rabeet" };
  //     return item;
  //   });
  //   setRecorde(updatedRecordes);
  //   setTotalrecordes(updatedRecordes.length);
  // };

  async function fetchTodos(params) {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const res = await response.json();
    // console.log(res);
    setToDos(res);
  }

  return (
    <div>
      {todos.map((item, index) => {
        return <p>{item.title}</p>;
      })}
    </div>
  );
}

export default Lecture_4;
