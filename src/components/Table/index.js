import React from "react";
import Block from "../Block";
import { StyledDiv } from "./Table.style";

const Table = ({ rows, columns }) => {
  const rowArray = Array.from(Array(rows).keys(), (i) => i);
  const colArray = Array.from(Array(columns).keys(), (i) => i);

  return (
    <div>
      {rowArray.map((rowIndex) => (
        <StyledDiv key={"row_" + rowIndex}>
          {colArray.map((colIndex) => (
            <Block
              key={"col_" + colIndex}
              color={(rowIndex + colIndex) % 2 === 0 ? "grey" : "blue"}
            />
          ))}
        </StyledDiv>
      ))}
    </div>
  );
};

export default Table;
