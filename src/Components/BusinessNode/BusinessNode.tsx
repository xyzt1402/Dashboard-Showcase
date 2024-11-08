import React from "react";
import { BusinessNodePropsType } from "../../Types/Node.type";
import customStyle from "./BusinessNode.module.scss";
import { BusinessMetricType } from "../../Types/Metric.type";

const BusinessNode: React.FC<BusinessNodePropsType> = ({ data }) => {
  const { dataBusiness, dataLoading, title, logo } = data;
  const renderDataBusiness = (data: BusinessMetricType) => {
    return <div>{data?.value}</div>;
  };
  return (
    <div className={customStyle.container}>
      <div className={customStyle.logo}>{logo}</div>
      <div className={customStyle.title}>{title}</div>
      <div className={customStyle.dataBusiness}>
        {renderDataBusiness(dataBusiness)}
      </div>
    </div>
  );
};

export default BusinessNode;
