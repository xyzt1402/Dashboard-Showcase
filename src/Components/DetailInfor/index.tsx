import React from 'react'
import customDetailStyle from './index.module.scss'

type Props = {
    title: string | React.ReactElement;
    data?: string | number | null;
}

const DetailInfo = ({ title, data }: Props) => {
    const titleClass =
        title === 'Duration'
            ? customDetailStyle['duration-title']
            : title === 'Start (Date)'
                ? customDetailStyle['start-date-title']
                : customDetailStyle['normal-title'];
    const dataItems =
        typeof data === 'string'
            ? data.split(',').map(item => item.trim()).filter(Boolean)
            : data !== null && data !== undefined
                ? [String(data).trim()]
                : ['TBD'];
    return (
        <>
            <div className={customDetailStyle['detail-info']}>
                <div className={customDetailStyle['detail-title']}>{title} </div>
                <div className={`${customDetailStyle['detail-body']} ${titleClass}`}>
                    {dataItems.map((item, index) => (
                        <React.Fragment key={index}>
                            <div className={customDetailStyle['data-item']}>{item}</div>
                            {index < dataItems.length - 1 && (
                                <div className={customDetailStyle['divider']} />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </>

    )
}

export default DetailInfo;