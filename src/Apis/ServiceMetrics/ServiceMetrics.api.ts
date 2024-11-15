import { AxiosError } from "axios";
import { RangeTimeType, ResponseApiType } from "../../Types/ultil.type";
import fetcherAPI from "../fetcher";

export const getServiceIBS = async (payload: RangeTimeType) => {
  try {
    const response = await fetcherAPI.post(
      "metrics/service/ibs",
      payload
    );
    return response.data
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
}

export const getServiceONE = async (payload: RangeTimeType) => {
  try {
    const response = await fetcherAPI.post(
      "metrics/service/one",
      payload
    );
    return response.data
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
}