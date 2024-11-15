import { CoreServiceKeys, IBSBackendServiceKey, ServiceMetrics } from "../../Types/Service.type";
import { RangeTimeType } from "../../Types/ultil.type";
import { useServiceQuery } from "../hook";
import { getServiceIBS, getServiceONE } from "./ServiceMetrics.api";

export const useServiceOneQuery = (payload: RangeTimeType) => {
    // const result = getServiceIBS(payload)
    // console.log('result', result)
    return useServiceQuery<ServiceMetrics<CoreServiceKeys>>(
        "service-one",
        () => getServiceONE(payload),
        payload
    );
};


export const useServiceIBSQuery = (payload: RangeTimeType) => {
    // const result = getServiceONE(payload);
    // console.log('result', result)
    return useServiceQuery<ServiceMetrics<IBSBackendServiceKey>>(
        "service-ibs-backend",
        () => getServiceIBS(payload),
        payload
    );
};