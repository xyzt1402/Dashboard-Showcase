import React from 'react'
import { CartesianGrid, Line, LineChart, ReferenceLine, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import customStyle from "./ChartBusiness.module.scss";
import { useBusinessIBSQuery } from '../../Apis/BusinessMetrics/BusinessMetrics.hook';

type Props = {
    dataChart?: number[]
    title?: string
}

const ChartBusiness = ({ dataChart, title }: Props) => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    // Get today's date at 8:00 AM
    const todayAt8AM = new Date(now.setHours(8, 0, 0, 0));

    // Get today's date at 3:00 PM
    const todayAt3PM = new Date(now.setHours(15, 0, 0, 0));

    // Adjust the 'from' and 'to' range
    const rangeTime = {
        from: currentHour < 8 || (currentHour === 8 && currentMinute === 0)
            ? Math.floor(Date.now() / 1000)  // If current time is before 8:00 AM, set 'from' to now
            : Math.floor(todayAt8AM.getTime() / 1000),  // Else, set 'from' to 8:00 AM of today
        to: currentHour >= 15
            ? Math.floor(Date.now() / 1000)  // If current time is after 3:00 PM, set 'to' to now
            : Math.floor(todayAt3PM.getTime() / 1000)  // Else, 'to' is the current time
    };
    const { data: businessIBSData, isLoading: businessIBSLoading } = useBusinessIBSQuery(rangeTime);
    console.log('data', businessIBSData)

    return (
        <div className={customStyle.container} >
            <ResponsiveContainer width={'95%'} height={80} >
                <LineChart data={[]}
                    margin={{
                        left: -38,
                        right: 9,
                        top: 10,
                        bottom: -12,
                    }}
                >
                    <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={1} dot={<></>} />
                    <CartesianGrid stroke="#A3A4A5" strokeDasharray="3 3" />
                    <XAxis fontSize="0.4rem" stroke='white' dataKey="time" />
                    <YAxis fontSize="0.4rem" stroke='white' dataKey={"value"} />
                    <ReferenceLine y={300} stroke='red' />
                </LineChart>
            </ResponsiveContainer>

            <div className={customStyle.title}>{title}</div>
        </div>
    )
}

export default ChartBusiness