import { EdgeProps, getSmoothStepPath, Position } from "@xyflow/react";
import React, { useMemo } from "react";

const markerDefinitions = (
  <defs>
    <marker
      id="defaultArrow"
      markerWidth="4"
      markerHeight="3"
      refX="4"
      refY="1.5"
      orient="auto"
      markerUnits="strokeWidth"
    >
      <path d="M0,0 L0,3 L4,1.5 z" fill="#06f967" />
    </marker>
  </defs>
);

const RightAngleEdge: React.FC<EdgeProps> = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style,
  label,
  markerEnd,
}) => {
  const [edgePath, labelX, labelY] = useMemo(() => {
    if (
      sourceX > targetX &&
      sourceY > targetY &&
      targetPosition === Position.Left
    ) {
      targetPosition = Position.Right;
    }

    const [path, labelX, labelY] = getSmoothStepPath({
      sourceX,
      sourceY,
      targetX,
      targetY,
      sourcePosition,
      targetPosition,
      borderRadius: 15,
    });

    return [path, labelX, labelY];
  }, [sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition]);

  const foreignObjectStyle = {
    overflow: "visible",
    zIndex: 30,
    width: "100%",
  };

  return (
    <>
      {markerDefinitions}
      <path
        id={id}
        style={style}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd} // Default marker
      />
      <foreignObject x={labelX + 12} y={labelY - 50} style={foreignObjectStyle}>
        {label && <div>{label}</div>}
      </foreignObject>
    </>
  );
};

export default RightAngleEdge;
