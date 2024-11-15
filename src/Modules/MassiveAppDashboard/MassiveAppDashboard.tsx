import { ReactFlow } from "@xyflow/react";
import useCreateNode from "./useCreateNode";
import useCreateEdge from "./useCreateEdge";

const MassiveAppDashboard = () => {



  const { nodeTypes, nodes, onNodesChange, setNodes } = useCreateNode();
  const { edges, onEdgesChange, setEdges } = useCreateEdge();
  return (
    <div style={{ width: '100%', height: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        // edgeTypes={edgeTypes}
        // style={{ backgroundColor: "#0E0526" }}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        proOptions={{ hideAttribution: true }}
        draggable={false}
        nodesDraggable={false}
        panOnDrag={false}
      />
    </div>
  );
};

export default MassiveAppDashboard;
