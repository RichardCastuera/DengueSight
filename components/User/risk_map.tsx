import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";

const RiskMap = () => {
  return (
    <div>
      <Card className="text-[var(--accent-red)]/75">
        <CardHeader className="md:px-8">
          <h2 className="text-base font-bold">Province Risk Map</h2>
          <h6 className="text-xs">
            Click a province to view detailed forecast.
          </h6>
        </CardHeader>
        <CardContent className="md:px-8">sample map here</CardContent>
      </Card>
    </div>
  );
};

export default RiskMap;
