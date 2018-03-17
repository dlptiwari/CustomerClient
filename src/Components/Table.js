
import React from "react";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
import TrashIcon from "material-ui/svg-icons/action/delete";

const row = (x, i, header, handleRemove) =>{

return (
  <TableRow key={`tr-${i}`} selectable={false}>
    {header.map((y, k) =>
      <TableRowColumn key={`trc-${k}`}>
        {x[y.prop]}
      </TableRowColumn>
    )}
    <TableRowColumn>
        <TrashIcon onClick={() => handleRemove(i)}/>
    </TableRowColumn>
  </TableRow>
)
}

export default ({ data, header, handleRemove }) =>
  <Table>
    <TableHeader>
      <TableRow>
        {header.map((x, i) =>
          <TableHeaderColumn key={`thc-${i}`}>
            {x.name}
          </TableHeaderColumn>
        )}
        <TableHeaderColumn/>
      </TableRow>
    </TableHeader>
    <TableBody>
      {data.map((x, i) => row(x, i, header, handleRemove))}
    </TableBody>
</Table>;