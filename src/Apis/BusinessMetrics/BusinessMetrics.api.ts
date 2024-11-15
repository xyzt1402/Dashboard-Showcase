import { AxiosError } from "axios";
import { RangeTimeType, ResponseApiType } from "../../Types/ultil.type";
import fetcherAPI from "../fetcher";
import {
  BusinessClusterIBS,
  BusinessClusterOne,
  ClusterStatus,
} from "../../Types/Cluster.type";
import { ClusterStatusType } from "../../Types/Metric.type";

export const getBusinessONE = async (payload: RangeTimeType) => {
  try {
    const response: ResponseApiType<BusinessClusterOne> = await fetcherAPI.post(
      "metrics/business/one",
      payload
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const response = error.response;
      throw new Error(
        response?.data?.message || "An unexpected error occurred."
      );
    } else {
      throw new Error("An unexpected error occurred.");
    }
  }
};

export const getBusinessIBS = async (payload: RangeTimeType) => {
  try {
    const response: ResponseApiType<BusinessClusterIBS> = await fetcherAPI.post(
      "metrics/business/ibs",
      payload
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const response = error.response;
      throw new Error(
        response?.data?.message || "An unexpected error occurred."
      );
    } else {
      throw new Error("An unexpected error occurred.");
    }
  }
};


// export const getClusterStatus = async (payload: RangeTimeType) => {
//   try {
//     const response: ResponseApiType<ClusterStatus> = await fetcherAPI
//   }
// }