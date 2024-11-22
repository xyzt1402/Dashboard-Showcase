import { AxiosError } from "axios";
import { RangeTimeType } from "../../Types/ultil.type";
import fetcherAPI from "../fetcher";

export const getClusterStatus = async () => {
    try {
        const response = await fetcherAPI.get(
            "status/cluster/all",
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