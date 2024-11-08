import { Node, NodeProps } from "@xyflow/react";
import { ReactNode } from "react";
import { BusinessMetricType } from "./Metric.type";

//Cluster Node
export interface ClusterNodeCustomProps {
  mainIcon?: ReactNode;
  subIcon?: ReactNode;
  title?: string;
}

export interface ClusterNodePropsType extends NodeProps {
  data: NodeProps["data"] & ClusterNodeCustomProps;
}

export interface ClusterNodeType extends Node {
  data: Node["data"] & ClusterNodeCustomProps;
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
  data: NodeProps["data"] & OtherNodeCustomProps ;
}

export interface OtherNodeType extends Node {
  data: Node["data"] & OtherNodeCustomProps;
}

//CustomNodeType
export type CustomNodeType = ClusterNodeType | BusinessNodeType | OtherNodeType;