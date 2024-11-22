import { BanksCheck, ConnectionCheck, StatusService, TradingCheck } from "../../Types/Status.type";
import { RangeTimeType } from "../../Types/ultil.type";
import { useServiceQuery } from "../hook";
import { getStatusBusinessBanking, getStatusBusinessConnection, getStatusBusinessTrading } from "./BusinessStatus.api";

export const useBusinessStatusTrading = (payload: RangeTimeType) => {

    return useServiceQuery<StatusService<TradingCheck>>(
        "business-status-trading",
        () => getStatusBusinessTrading(),
        payload
    );
};

export const useBusinessStatusBanking = (payload: RangeTimeType) => {
    return useServiceQuery<StatusService<BanksCheck>>(
        "business-status-banking",
        () => getStatusBusinessBanking(),
        payload
    );
};

export const useBusinessStatusConnection = (payload: RangeTimeType) => {
    return useServiceQuery<StatusService<ConnectionCheck>>(
        "business-status-connection",
        () => getStatusBusinessConnection(),
        payload
    );
};
