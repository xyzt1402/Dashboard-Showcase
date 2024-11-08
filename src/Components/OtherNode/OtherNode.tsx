import { Handle, Position } from "@xyflow/react";
import { OtherNodePropType } from "../../Types/Node.type";
import customStyle from "./OtherNode.module.scss";
const OtherNode: React.FC<OtherNodePropType> = ({ data }) => {
  return (
    <div className={customStyle.Container}>
      {data.viewOtherThings}
      <Handle type="target" position={Position.Right} hidden />
      <Handle type="source" position={Position.Right} hidden />
    </div>
  );
};

export default OtherNode;
