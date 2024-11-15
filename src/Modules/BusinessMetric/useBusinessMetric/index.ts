import { ChangeEvent } from "react";
import { useBusinessIBSQuery, useBusinessOneQuery } from "../../../Apis/BusinessMetrics/BusinessMetrics.hook";
import { useAppDispatch, useAppSelector } from "../../../Redux/Slices/Slice.hook";
import { RootState } from "../../../Redux/Store";
import { setTimeRange } from "../../../Redux/Slices/TimeRange.slice";

const useBusinessMetric = () => {

    const dispatch = useAppDispatch();
    const { formTime } = useAppSelector((state: RootState) => state.timeRange);
    useBusinessOneQuery(formTime);
    const { data: businessIBSData, isLoading: businessIBSLoading } =
        useBusinessIBSQuery(formTime);

    const { data: businessClusterOne, isLoading: businessClusterOneLoading } = useBusinessOneQuery(formTime);
    console.log("BusinessIBSData", businessIBSData);
    console.log("businesscluster", businessClusterOne)
    const handleChangeRangeTime = (e: ChangeEvent<HTMLSelectElement>): void => {
        const rangeTime = {
            from: parseFloat(
                ((Date.now() - Number(e.target.value)) / 1000).toFixed()
            ),
            to: parseFloat((Date.now() / 1000).toFixed()),
        };

        dispatch(
            setTimeRange({ formTime: rangeTime, rangeTime: Number(e.target.value) })
        );
    };

    return { businessIBSData, businessClusterOne, handleChangeRangeTime }
}

export default useBusinessMetric