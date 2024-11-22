import { HandleType, Node, NodeProps, Position } from "@xyflow/react";
import { CSSProperties, ReactNode } from "react";
import { BusinessMetricType } from "./Metric.type";

export type HandleTypeNode = {
  handleId: string
  type: HandleType
  position: Position
  style?: {
    top?: string | number
    left?: string | number
    right?: string | number
    bottom?: string | number
  }
}
//Cluster Node
export interface ClusterNodeCustomProps {
  logo?: ReactNode;
  title?: string;
  status?: null | boolean;
  handles?: HandleTypeNode[],
}

export interface ClusterNodePropsType extends NodeProps {
  data: NodeProps["data"] & ClusterNodeCustomProps;
}

export interface ClusterNodeType extends Node {
  data: Node["data"] & ClusterNodeCustomProps;
}

export interface ContainerNodeProps {
  width: string | number
  height: string | number
  title: string
}

export interface ContainerNodePropsType extends NodeProps {
  data: NodeProps["data"] & ContainerNodeProps
}

//Business Node
export interface BusinessNodeCustomProps {
  logo?: ReactNode;
  dataBusiness: BusinessMetricType;
  title?: string;
  dataLoading?: boolean;
}

export interface BusinessNodePropsType extends NodeProps {
  data: NodeProps["data"] & BusinessNodeCustomProps;
}

export interface BusinessNodeType extends Node {
  data: Node["data"] & BusinessNodeCustomProps;
}

//Other Node
export interface OtherNodeCustomProps {
  viewOtherThings: ReactNode;
}

export interface OtherNodePropType extends NodeProps {
  data: NodeProps["data"] & OtherNodeCustomProps;
}

export interface OtherNodeType extends Node {
  data: Node["data"] & OtherNodeCustomProps;
}

//CustomNodeType
export type CustomNodeType = ClusterNodeType | BusinessNodeType | OtherNodeType;