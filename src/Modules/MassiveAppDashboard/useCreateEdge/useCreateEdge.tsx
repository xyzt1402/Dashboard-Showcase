import { useEdgesState } from "@xyflow/react";
import React, { useMemo } from "react";
import RightAngleEdge from "../../../Components/RightAngleEdge";
import StraightEdge from "../../../Components/StraightEdge";

const useCreateEdge = () => {
  const [edges, setEdges, onEdgesChange, ] = useEdgesState([]);
  const edgeTypes = { rightAngle: RightAngleEdge, straight: StraightEdge };
  useMemo(() => {}, []);
  return { edges, setEdges, onEdgesChange, edgeTypes };
};

export default useCreateEdge;
