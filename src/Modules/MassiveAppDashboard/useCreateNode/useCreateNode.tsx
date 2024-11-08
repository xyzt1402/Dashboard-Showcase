import React, { ChangeEvent, useMemo } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../Redux/Slices/Slice.hook";
import { setTimeRange } from "../../../Redux/Slices/TimeRange.slice";

import { Node, NodeTypes, useNodesState } from "@xyflow/react";
import BusinessNode from "../../../Components/BusinessNode";
import ChartNode from "../../../Components/ChartNode";
import ServiceNode from "../../../Components/ServiceNode";
import OtherNode from "../../../Components/OtherNode";
import { CustomNodeType } from "../../../Types/Node.type";
import LogoHSC from "../../../assets/IMG/LogoHSC";
import PlayBtn from "../../../Components/PlayBtn";
import Select from "../../../Components/Select";
import RealTimeClock from "../../../Components/RealTimeClock";
import { RootState } from "../../../Redux/Store";
import {
  useBusinessIBSQuery,
  useBusinessOneQuery,
} from "../../../Apis/BusinessMetrics/BusinessMetrics.hook";
import WebLogin from "../../../assets/IMG/WebLogin";
import MobileLogin from "../../../assets/IMG/MobileLogin";
import Order from "../../../assets/IMG/Order";
import FutureOrder from "../../../assets/IMG/FutureOrder";
import Deposit from "../../../assets/IMG/Deposit";
import Withdraw from "../../../assets/IMG/Withdraw";
import BackgroundNode from "../../../Components/BackgroundNode";
import RootIMG from "../../../assets/IMG/RootIMG";

