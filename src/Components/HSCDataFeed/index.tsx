import React from 'react'
import './index.css'
type Props = {}

const HSCDataFeedTable = (props: Props) => {
    return (
        <div className='table-container'>
            <table className="service-table">
                <thead>
                    <tr>
                        <th>HSC DataFeed</th>
                        <th>Avail</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>DF Services</td>
                        <td>x</td>
                    </tr>
                    <tr>
                        <td>Autoport</td>
                        <td>x</td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}

export default HSCDataFeedTable