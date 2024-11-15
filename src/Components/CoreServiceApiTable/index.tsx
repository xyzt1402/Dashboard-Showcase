import React from 'react'
import './index.css'
import { IBSBackendServiceKey, ServiceMetrics } from '../../Types/Service.type'
type Props = {
    data?: ServiceMetrics<IBSBackendServiceKey>
}

const CoreServiceAPI = ({ data }: Props) => {

    return (
        <div className='table-container'>
            <table className="service-table">
                <thead>
                    <tr>
                        <th>Core ApiServices</th>
                        <th>Avail</th>
                        <th>Req/s</th>
                        <th>Errors</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>XML Trading API 1</td>
                        <td>x</td>
                        <td>x</td>
                        <td>x</td>
                    </tr>
                    <tr>
                        <td>XML Trading API 2</td>
                        <td>x</td>
                        <td>x</td>
                        <td>x</td>
                    </tr>
                    <tr>
                        <td>XML Trading API 3</td>
                        <td>x</td>
                        <td>x</td>
                        <td>x</td>
                    </tr>
                    <tr>
                        <td>XML Trading API 4</td>
                        <td>x</td>
                        <td>x</td>
                        <td>x</td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}

export default CoreServiceAPI