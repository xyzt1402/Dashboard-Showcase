import React from 'react'
import "./index.css"
import { CoreServiceKeys, ServiceMetrics } from '../../Types/Service.type'
import { useNavigate } from 'react-router-dom'
type Props = {
    data?: ServiceMetrics<CoreServiceKeys>
}

type ServiceData = {
    [key: string]: {
        Avail?: 'OK' | 'FAILED';
        'Req/s'?: { value: [number, number][] };
        Errors?: { value: [number, number][] };
    };
};


const getNestedValue = (path: () => number | undefined | null, fallback: string = 'N/A'): string => {
    try {
        const value = path();
        return value != null ? value.toFixed(2) : fallback;
    } catch {
        return fallback;
    }
};


const OneCoreTable = ({ data }: Props) => {
    const rows: { name: string, key: CoreServiceKeys }[] = [
        { name: 'Equity Order', key: 'Equity-Order' },
        { name: 'Future Order', key: 'Futures-Order' },
        { name: 'Order Update', key: 'Order-Update' },
        { name: 'Data-Mgt', key: 'Data-Mgt' },
        { name: 'Parameter', key: 'Parameter' },
    ];
    const navigate = useNavigate(); // useNavigate hook

    const handleRowClick = (name: string) => {
        // Use navigate for programmatic navigation
        navigate(`/details?current-detail=${name}`);
    };

    return (
        <div className='one-table-container'>

            <table className="one-core-service-table">
                <thead>
                    <tr>
                        <th>One Core</th>
                        <th>Avail</th>
                        <th>Req/s</th>
                        <th>Errors</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map(({ name, key }) => (
                        <tr key={key} onClick={() => handleRowClick(key)}>
                            <td>{name}</td>
                            <td className="avail">
                                <div
                                    className={`circle ${data?.[key]?.Avail === 'OK'
                                        ? 'ok'
                                        : data?.[key]?.Avail
                                            ? 'failed'
                                            : 'null'
                                        }`}
                                />
                            </td>
                            <td>{getNestedValue(() => data![key]['Req/s']!.value[0][1])}</td>
                            <td>{getNestedValue(() => data![key].Errors!.value[0][1])}</td>
                        </tr>
                    ))}
                </tbody>

            </table>

        </div>
    )
}

export default OneCoreTable