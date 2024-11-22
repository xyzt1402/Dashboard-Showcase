import React, { ChangeEvent } from 'react'
import { setTimeRange } from '../../Redux/Slices/TimeRange.slice';
import PlayBtn from '../PlayBtn';
import Select from '../Select';
import { useAppDispatch } from '../../Redux/Slices/Slice.hook';
import RealTimeClock from '../RealTimeClock';

type Props = {}

const TimeRangePicker = (props: Props) => {
    const dispatch = useAppDispatch();


    const handleChangeRangeTime = (e: ChangeEvent<HTMLSelectElement>): void => {
        const rangeTime = {
            from: parseFloat(
                ((Date.now() - Number(e.target.value)) / 1000).toFixed()
            ),
            to: parseFloat((Date.now() / 1000).toFixed()),
        };

        dispatch(
            setTimeRange({ formTime: rangeTime, rangeTime: Number(e.target.value) })
        );
    };
    return (
        <div style={{
            display: "flex",
            alignItems: "center",

            gap: 9,
            borderRadius: 9,
            backgroundColor: " #FFFFFF1A",
        }}>
            <PlayBtn style={{ height: 40, width: 40 }} />
            <Select
                options={[
                    { label: "Last 5m", value: 60000 },
                    { label: "Last 15m", value: 900000 },
                    { label: "Last 30m", value: 1800000 },
                    { label: "Last 1h", value: 3600000 },
                    { label: "Last 3h", value: 10800000 },
                    { label: "Last 6h", value: 21600000 },
                    { label: "Last 12h", value: 43200000 },
                    { label: "Last 1d", value: 86400000 },
                ]}
                onChange={handleChangeRangeTime}
                style={{
                    fontSize: 16,
                    fontWeight: 400,
                    padding: "9px 21px",
                    height: 40,
                }}
            />
            <div style={{ height: 40, width: 150 }}>
                <RealTimeClock />

            </div>
        </div>
    )
}

export default TimeRangePicker