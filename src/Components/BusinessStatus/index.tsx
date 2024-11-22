import { CheckingStatus, CheckingStatusKeys, StatusService } from '../../Types/Status.type'
import BusinessStatusTitle from '../BusinessStatusTitle'
import BusinessStatusService from '../BusinessStatusService'
import './index.css'
type Props = {
    data: StatusService<CheckingStatus>;
    typeData: CheckingStatusKeys;
};

const BusinessStatusView = ({ data, typeData }: Props) => {
    return (
        <div className='business-status-view'>
            <BusinessStatusTitle titleName={typeData} />
            {Object.entries(data).map(([item, status]) => (
                <BusinessStatusService key={item} serviceName={item} status={status === 'OK'} available={false} />
            ))}
        </div>
    )
}

export default BusinessStatusView