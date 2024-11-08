import { BusinessClusterIBS, BusinessClusterOne } from "../../Types/Cluster.type";
import { RangeTimeType, ResponseApiType } from "../../Types/ultil.type";
import { useServiceQuery } from "../hook";
import { getBusinessIBS, getBusinessONE } from "./BusinessMetrics.api";

export const useBusinessOneQuery = (payload: RangeTimeType) => {
  return useServiceQuery<BusinessClusterOne>(
    "business-one",
    () => getBusinessONE(payload),
    payload
  );
};


export const useBusinessIBSQuery = (payload: RangeTimeType) => {
  return useServiceQuery<BusinessClusterIBS>(
    "business-ibs",
    () => getBusinessIBS(payload),
    payload
  );
};