import React from 'react'
import './index.css'
type Props = {}

const DataFeedTable = (props: Props) => {
    return (
        <div className='datafeed-table-container'>
            <table className="datafeed-service-table">
                <thead>
                    <tr>
                        <th>Data Feed</th>
                        <th>Avail</th>
                        <th>Req/s</th>
                        <th>Errors</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Streaming 1</td>
                        <td>x</td>
                        <td>x</td>
                        <td>x</td>
                    </tr>
                    <tr>
                        <td>Streaming 2</td>
                        <td>x</td>
                        <td>x</td>
                        <td>x</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DataFeedTable