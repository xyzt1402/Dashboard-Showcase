export interface DetailInforTable {
    status: boolean;
    method: string;
    endpoint: string;
    duration: string;
    detail: string | null;
}

export interface DetailMetricType {
    tests: number;
    passes: number;
    failures: number;
    duration: string;
    start: string;
    details: DetailInforTable[];
}
