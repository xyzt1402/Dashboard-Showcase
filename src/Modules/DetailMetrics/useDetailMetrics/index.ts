import { useDetailMetricsQuery } from "@hscproject/Apis/DetailMetrics/ServiceMetrics.hook";
import { useBusinessStatusBanking, useBusinessStatusConnection, useBusinessStatusTrading } from "../../../Apis/BusinessStatus/BusinessStatus.hook";
import { useAppSelector } from "../../../Redux/Slices/Slice.hook";
import { RootState } from "../../../Redux/Store";
import { useSearchParams } from "react-router-dom";
import { CoreServiceKeys, IBSBackendServiceKey } from "@hscproject/Types/Service.type";

const useDetailMetrics = () => {

    // const dispatch = useAppDispatch();
    const { formTime } = useAppSelector((state: RootState) => state.timeRange);
    const [searchParams] = useSearchParams();
    const currentDetail = searchParams.get('current-detail');
    const { data: detailMetricData, isLoading: detailMetricLoading } = useDetailMetricsQuery(formTime, currentDetail as IBSBackendServiceKey | CoreServiceKeys);


    // console.log('data ServiceIBS', serviceIBSData)
    // console.log('data One', serviceOneData)
    console.log('dataDetail', detailMetricData)


    return { detailMetricData, currentDetail }
}

export default useDetailMetrics