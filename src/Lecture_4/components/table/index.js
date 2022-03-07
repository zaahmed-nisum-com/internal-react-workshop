import React, { memo } from "react";
import TableRow from "../tableRow";

const Table = (props) => {
  console.log(props.data);
  return (
    <div>
      <table>
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Designation</td>
        </tr>
        {props.data.map((item, index) => {
          return <TableRow item={item} />;
        })}
      </table>
    </div>
  );
};

export default memo(Table);
