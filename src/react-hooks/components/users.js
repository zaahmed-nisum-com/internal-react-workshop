import React from "react";

function Users(props) {
  console.log("Users");

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>NAME</td>
            <td>IS-ACTIVE</td>
          </tr>
        </thead>

        <tbody>
          {props.users.map((itm, indx) => {
            return (
              <tr>
                <td>{itm.id}</td>
                <td>{itm.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default React.memo(Users);
