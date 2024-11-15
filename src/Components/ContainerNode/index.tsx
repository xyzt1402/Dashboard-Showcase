import React from 'react'
import './index.css'
import { ContainerNodePropsType } from '../../Types/Node.type'
type Props = {}

const ContainerNode = ({ data }: ContainerNodePropsType) => {
    const { width, height, title } = data
    return (
        <div style={{ width: width, height: height, backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='6' ry='6' stroke='%23FFFFFF' stroke-width='1' stroke-dasharray='12%2c 12' stroke-dashoffset='3' stroke-linecap='round'/%3e%3c/svg%3e")` }} className='hsc-container-node'>
            <div className='hsc-container-title'>{title}</div>
        </div>
    )
}

export default ContainerNode