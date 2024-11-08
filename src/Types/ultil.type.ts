import { AxiosResponseHeaders, InternalAxiosRequestConfig } from "axios";

export interface RangeTimeType {
  from: number;
  to: number;
}

export interface ResponseApiType<T = never> {
  config: InternalAxiosRequestConfig;
  data: T;
  header: AxiosResponseHeaders;
  request: XMLHttpRequest;
  status: number;
  statusText: string;
}
