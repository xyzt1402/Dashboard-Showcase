import React from 'react'
import "./index.css"
import { IBSBackendServiceKey, ServiceMetrics } from '../../Types/Service.type'
type Props = {
    data?: ServiceMetrics<IBSBackendServiceKey>
}

const IBSBackendTable = ({ data }: Props) => {
    return (
        <div className='table-container'>
            <table className="service-table">
                <thead>
                    <tr>
                        <th>IBS BackEnd</th>
                        <th>Avail</th>
                        <th>Req/s</th>
                        <th>Errors</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>ONE BackEnd</td>
                        <td className='avail'>
                            <div className={`circle ${data ? data['ONE-Backend'].Avail === 'OK' ? 'ok' : 'failed' : ''}`} />
                        </td>
                        <td>{data ? data['ONE-Backend']['Req/s'].value[0][1].toFixed(2) : ''}</td>
                        <td>{data ? data['ONE-Backend'].Errors.value[0][1].toFixed(2) : ''}</td>
                    </tr>
                    <tr>
                        <td>IBS BackEnd</td>
                        <td className='avail'>
                            <div className={`circle ${data ? data['IBS-Backend'].Avail === 'OK' ? 'ok' : 'failed' : ''}`} />
                        </td>
                        <td>{data ? data['IBS-Backend']['Req/s'].value[0][1].toFixed(2) : ''}</td>
                        <td>{data ? data['IBS-Backend'].Errors.value[0][1].toFixed(2) : ''}</td>
                    </tr>
                    <tr>
                        <td>eKYC BackEnd</td>
                        <td className='avail'>
                            <div className={`circle ${data ? data['eKYC-Backend'].Avail === 'OK' ? 'ok' : 'failed' : ''}`} />
                        </td>
                        <td>{data ? data['eKYC-Backend']['Req/s'].value[0][1].toFixed(2) : ''}</td>
                        <td>{data ? data['eKYC-Backend'].Errors.value[0][1].toFixed(2) : ''}</td>
                    </tr>
                    <tr>
                        <td>IBS Ultilities</td>
                        <td className='avail'>
                            <div className={`circle ${data ? data['IBS-Utilities'].Avail === 'OK' ? 'ok' : 'failed' : ''}`} />
                        </td>
                        <td>{data ? data['IBS-Utilities']['Req/s'].value[0][1].toFixed(2) : ''}</td>
                        <td>{data ? data['IBS-Utilities'].Errors.value[0][1].toFixed(2) : ''}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default IBSBackendTable