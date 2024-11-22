import React from 'react';
import './index.css';

type Props = {
    serviceName: string;
    status: boolean;
    available?: boolean;
};

const BusinessStatusService = ({ serviceName, status, available = true }: Props) => {
    const statusClass = available
        ? status
            ? 'hsc-ok'
            : 'hsc-not-ok'
        : 'hsc-not-available';

    return (
        <div className="hsc-business-status-service-container">
            <div className="hsc-business-service">{serviceName}</div>
            <div className={`hsc-business-status ${statusClass}`}>
                {available ? (status ? 'OK' : 'Not OK') : 'TBD'}
            </div>
        </div>
    );
};

export default BusinessStatusService;
