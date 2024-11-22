import { AxiosError } from "axios";
import { RangeTimeType } from "../../Types/ultil.type";
import fetcherAPI from "../fetcher";

export const getStatusBusinessTrading = async () => {
    try {
        const response = await fetcherAPI.get(
            "status/business/trading",
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
export const getStatusBusinessBanking = async () => {
    try {
        const response = await fetcherAPI.get(
            "status/business/banking",
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
export const getStatusBusinessConnection = async () => {
    try {
        const response = await fetcherAPI.get(
            "status/business/connection",
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