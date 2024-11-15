import React, { ChangeEvent, useMemo } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../Redux/Slices/Slice.hook";
import { setTimeRange } from "../../../Redux/Slices/TimeRange.slice";

import { Node, NodeTypes, Position, useNodesState } from "@xyflow/react";
import BusinessNode from "../../../Components/BusinessNode";
import ChartNode from "../../../Components/ChartNode";
import ServiceNode from "../../../Components/ServiceNode";
import OtherNode from "../../../Components/OtherNode";
import { CustomNodeType } from "../../../Types/Node.type";
import { RootState } from "../../../Redux/Store";
import {
  useBusinessIBSQuery,
  useBusinessOneQuery,
} from "../../../Apis/BusinessMetrics/BusinessMetrics.hook";
import BackgroundNode from "../../../Components/BackgroundNode";
import RootIMG from "../../../assets/IMG/RootIMG";
import ClusterNode from "../../../Components/ClusterNode";
import Firewall from "../../../assets/IMG/Firewall";
import OneFE from "../../../assets/IMG/OneFE";
import DataStreaming from "../../../assets/IMG/DataStreaming";
import IBSBackend from "../../../assets/IMG/IBSBackend";
import OneCore from "../../../assets/IMG/OneCore";
import HSCDataFeed from "../../../assets/IMG/HSCDataFeed";
import CoreAPIGateway from "../../../assets/IMG/CoreAPIGateway";
import CoreService from "../../../assets/IMG/CoreService";
import ContainerNode from "../../../Components/ContainerNode";

