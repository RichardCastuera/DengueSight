import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Banner from "@/components/User/banner";
import ProvinceSummaryCard from "@/components/User/province_summary_card";
import RiskMap from "@/components/User/risk_map";
import React from "react";

const Overview = () => {
  return (
    <div className="flex flex-col gap-y-6">
      <Banner />
      <RiskMap />
      <div className="grid grid-cols-2 gap-6">
        <ProvinceSummaryCard provinceName={"Albay"}></ProvinceSummaryCard>
        <ProvinceSummaryCard
          provinceName={"Camarines Norte"}
        ></ProvinceSummaryCard>
        <ProvinceSummaryCard
          provinceName={"Camarines Sur"}
        ></ProvinceSummaryCard>
        <ProvinceSummaryCard provinceName={"Catanduanes"}></ProvinceSummaryCard>
        <ProvinceSummaryCard provinceName={"Masbate"}></ProvinceSummaryCard>
        <ProvinceSummaryCard provinceName={"Sorsogon"}></ProvinceSummaryCard>
      </div>
    </div>
  );
};

export default Overview;
