import React from "react";

function TableRow(props) {
  return (
    <tr>
      <td>{props.item["id"]}</td>
      <td>{props.item["name"]}</td>
      <td>{props.item["designation"]}</td>
    </tr>
  );
}

export default TableRow;
