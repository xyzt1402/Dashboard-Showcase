import React from 'react'
import "./index.css"
import { CoreServiceKeys, ServiceMetrics } from '../../Types/Service.type'
type Props = {
    data?: ServiceMetrics<CoreServiceKeys>
}

const OneCoreTable = ({ data }: Props) => {

    return (
        <div className='table-container'>

            <table className="service-table">
                <thead>
                    <tr>
                        <th>One Core</th>
                        <th>Avail</th>
                        <th>Req/s</th>
                        <th>Errors</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Equity Order</td>
                        <td className='avail'>
                            <div className={`circle ${data ? data['Equity-Order'].Avail === 'OK' ? 'ok' : 'failed' : ''}`} />
                        </td>
                        <td>{data ? data['Equity-Order']['Req/s'].value[0][1].toFixed(2) : ''}</td>
                        <td>{data ? data['Equity-Order'].Errors.value[0][1].toFixed(2) : ''}</td>
                    </tr>
                    <tr>
                        <td>Future Order</td>
                        <td className='avail'>
                            <div className={`circle ${data ? data['Future-Orders'].Avail === 'OK' ? 'ok' : 'failed' : ''}`} />
                        </td>
                        <td>{data ? data['Future-Orders']['Req/s'].value[0][1].toFixed(2) : ''}</td>
                        <td>{data ? data['Future-Orders'].Errors.value[0][1].toFixed(2) : ''}</td>
                    </tr>
                    <tr>
                        <td>Order Update</td>
                        <td className='avail'>
                            <div className={`circle ${data ? data['Order-Update'].Avail === 'OK' ? 'ok' : 'failed' : ''}`} />
                        </td>
                        <td>{data ? data['Order-Update']['Req/s'].value[0][1].toFixed(2) : ''}</td>
                        <td>{data ? data['Order-Update'].Errors.value[0][1].toFixed(2) : ''}</td>
                    </tr>
                    <tr>
                        <td>Data-Mgt</td>
                        <td className='avail'>
                            <div className={`circle ${data ? data['Data-Mgt'].Avail === 'OK' ? 'ok' : 'failed' : ''}`} />
                        </td>
                        <td>{data ? data['Data-Mgt']['Req/s'].value[0][1].toFixed(2) : ''}</td>
                        <td>{data ? data['Data-Mgt'].Errors.value[0][1].toFixed(2) : ''}</td>
                    </tr>
                    <tr>
                        <td>Parameter</td>
                        <td className='avail'>
                            <div className={`circle ${data ? data['Parameter'].Avail === 'OK' ? 'ok' : 'failed' : ''}`} />
                        </td>
                        <td>{data ? data['Parameter']['Req/s'].value[0][1].toFixed(2) : ''}</td>
                        <td>{data ? data['Parameter'].Errors.value[0][1].toFixed(2) : ''}</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default OneCoreTable