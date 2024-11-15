import React from 'react'
import './index.css'
type Props = {
    serviceName: string,
    status: boolean
}

const BusinessStatusService = ({ serviceName, status }: Props) => {
    return (
        <div className='hsc-business-status-service-container'>
            <div className='hsc-business-service'>{serviceName} </div>
            <div className={`hsc-business-status ${status ? 'hsc-ok' : 'hsc-not-ok'}`}>{status ? 'OK' : 'Not OK'}</div>
        </div>
    )
}

export default BusinessStatusService