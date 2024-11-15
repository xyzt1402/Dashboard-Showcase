import React from 'react'
import "./index.css"

type Props = {}

const ONEFeTable = (props: Props) => {
    return (
        <div className='table-container'>
            <table className="service-table">
                <thead>
                    <tr>
                        <th>ONE FE</th>
                        <th>Avail</th>
                        <th>Req/s</th>
                        <th>Errors</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>myhsc-fe5x</td>
                        <td>x</td>
                        <td>x</td>
                        <td>x</td>
                    </tr>
                    <tr>
                        <td>Kongapi</td>
                        <td>x</td>
                        <td>x</td>
                        <td>x</td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}

export default ONEFeTable