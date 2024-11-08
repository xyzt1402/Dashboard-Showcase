import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { RangeTimeType } from "../Types/ultil.type";

export const useServiceQuery = <T>(
    key: string,
    queryFn: () => Promise<T>,
    payload?: RangeTimeType
  ) => {
    return useQuery<T>({
      queryKey: [key, payload],
      queryFn,
      enabled: !!payload,
      refetchInterval: 60000,
      placeholderData: keepPreviousData,
    });
  };