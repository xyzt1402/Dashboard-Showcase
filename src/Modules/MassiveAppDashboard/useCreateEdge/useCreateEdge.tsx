import { Edge, MarkerType, Position, useEdgesState } from "@xyflow/react";
import React, { useMemo } from "react";
import RightAngleEdge from "../../../Components/RightAngleEdge";
import StraightEdge from "../../../Components/StraightEdge";
import { ClusterEdgeType } from "../../../Types/Edge.type";

const useCreateEdge = () => {
  // const edgeTypes = { rightAngle: RightAngleEdge, straight: StraightEdge };
  const initialEdge: Edge[] = [{
    id: 'edge0',
    type: 'straight',
    source: 'root',
    target: 'firewall',
    markerEnd: { type: MarkerType.Arrow }
  }, {
    id: 'edge1',
    type: 'straight',
    source: 'firewall',
    target: 'onefe',
    markerEnd: { type: MarkerType.Arrow }
  },
  {
    id: 'edge2',
    type: 'straight',
    source: 'firewall',
    target: 'data-streaming',
    markerEnd: { type: MarkerType.Arrow }
  },
  {
    id: 'edge3',
    type: 'smoothstep',
    source: 'onefe',
    target: 'one-core-backend',
    markerEnd: { type: MarkerType.Arrow },
  },
  {
    id: 'edge4',
    type: 'smoothstep',
    source: 'one-core-backend',
    target: 'data-streaming',
    targetHandle: 'data-streaming-target-1',
    markerEnd: { type: MarkerType.Arrow },
  },
  {
    id: 'edge5',
    type: 'smoothstep',
    source: 'hsc-datafeed',
    target: 'data-streaming',
    targetHandle: 'data-streaming-target-2',
    markerEnd: { type: MarkerType.Arrow },
  },
  {
    id: 'edge6',
    type: 'smoothstep',
    // style: {
    //   strokeDasharray: 3
    // },
    source: 'ibs-backend',
    target: 'core-api-gateway',
    markerEnd: { type: MarkerType.Arrow },
  },
  {
    id: 'edge7',
    type: 'smoothstep',
    source: 'one-core-backend',
    target: 'core-api-gateway',
    sourceHandle: 'one-core-source-2',
    targetHandle: 'core-api-gateway-target-2',
    markerEnd: { type: MarkerType.Arrow },
  },
  {
    id: 'edge8',
    type: 'smoothstep',
    source: 'core-api-gateway',
    target: 'core-trading-service',
    markerEnd: { type: MarkerType.Arrow },
  }
  ]
  const [edges, setEdges, onEdgesChange,] = useEdgesState<Edge>(initialEdge);

  return { edges, setEdges, onEdgesChange };
};

export default useCreateEdge;
