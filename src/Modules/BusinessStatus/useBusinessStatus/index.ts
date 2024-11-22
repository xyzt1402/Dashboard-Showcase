import { useBusinessStatusBanking, useBusinessStatusConnection, useBusinessStatusTrading } from "../../../Apis/BusinessStatus/BusinessStatus.hook";
import { useAppSelector } from "../../../Redux/Slices/Slice.hook";
import { RootState } from "../../../Redux/Store";

const useBusinessStatus = () => {

    // const dispatch = useAppDispatch();
    const { formTime } = useAppSelector((state: RootState) => state.timeRange);

    const { data: businessTrading, isLoading: businessTradingLoading } = useBusinessStatusTrading(formTime);
    const { data: businessBanking, isLoading: businessBankingLoading } = useBusinessStatusBanking(formTime);
    const { data: businessConnection, isLoading: businessConnectionLoading } = useBusinessStatusConnection(formTime);

    // console.log('data ServiceIBS', serviceIBSData)
    // console.log('data One', serviceOneData)


    return { businessTrading, businessBanking, businessConnection }
}

export default useBusinessStatus