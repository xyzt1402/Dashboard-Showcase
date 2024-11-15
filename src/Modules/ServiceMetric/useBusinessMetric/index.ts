import { ChangeEvent } from "react";
import { useServiceIBSQuery, useServiceOneQuery } from "../../../Apis/ServiceMetrics/ServiceMetrics.hook";
import { useAppSelector } from "../../../Redux/Slices/Slice.hook";
import { RootState } from "../../../Redux/Store";

const useServiceMetric = () => {

    // const dispatch = useAppDispatch();
    const { formTime } = useAppSelector((state: RootState) => state.timeRange);
    const { data: serviceIBSData, isLoading: serviceIBSLoading } = useServiceIBSQuery(formTime);
    const { data: serviceOneData, isLoading: serviceOneLoading } = useServiceOneQuery(formTime);

    // console.log('data ServiceIBS', serviceIBSData)
    // console.log('data One', serviceOneData)


    return { serviceIBSData, serviceOneData }
}

export default useServiceMetric