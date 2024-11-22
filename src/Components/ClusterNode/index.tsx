import React from 'react'
import { ClusterNodePropsType } from '../../Types/Node.type'
import './index.css'
import { Handle, Position } from '@xyflow/react'

const ClusterNode = ({ data }: ClusterNodePropsType) => {
    const { status, logo, title, handles } = data
    console.log('status', status)
    return (
        <>
            <div className={`hsc-cluster-node-container ${status === true
                ? 'hsc-cluster-ok'
                : status === false
                    ? 'hsc-cluster-notok'
                    : 'hsc-cluster-null'
                }`}>
                <div className='hsc-cluster-node-logo'>{logo}</div>
                <div className='hsc-cluster-node-title'>{title}</div>

            </div>
            {handles?.map((item, index) => {
                return <Handle key={item.handleId} className='hsc-handle' id={item.handleId} type={item.type} position={item.position} style={item.style} />
            })}
        </>

    )
}

export default ClusterNode