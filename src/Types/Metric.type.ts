export interface Unit {
  family: string;
  name: string;
  plural: string;
  short_name: string;
}

//Services

export interface Measurement {
  value: number;
  units: Unit[] | null;
}

export interface ServiceMetricType {
  Avail: string;
  Errors: Measurement;
  "Req/s": Measurement;
}

//Business

export interface BusinessMetricType {
  value: number;
  units: Unit[] | null;
}
