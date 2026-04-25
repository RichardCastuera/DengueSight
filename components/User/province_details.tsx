import React from "react";

interface ProvinceDetailsProps {
  provinceName: string;
}

const ProvinceDetails: React.FC<ProvinceDetailsProps> = ({ provinceName }) => {
  const provinces = {
    Albay: {
      status: "Moderate",
      cases: 88,
      week: 17,
      topDriver: "Rainfall t-2",
    },
    "Camarines Norte": {
      status: "Low",
      cases: 25,
      week: 17,
      topDriver: "Temperature drop",
    },
    "Camarines Sur": {
      status: "High",
      cases: 120,
      week: 17,
      topDriver: "Flooding",
    },
    // add more provinces here...
  };

  const province = provinces[provinceName as keyof typeof provinces];

  if (!province) {
    return <div>No data found for {provinceName}</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{provinceName}</h1>
      <p className="mb-2">Status: {province.status}</p>
      <p className="mb-2">Estimated Cases: {province.cases}</p>
      <p className="mb-2">Week: {province.week}</p>
      <p className="mb-2">Top Driver: {province.topDriver}</p>
    </div>
  );
};

export default ProvinceDetails;
