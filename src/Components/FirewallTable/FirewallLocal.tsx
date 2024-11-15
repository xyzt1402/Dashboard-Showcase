import React from 'react'
import "./index.css"
type Props = {}

const FirewallLocal = (props: Props) => {
    return (
        <div className='table-container'>
            <table className="firewall-table">
                <thead>
                    <tr>
                        <th>FWLocal</th>
                        <th>Heatbeat</th>
                        <th>BW</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Eth1/1 ➜ LB 1</td>
                        <td>Y</td>
                        <td>50%</td>

                    </tr>
                    <tr>
                        <td>Eth1/2 ➜ LB 2</td>
                        <td>Y</td>
                        <td>50%</td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default FirewallLocal