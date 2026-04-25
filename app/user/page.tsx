import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Banner from "@/components/User/banner";
import RiskMap from "@/components/User/risk_map";
import React from "react";

const Overview = () => {
  return (
    <div className="flex flex-col gap-y-6">
      <Banner />
      <RiskMap />
    </div>
  );
};

export default Overview;