const useCreateNode = () => {
  const dispatch = useAppDispatch();
  const [nodes, setNodes, onNodesChange] = useNodesState<CustomNodeType>([]);
  const nodeTypes = {
    businessNode: BusinessNode,
    chartNode: ChartNode,
    serviceNode: ServiceNode,
    otherNode: OtherNode,
    backgroundNode: BackgroundNode,
    clusterNode: ClusterNode,
    containerNode: ContainerNode
  };

  // const { formTime } = useAppSelector((state: RootState) => state.timeRange);
  // const { data: BusinessOneData, isLoading: BusinessOneLoading } =
  //   useBusinessOneQuery(formTime);
  // const { data: BusinessIBSData, isLoading: BusinessIBSLoading } =
  //   useBusinessIBSQuery(formTime);
  // console.log("BusinessIBSData", BusinessIBSData);
  // const handleChangeRangeTime = (e: ChangeEvent<HTMLSelectElement>): void => {
  //   const rangeTime = {
  //     from: parseFloat(
  //       ((Date.now() - Number(e.target.value)) / 1000).toFixed()
  //     ),
  //     to: parseFloat((Date.now() / 1000).toFixed()),
  //   };

  //   dispatch(
  //     setTimeRange({ formTime: rangeTime, rangeTime: Number(e.target.value) })
  //   );
  // };

  useMemo(() => {
    const initialNode: CustomNodeType[] = [
      {
        id: "oneMobile",
        type: "otherNode",
        data: {
          viewOtherThings: (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 9,
                color: "#ffffff",
              }}
            >
              <p
                style={{
                  padding: "3px 15px",
                  backgroundColor: "#FFFFFF1A",
                  border: "1px solid #FFFFFF99",
                  borderRadius: 21,
                }}
              >
                ONE Mobile
              </p>
              <p style={{ fontSize: 14 }}>Login:300ms</p>
            </div>
          ),
        },
        position: { x: 10, y: 110 },
      },
      {
        id: "root",
        type: "otherNode",
        data: {
          viewOtherThings: <RootIMG />,
        },
        position: { x: 35, y: 190 },
      },
      {
        id: "oneWeb",
        type: "otherNode",
        data: {
          viewOtherThings: (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 9,
                color: "#ffffff",
              }}
            >
              <p
                style={{
                  padding: "3px 15px",
                  backgroundColor: "#FFFFFF1A",
                  border: "1px solid #FFFFFF99",
                  borderRadius: 21,
                }}
              >
                ONE Web
              </p>
              <p style={{ fontSize: 14 }}>Login:300ms</p>
            </div>
          ),
        },
        position: { x: 18, y: 290 },
      },
      {
        id: "firewall",
        type: "clusterNode",
        data: {
          logo: <Firewall />,
          status: true,
          title: 'Firewall',
          handles: [{
            handleId: 'firewall-target-1',
            position: Position.Left,
            type: 'target'
          }, {
            handleId: 'firewall-1',
            position: Position.Right,
            type: 'source'
          }]
        },
        position: { x: 185, y: 197 },
      },
      {
        id: "onefe",
        type: "clusterNode",
        data: {
          logo: <OneFE />,
          status: true,
          title: 'One FE',
          handles: [{
            handleId: 'onefe-target',
            type: 'target',
            position: Position.Left
          },
          {
            handleId: 'onefe-source',
            type: 'source',
            position: Position.Right
          }
          ]
        },
        position: { x: 505, y: 120 },
      },
      {
        id: "data-streaming",
        type: "clusterNode",
        data: {
          logo: <DataStreaming />,
          status: false,
          title: 'Data Streaming',
          handles: [{
            handleId: 'data-streaming-target-0',
            type: 'target',
            position: Position.Left
          }, {
            handleId: 'data-streaming-target-1',
            type: 'target',
            position: Position.Top
          },
          {
            handleId: 'data-streaming-target-2',
            type: 'target',
            position: Position.Bottom
          },
          ]
        },
        position: { x: 470, y: 300 },
      },
      {
        id: "ibs-backend",
        type: "clusterNode",
        data: {
          logo: <IBSBackend />,
          status: true,
          title: 'IBS Backend Service',
          handles: [{
            handleId: 'ibsbackend-source',
            type: 'source',
            position: Position.Right,

          },
          ]
        },
        position: { x: 850, y: 70 },
      },
      {
        id: "one-core-backend",
        type: "clusterNode",
        data: {
          logo: <OneCore />,
          status: true,
          title: 'One Core Backend',
          handles: [{
            handleId: 'one-core-target',
            type: 'target',
            position: Position.Top,
            style: {
              top: '0%',
              left: '10%'
            }
          },
          {
            handleId: 'one-core-source-1',
            type: 'source',
            position: Position.Left,
          }, {
            handleId: 'one-core-source-2',
            type: 'source',
            position: Position.Right,
          }]
        },
        position: { x: 857, y: 230 },
      },
      {
        id: "hsc-datafeed",
        type: "clusterNode",
        data: {
          logo: <HSCDataFeed />,
          status: true,
          title: 'HSC Datafeed',
          handles: [{
            handleId: 'hsc-datafeed-source',
            type: 'source',
            position: Position.Left,
          }]
        },
        position: { x: 883, y: 390 },
      },
      {
        id: "core-api-gateway",
        type: "clusterNode",
        data: {
          logo: <CoreAPIGateway />,
          status: true,
          title: 'Core API Gateway',
          handles: [
            {
              handleId: 'core-api-gateway-target-1',
              type: 'target',
              position: Position.Left,
              style: {
                top: '30%',
                left: 0
              }
            },
            {
              handleId: 'core-api-gateway-target-2',
              type: 'target',
              position: Position.Left,
              style: {
                top: '70%',
                left: 0
              }
            },
            {
              handleId: 'core-api-gateway-source-1',
              type: 'source',
              position: Position.Right,
            },
          ]
        },
        position: { x: 1265, y: 100 },
      },
      {
        id: "core-trading-service",
        type: "clusterNode",
        data: {
          logo: <CoreService />,
          status: true,
          title: 'Core Trading Gateway',
          handles: [
            {
              handleId: 'core-trading-service-target-1',
              type: 'target',
              position: Position.Right,
            }
          ]
        },
        position: { x: 1235, y: 300 },
      },
      {
        id: "one-dmz-cluster",
        type: 'containerNode',
        data: {
          title: 'ONE DMZ Cluster',
          width: '20rem',
          height: 400
        },
        position: { x: 425, y: 40 }
      },
      {
        id: "ibs-cluster",
        type: 'containerNode',
        data: {
          title: 'IBS Cluster',
          width: '22rem',
          height: '9rem'
        },
        position: { x: 810, y: 20 }
      },
      {
        id: "one-core-cluster",
        type: 'containerNode',
        data: {
          title: 'One Core Cluster',
          width: '22rem',
          height: '9rem'
        },
        position: { x: 810, y: 180 }
      },
      {
        id: "hsc-data-feed-container",
        type: 'containerNode',
        data: {
          title: 'HSC Datafeed',
          width: '22rem',
          height: '8rem'
        },
        position: { x: 810, y: 340 }
      },
      {
        id: "tsp-cluster",
        type: 'containerNode',
        data: {
          title: 'TSP Cluster',
          width: '22rem',
          height: '10rem'
        },
        position: { x: 1210, y: 50 }
      },
      {
        id: "core-service-container",
        type: 'containerNode',
        data: {
          title: 'Core Service',
          width: '22rem',
          height: '10rem'
        },
        position: { x: 1210, y: 250 }
      }

    ];

    setNodes(initialNode);
  }, []);
  return { nodes, setNodes, onNodesChange, nodeTypes };
};

export default useCreateNode;
