import MassiveAppDashboard from "@hscproject/Modules/MassiveAppDashboard";
import "@hscproject/App.css";
import "@xyflow/react/dist/style.css";
import HeaderTitle from "@hscproject/Components/HeaderTitle";
import PlayBtn from "@hscproject/Components/PlayBtn";
import TimeRangePicker from "@hscproject/Components/TimeRangePicker";
import BusinessMetric from "@hscproject/Components/BussinessMetric";
import WebLogin from "@hscproject/assets/IMG/WebLogin";
import MobileLogin from "@hscproject/assets/IMG/MobileLogin";
import Order from "@hscproject/assets/IMG/Order";
import FutureOrder from "@hscproject/assets/IMG/FutureOrder";
import Deposit from "@hscproject/assets/IMG/Deposit";
import Withdraw from "@hscproject/assets/IMG/Withdraw";
import FirewallTable from "@hscproject/Components/FirewallTable";
import FirewallLocal from "@hscproject/Components/FirewallTable/FirewallLocal";
import IBSBackendTable from "@hscproject/Components/IBSBackendTable";
import ONEFeTable from "@hscproject/Components/ONEFeTable";
import OneCoreTable from "@hscproject/Components/ONECoreTable";
import DataFeedTable from "@hscproject/Components/DataFeedTable";
import TSPService from "@hscproject/Components/TSPService";
import HSCDataFeedTable from "@hscproject/Components/HSCDataFeed";
import CoreServiceAPI from "@hscproject/Components/CoreServiceApiTable";
import useBusinessMetric from "@hscproject/Modules/BusinessMetric/useBusinessMetric";
import useServiceMetric from "@hscproject/Modules/ServiceMetric/useBusinessMetric";
import ChartBusiness from "@hscproject/Components/ChartBusiness";
import useBusinessStatus from "@hscproject/Modules/BusinessStatus/useBusinessStatus";
import BusinessStatusView from "@hscproject/Components/BusinessStatus";
import { CheckingStatus, StatusService } from "@hscproject/Types/Status.type";
function Overview() {

    // const data = [10, 20, 30, 40, 50, 60]
    const { businessIBSData, handleChangeRangeTime, businessClusterOne } = useBusinessMetric();
    const { serviceIBSData, serviceOneData } = useServiceMetric();
    const { businessBanking, businessConnection, businessTrading } = useBusinessStatus();
    return (
        <>
            <div className="hsc-container">
                <div className="hsc-header">
                    <HeaderTitle />
                    <div>
                        <TimeRangePicker />
                    </div>
                </div>
                <div className="hsc-business-metric">
                    <BusinessMetric
                        logo={<WebLogin />}
                        title="Web Login"
                        dataBusiness={{
                            value: businessIBSData?.["Web-Login"].value,
                            units: businessIBSData?.["Web-Login"].units
                        }}
                    />
                    <BusinessMetric
                        logo={<MobileLogin />}
                        title="Mobile Login"
                        dataBusiness={{
                            value: businessIBSData?.["Mobile-Login"].value,
                            units: businessIBSData?.["Mobile-Login"].units,
                        }}
                    />
                    <BusinessMetric
                        logo={<Order />}
                        title="Equity Orders"
                        dataBusiness={{
                            value: businessClusterOne?.["Orders"].value,
                            units: businessClusterOne?.["Orders"].units,
                        }}
                    />
                    <BusinessMetric
                        logo={<FutureOrder />}
                        title="Future Orders"
                        dataBusiness={{
                            value: businessClusterOne?.["Future-Orders"].value,
                            units: businessClusterOne?.["Future-Orders"].units,
                        }}
                    />
                    <BusinessMetric
                        logo={<Deposit />}
                        title="Deposit"
                        dataBusiness={{
                            value: businessIBSData?.["Deposit"].value,
                            units: businessIBSData?.["Deposit"].units,
                        }}
                    />
                    <BusinessMetric
                        logo={<Withdraw />}
                        title="Withdraw"
                        dataBusiness={{
                            value: businessIBSData?.["Withdraw"].value,
                            units: businessIBSData?.["Withdraw"].units,
                        }}
                    />
                    <ChartBusiness title="Login per Day" />
                    <ChartBusiness title="Order per Day" />
                    {/* <MassiveAppDashboard /> */}
                </div>

                <div className="hsc-status-container">
                    <div className="hsc-cluster-status">
                        <MassiveAppDashboard />
                    </div>
                    <div className="hsc-bussiness-status">
                        {businessTrading && <BusinessStatusView data={businessTrading as StatusService<CheckingStatus>} typeData="Trading Check" />}
                        {businessBanking && <BusinessStatusView data={businessBanking as StatusService<CheckingStatus>} typeData="Banking Check" />}
                        {businessConnection && <BusinessStatusView data={businessConnection as StatusService<CheckingStatus>} typeData="Connection Check" />}
                    </div>
                </div>

                <div className="hsc-service-metric">
                    <div className="hsc-service-1">
                        <FirewallTable />
                        <FirewallLocal />
                    </div>
                    <div className="hsc-service-2">
                        <IBSBackendTable data={serviceIBSData} />
                        <ONEFeTable />
                    </div>
                    <div className="hsc-service-3">
                        <OneCoreTable data={serviceOneData} />
                        <DataFeedTable />
                    </div>
                    <div className="hsc-service-4">
                        <TSPService />
                        <HSCDataFeedTable />
                    </div>
                    <div className="hsc-service-5">
                        <CoreServiceAPI />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Overview;
