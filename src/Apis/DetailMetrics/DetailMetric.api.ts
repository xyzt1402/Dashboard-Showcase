import { RangeTimeType } from "@hscproject/Types/ultil.type";
import fetcherAPI from "../fetcher";
import { AxiosError } from "axios";
import { CoreServiceKeys, IBSBackendServiceKey } from "@hscproject/Types/Service.type";

export const getMetricDetails = async (payload: RangeTimeType, metric: IBSBackendServiceKey | CoreServiceKeys) => {
    try {
        const response = await fetcherAPI.get(
            `metrics/detail/${metric}`,
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