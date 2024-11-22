interface Unit {
    family: string;
    name: string;
    plural: string;
    short_name: string;
}

interface Metric {
    value: number[][];
    units: Unit[] | null;
}

interface ServiceStatus {
    Avail: string;
    Errors: Metric;
    "Req/s": Metric;
}

export type ServiceMetrics<T extends string> = Record<T, ServiceStatus>;

// Example usage:
export type IBSBackendServiceKey = "IBS-Backend" | "Utilities" | "ONE-Backend" | "eKYC-Backend";
export type CoreServiceKeys =
    | "Data-Mgt"
    | "Equity-Order"
    | "Futures-Order"
    | "Order-Update"
    | "Parameter";