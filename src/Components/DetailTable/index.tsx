import React, { useEffect, useState } from 'react';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { ConfigProvider, Empty, Table, TableProps } from 'antd';
import { DataType } from '@hscproject/Types/DetailTable.type';
import { DetailInforTable } from '@hscproject/Types/DetailMetrics.type';
import './index.css';

type Props = {
    data?: DetailInforTable[]
};

const columns: TableProps<DataType>["columns"] = [
    {
        title: "Status", dataIndex: "status", key: "status", fixed: "left", render: (value) => (
            <div className='hsc-cell-container'>
                <div className={`hsc-status-cell ${value === 'PASSED' ? 'hsc-status-passed' : 'hsc-status-failed'}`}>{value}</div>
            </div>
        ),
        width: '12%',
    },
    {
        title: "Method", dataIndex: "method", key: "method", render: (value) => (
            <div className={value === 'GET' ? 'hsc-method-get' : 'hsc-method-post'}>{value}</div>
        ),
        width: '12%',
    },
    { title: "Endpoint", dataIndex: "endpoint", key: "endpoint", width: '64%' },
    { title: "Duration", dataIndex: "duration", key: "duration", width: '12%' },
    Table.EXPAND_COLUMN,
];

const DetailTable = ({ data }: Props) => {
    const [pageSize, setPageSize] = useState(6); // Default page size
    const [formattedData, setFormattedData] = useState<DataType[]>([]);
    const [expandedRows, setExpandedRows] = useState<Set<React.Key>>(new Set());

    useEffect(() => {
        if (data) {
            const calculatedData = data.map((item, index) => ({
                key: index,
                status: item.status ? 'PASSED' : 'FAILED',
                method: item.method,
                endpoint: item.endpoint,
                duration: item.duration,
                description: item.detail,
            }));
            setFormattedData(calculatedData);

            const calculatePageSize = () => {
                const tableElement = document.querySelector(".hsc-detail-table") as HTMLElement;
                if (tableElement) {
                    const containerHeight = tableElement.offsetHeight;
                    const rowHeight = 80; // Approximate height of a table row
                    const headerHeight = 55; // Approximate height of the table header
                    const expandedHeight = 134; // Approximate height of expanded row content
                    const expandedRowCount = expandedRows.size; // Number of expanded rows

                    const availableHeight = containerHeight - headerHeight - (expandedRowCount * expandedHeight);
                    const calculatedPageSize = Math.floor(availableHeight / rowHeight);
                    setPageSize(calculatedPageSize > 0 ? calculatedPageSize : 1); // Ensure at least one row
                }
            };

            calculatePageSize();
            window.addEventListener("resize", calculatePageSize); // Recalculate on window resize

            return () => window.removeEventListener("resize", calculatePageSize);
        }
    }, [data, expandedRows]);

    return (
        <div className='hsc-detail-table'>
            <ConfigProvider
                theme={{
                    components: {
                        Table: {
                            borderColor: '#00000000',
                        },
                    },
                }}
            >
                <Table<DataType>
                    style={{ backgroundColor: "rgba(0, 0, 0, 0)" }} // Transparent background
                    columns={columns}
                    expandable={{
                        expandedRowRender: record => (
                            <div className="expand-content">
                                <p className="expand-content-para" style={{ margin: 0 }}>{record.description}</p>
                            </div>
                        ),
                        rowExpandable: record => record.description !== null,
                        expandIcon: ({ expanded, onExpand, record }) => {
                            if (record.description !== null) {
                                return expanded ? (
                                    <UpOutlined
                                        style={{ color: "white", cursor: "pointer" }}
                                        onClick={(e) => {
                                            onExpand(record, e);
                                            setExpandedRows((prev) => {
                                                const updated = new Set(prev);
                                                updated.delete(record.key);
                                                return updated;
                                            });
                                        }}
                                    />
                                ) : (
                                    <DownOutlined
                                        style={{ color: "white", cursor: "pointer" }}
                                        onClick={(e) => {
                                            onExpand(record, e);
                                            setExpandedRows((prev) => {
                                                const updated = new Set(prev);
                                                updated.add(record.key);
                                                return updated;
                                            });
                                        }}
                                    />
                                );
                            }
                            return null; // Do not render the expand icon if not expandable
                        },
                    }}
                    dataSource={formattedData}
                    bordered
                    pagination={{ pageSize }}
                    locale={{ emptyText: <div className='hsc-no-data'>TBD</div> }}
                />
            </ConfigProvider>
        </div>
    );
};

export default DetailTable;
