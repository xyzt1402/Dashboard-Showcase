import MassiveAppDashboard from "./Modules/MassiveAppDashboard";
import "./App.css";
import "@xyflow/react/dist/style.css";
import HeaderTitle from "./Components/HeaderTitle";
import PlayBtn from "./Components/PlayBtn";
import TimeRangePicker from "./Components/TimeRangePicker";
import BusinessMetric from "./Components/BussinessMetric";
import WebLogin from "./assets/IMG/WebLogin";
import MobileLogin from "./assets/IMG/MobileLogin";
import Order from "./assets/IMG/Order";
import FutureOrder from "./assets/IMG/FutureOrder";
import Deposit from "./assets/IMG/Deposit";
import Withdraw from "./assets/IMG/Withdraw";
import FirewallTable from "./Components/FirewallTable";
import FirewallLocal from "./Components/FirewallTable/FirewallLocal";
import IBSBackendTable from "./Components/IBSBackendTable";
import ONEFeTable from "./Components/ONEFeTable";
import OneCoreTable from "./Components/ONECoreTable";
import DataFeedTable from "./Components/DataFeedTable";
import TSPService from "./Components/TSPService";
import HSCDataFeedTable from "./Components/HSCDataFeed";
import CoreServiceAPI from "./Components/CoreServiceApiTable";
import BusinessStatusTitle from "./Components/BusinessStatusTitle";
import BusinessStatusService from "./Components/BusinessStatusService";
import useBusinessMetric from "./Modules/BusinessMetric/useBusinessMetric";
import useServiceMetric from "./Modules/ServiceMetric/useBusinessMetric";
import ChartBusiness from "./Components/ChartBusiness";
function App() {

  // const data = [10, 20, 30, 40, 50, 60]
  const { businessIBSData, handleChangeRangeTime, businessClusterOne } = useBusinessMetric();
  const { serviceIBSData, serviceOneData } = useServiceMetric();
  console.log('ibs table', serviceIBSData)
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
            title="Orders"
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
          {/* <BusinessMetric
            logo={<WebLogin />}
            title="Web Login"
            dataBusiness={{
              value: businessIBSData?.["Web-Login"].value,
              units: businessIBSData?.["Web-Login"].units,
            }}
          />
          <BusinessMetric
            logo={<WebLogin />}
            title="Web Login"
            dataBusiness={{
              value: 10,
              units: [{ short_name: '' }]
            }}
          /> */}
          <ChartBusiness title="Login per Day" />
          <ChartBusiness title="Order per Day" />
          {/* <MassiveAppDashboard /> */}
        </div>

        <div className="hsc-status-container">
          <div className="hsc-cluster-status">
            <MassiveAppDashboard />
          </div>
          <div className="hsc-bussiness-status">
            <BusinessStatusTitle titleName="Trading Check" />
            <BusinessStatusService serviceName="Logins" status />
            <BusinessStatusService serviceName="Order Equity" status={false} />

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
          <div className="hsc-service-4">
            <CoreServiceAPI />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
