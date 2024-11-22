import React from 'react'
import "./index.css"
import { IBSBackendServiceKey, ServiceMetrics } from '../../Types/Service.type'
import { useNavigate } from 'react-router-dom'
type Props = {
    data?: ServiceMetrics<IBSBackendServiceKey>
}

const getNestedValue = (path: () => number | undefined | null, fallback: string = 'N/A'): string => {
    try {
        const value = path();
        return value != null ? value.toFixed(2) : fallback;
    } catch {
        return fallback;
    }
};

const IBSBackendTable = ({ data }: Props) => {

    const rows: { name: string, key: IBSBackendServiceKey }[] = [
        { name: 'ONE BackEnd', key: 'ONE-Backend' },
        { name: 'IBS BackEnd', key: 'IBS-Backend' },
        { name: 'eKYC BackEnd', key: 'eKYC-Backend' },
        { name: 'IBS Utilities', key: 'Utilities' },
    ];
    const navigate = useNavigate(); // useNavigate hook

    const handleRowClick = (name: string) => {
        // Use navigate for programmatic navigation
        navigate(`/details?current-detail=${name}`);
    };
    return (
        <div className='ibs-table-container'>
            <table className="ibs-service-table">
                <thead>
                    <tr>
                        <th>IBS BackEnd</th>
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

export default IBSBackendTable