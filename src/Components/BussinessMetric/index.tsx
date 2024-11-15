import React, { ReactNode } from 'react'
import customStyle from "./BusinessMetric.module.scss";
import { Unit } from '../../Types/Metric.type';

type DataBusiness = {
    value?: number[][]; // Numeric value for the metric
    units?: Unit[] | null;
};

interface BusinessMetricData {
    logo: ReactNode; // Accepts a JSX element
    title: string;   // Title of the metric
    dataBusiness: DataBusiness
}

const BusinessMetric = (data: BusinessMetricData) => {

    const renderDataBusiness = (data: DataBusiness) => {
        return <div>{data ? data.value ? data.value[0][1] : '' : ''} {data?.units?.[0].short_name}</div>;
    };
    return (
        <div className={customStyle.container}>
            <div className={customStyle.logo}>{data.logo}</div>
            <div className={customStyle.title}>{data.title}</div>
            <div className={customStyle.dataBusiness}>
                {renderDataBusiness(data.dataBusiness)}
            </div>
        </div>
    )
}

export default BusinessMetric