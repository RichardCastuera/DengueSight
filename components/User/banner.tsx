import { Badge } from "../ui/badge";
import React from "react";
import { Card, CardHeader, CardContent } from "../ui/card";

const Banner = () => {
  return (
    <div>
      <Card className="text-[var(--accent-violet)]/75">
        <CardHeader> </CardHeader>
        <CardContent className="mb-5 md:px-8">
          <h1 className="text-3xl font-bold mb-4 md:text-5xl text-[var(--accent-red)]">
            BICOL REGION
          </h1>
          <h2 className="uppercase mb-5">
            Week 17 · 2025 · Dengue Forecast Dashboard
          </h2>
          <div className="flex flex-row flex-wrap gap-4 items-center">
            <Badge variant="destructive">3 of 6 provinces elevated</Badge>
            <h4>Total forecasted cases this week: </h4>
            <h3 className="font-semibold">450</h3>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Banner;
