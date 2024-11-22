export type StatusService<K extends CheckingStatus> = Record<K, "FAILED" | "OK">;
export type BanksCheck = "ACB" | "BIDV" | "MSB" | "VCB" | "VIB";
export type TradingCheck =
    | "Autoport"
    | "Logins"
    | "Market-Data"
    | "OTP"
    | "Order-Equity"
    | "Order-Futures";
export type ConnectionCheck = | "Bloomberg"
    | "DMA-HOSE"
    | "DMA-HSX"
    | "VSD-Connection";
export type ClusterStatusCheck = | "Core-API-Gateway"
    | "Core-Trading-Services"
    | "Data-streaming"
    | "Firewall"
    | "HSC-Datafeed"
    | "IBS-Backend-Service"
    | "ONE-FE"
    | "One-Core-Backend";

export type CheckingStatus = TradingCheck | BanksCheck | ConnectionCheck | ClusterStatusCheck;
export type CheckingStatusKeys =
    | "Trading Check"
    | "Banking Check"
    | "Connection Check"
    | "ClusterStatusCheck";

