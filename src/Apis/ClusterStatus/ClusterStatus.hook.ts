import { ClusterStatusCheck, StatusService } from "../../Types/Status.type";
import { RangeTimeType } from "../../Types/ultil.type";
import { useServiceQuery } from "../hook";
import { getClusterStatus } from "./ClusterStatus.api";

export const useClusterStatus = (payload: RangeTimeType) => {

    return useServiceQuery<StatusService<ClusterStatusCheck>>(
        "cluster-status",
        () => getClusterStatus(),
        payload
    );
};