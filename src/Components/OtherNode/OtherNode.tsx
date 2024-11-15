import { Handle, Position } from "@xyflow/react";
import { OtherNodePropType } from "../../Types/Node.type";
import customStyle from "./OtherNode.module.scss";
const OtherNode: React.FC<OtherNodePropType> = ({ data }) => {
  return (
    <>
      <div className={customStyle.Container}>
        {data.viewOtherThings}
        <Handle style={{ opacity: 0 }} type="source" position={Position.Right} />
      </div>

    </>

  );
};

export default OtherNode;
