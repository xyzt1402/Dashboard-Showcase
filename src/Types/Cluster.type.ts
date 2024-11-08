

import { BusinessMetricType } from "./Metric.type";
//Services

//Business
export interface BusinessClusterOne {
  "Future-Orders": BusinessMetricType;
  Orders: BusinessMetricType;
}

export interface BusinessClusterIBS {
  Deposit: BusinessMetricType;
  "Logins-per-Day": BusinessMetricType;
  "Mobile-Login": BusinessMetricType;
  "Orders-per-Day": BusinessMetricType;
  "Web-Login": BusinessMetricType;
  Withdraw: BusinessMetricType;
}
