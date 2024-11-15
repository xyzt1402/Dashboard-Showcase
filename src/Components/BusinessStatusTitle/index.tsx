import React from 'react'
import './index.css'
type Props = {
    titleName: string
}

const BusinessStatusTitle = ({ titleName }: Props) => {
    return (
        <div className='hsc-business-status-title'>{titleName}</div>
    )
}

export default BusinessStatusTitle