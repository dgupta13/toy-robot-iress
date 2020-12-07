import React from "react";
import { BlockDiv } from "./Block.style";
import { BLOCK_DIMENSION } from "../../constants";

const Block = ({ color }) => {
  return (
    <BlockDiv>
      <svg width={BLOCK_DIMENSION.width} height={BLOCK_DIMENSION.height}>
        <rect
          x={0}
          y={0}
          width={BLOCK_DIMENSION.width}
          height={BLOCK_DIMENSION.height}
          fill={color}
        />
      </svg>
    </BlockDiv>
  );
};

export default Block;
