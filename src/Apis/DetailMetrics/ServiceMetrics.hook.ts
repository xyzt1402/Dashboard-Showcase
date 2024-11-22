import { RangeTimeType } from "@hscproject/Types/ultil.type";
import { useServiceQuery } from "../hook";
import { getMetricDetails } from "./DetailMetric.api";
import { CoreServiceKeys, IBSBackendServiceKey } from "@hscproject/Types/Service.type";
import { DetailMetricType } from "@hscproject/Types/DetailMetrics.type";

export const useDetailMetricsQuery = (payload: RangeTimeType, metrics: IBSBackendServiceKey | CoreServiceKeys) => {
    // const result = getServiceIBS(payload)
    // console.log('result', result)
    return useServiceQuery<DetailMetricType>(
        `metrics-detail-${metrics}`,
        () => getMetricDetails(payload, metrics),
        payload
    );
};