const useCreateNode = () => {
  const dispatch = useAppDispatch();
  const [nodes, setNodes, onNodesChange] = useNodesState<CustomNodeType>([]);
  const nodeTypes = {
    businessNode: BusinessNode,
    chartNode: ChartNode,
    serviceNode: ServiceNode,
    otherNode: OtherNode,
    backgroundNode: BackgroundNode,
  };

  const { formTime } = useAppSelector((state: RootState) => state.timeRange);
  const { data: BusinessOneData, isLoading: BusinessOneLoading } =
    useBusinessOneQuery(formTime);
  const { data: BusinessIBSData, isLoading: BusinessIBSLoading } =
    useBusinessIBSQuery(formTime);
  console.log("BusinessIBSData", BusinessIBSData);
  const handleChangeRangeTime = (e: ChangeEvent<HTMLSelectElement>): void => {
    const rangeTime = {
      from: parseFloat(
        ((Date.now() - Number(e.target.value)) / 1000).toFixed()
      ),
      to: parseFloat((Date.now() / 1000).toFixed()),
    };

    dispatch(
      setTimeRange({ formTime: rangeTime, rangeTime: Number(e.target.value) })
    );
  };

  useMemo(() => {
    const initialNode: CustomNodeType[] = [
      {
        id: "logo",
        type: "otherNode",
        position: { x: 0, y: 0 },
        data: {
          viewOtherThings: (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 9,
                borderRadius: 9,
                backgroundColor: " #FFFFFF1A",
              }}
            >
              <LogoHSC />
              <div
                style={{
                  color: "#ffffff",

                  height: "100%",
                  padding: 9,
                }}
              >
                Application Monitoring Dashboard
              </div>
            </div>
          ),
        },
        style: { width: 390, height: 40 },
      },
      {
        id: "playBTN",
        type: "otherNode",
        data: {
          viewOtherThings: <PlayBtn style={{ height: 40 }} />,
        },
        position: { x: 1458, y: 0 },
        style: { width: 48 },
      },
      {
        id: "timeRange",
        type: "otherNode",
        data: {
          viewOtherThings: (
            <Select
              options={[
                { label: "Last 5m", value: 60000 },
                { label: "Last 15m", value: 900000 },
                { label: "Last 30m", value: 1800000 },
                { label: "Last 1h", value: 3600000 },
                { label: "Last 3h", value: 10800000 },
                { label: "Last 6h", value: 21600000 },
                { label: "Last 12h", value: 43200000 },
                { label: "Last 1d", value: 86400000 },
              ]}
              onChange={handleChangeRangeTime}
              style={{
                fontSize: 16,
                fontWeight: 400,
                padding: "9px 21px",
                height: 40,
              }}
            />
          ),
        },
        position: { x: 1518, y: 0 },
        style: { width: 150, height: 40 },
      },
      {
        id: "realTimeClock",
        type: "otherNode",
        data: {
          viewOtherThings: <RealTimeClock />,
        },
        position: { x: 1701, y: 0 },
        style: { width: 210, height: 40 },
      },
      {
        id: "webLogin",
        type: "businessNode",
        data: {
          dataBusiness: BusinessIBSData?.["Web-Login"],
          title: "Web Login",
          logo: <WebLogin />,
        },
        position: { x: 0, y: 66 },
        style: { width: 210, height: 108 },
      },
      {
        id: "mobileLogin",
        type: "businessNode",
        data: {
          dataBusiness: BusinessIBSData?.["Mobile-Login"],
          title: "Mobile Login",
          logo: <MobileLogin />,
        },
        position: { x: 243, y: 66 },
        style: { width: 210, height: 108 },
      },
      {
        id: "order",
        type: "businessNode",
        data: {
          dataBusiness: BusinessOneData?.Orders,
          title: "Order",
          logo: <Order />,
        },
        position: { x: 486, y: 66 },
        style: { width: 210, height: 108 },
      },
      {
        id: "futureOrder",
        type: "businessNode",
        data: {
          dataBusiness: BusinessOneData?.["Future-Orders"],
          title: "Future Order",
          logo: <FutureOrder />,
        },
        position: { x: 729, y: 66 },
        style: { width: 210, height: 108 },
      },
      {
        id: "deposit",
        type: "businessNode",
        data: {
          dataBusiness: BusinessIBSData?.Deposit,
          title: "Deposit",
          logo: <Deposit />,
        },
        position: { x: 972, y: 66 },
        style: { width: 210, height: 108 },
      },
      {
        id: "withdraw",
        type: "businessNode",
        data: {
          dataBusiness: BusinessIBSData?.Withdraw,
          title: "Withdraw",
          logo: <Withdraw />,
        },
        position: { x: 1215, y: 66 },
        style: { width: 210, height: 108 },
      },
      {
        id: "loginsPerDay",
        type: "chartNode",
        data: {
          title: "Login Per Day",
          dataChart: BusinessIBSData?.["Logins-per-Day"],
        },
        position: { x: 1458, y: 66 },
        style: { width: 210, height: 108 },
      },
      {
        id: "OrdersPerDay",
        type: "chartNode",
        data: {
          title: "Login Per Day",
          dataChart: BusinessIBSData?.["Orders-per-Day"],
        },
        position: { x: 1701, y: 66 },
        style: { width: 210, height: 108 },
      },
      {
        id: "backgroundNode",
        position: { x: 0, y: 207 },
        type: "backgroundNode",
        data: {},
        style: {
          width: 1530,
          height: 555,
          backgroundColor: "#ffffff1a",
          zIndex: -6,
        },
      },
      {
        id: "oneMobile",
        parentId: "backgroundNode",
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
        position: { x: 24, y: 120 },
      },
      {
        id: "root",
        parentId: "backgroundNode",
        type: "otherNode",
        data: {
          viewOtherThings: <RootIMG />,
        },
        position: { x: 51, y: 210 },
      },
      {
        id: "oneWeb",
        parentId: "backgroundNode",
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
        position: { x: 30, y: 330 },
      },
    ];

    setNodes(initialNode);
  }, [BusinessIBSData, BusinessOneData]);
  return { nodes, setNodes, onNodesChange, nodeTypes };
};

export default useCreateNode;
