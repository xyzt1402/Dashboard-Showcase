import { useDetailMetricsQuery } from '@hscproject/Apis/DetailMetrics/ServiceMetrics.hook'
import DetailInfo from '@hscproject/Components/DetailInfor'
import DetailTable from '@hscproject/Components/DetailTable'
import HeaderTitle from '@hscproject/Components/HeaderTitle'
import RunDetails from '@hscproject/Components/RunDetails'
import useDetailMetrics from '@hscproject/Modules/DetailMetrics/useDetailMetrics'
import React from 'react'
import { useSearchParams } from 'react-router-dom'
import './index.css'
type Props = {}

const Details = (props: Props) => {

    const { detailMetricData, currentDetail } = useDetailMetrics();
    return (
        <>
            <div className='hsc-container'>
                <div className="hsc-header">
                    <HeaderTitle />
                    <RunDetails currentDetail={currentDetail} />
                </div>
                <div className='hsc-details-info'>
                    <DetailInfo title='Test Attempts' data={detailMetricData?.tests} />
                    <DetailInfo title={<>
                        <div className='hsc-mini-circle-passed' />
                        <div>Passed Endpoint</div>
                    </>} data={detailMetricData?.passes} />
                    <DetailInfo title={<>
                        <div className='hsc-mini-circle-failed' />
                        <div>Failed Endpoint</div>
                    </>} data={detailMetricData?.failures} />
                    <DetailInfo title='Duration' data={detailMetricData?.duration} />
                    <DetailInfo title='Start (Date)' data={detailMetricData?.start} />
                </div>
                <div className='hsc-details-table-container'>
                    <DetailTable data={detailMetricData?.details} />
                </div>
            </div>

        </>
    )
}

export default Details