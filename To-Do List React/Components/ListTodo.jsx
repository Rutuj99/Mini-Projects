import React from "react";
import '../App.css';

function ListTodo({ item }) {
  return (
    <div id="tableBox">
      <table border="2px">
        <thead>
          <tr>
            <td>TASK</td>
            <td>PRIORITY</td>
            <td>DELETE</td>
          </tr>
        </thead>
        <tbody>
          {item.map((elem) => {
            console.log(elem);
            return (
              <tr>
                <td>{elem.task}</td>
                <td>{elem.pri}</td>
                <td>Delete</td>

              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ListTodo;
