import React from 'react'
import './index.css'
type Props = {}

const TSPService = (props: Props) => {
    return (
        <div className='table-container'>
            <table className="service-table">
                <thead>
                    <tr>
                        <th>TSP Service</th>
                        <th>Avail</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Core Api Gateway</td>
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

export default TSPService