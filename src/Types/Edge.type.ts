import { Edge, EdgeProps, Position } from "@xyflow/react";

export interface EdgeTypeProps {
    sourceX: number,
    sourceY: number,
    targetX: number,
    targetY: number,
    sourcePosition: Position,
    targetPosition: Position,
    style?: React.CSSProperties
    label?: React.ReactNode
}

export interface ClusterEdgePropsType extends EdgeProps {
    data?: EdgeProps["data"] & EdgeTypeProps;
}

export interface ClusterEdgeType extends Edge {
    data?: Edge["data"] & EdgeTypeProps;
}