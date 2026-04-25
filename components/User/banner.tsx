import { Badge } from "../ui/badge";
import React from "react";
import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";

const Banner = () => {
  return (
    <div>
      <Card>
        <CardHeader> </CardHeader>
        <CardContent>
          <h1 className="text-3xl font-bold mb-4 md:text-5xl">BICOL REGION</h1>
          <h2 className="uppercase mb-5">
            Week 17 · 2025 · Dengue Forecast Dashboard
          </h2>
          <div className="flex flex-row flex-wrap gap-4 items-center">
            <Badge variant="destructive">3 of 6 provinces elevated</Badge>
            <h4>Total forecasted cases this week: </h4>
            <h3 className="font-semibold">450</h3>
          </div>
        </CardContent>
        <CardFooter> </CardFooter>
      </Card>
    </div>
  );
};

export default Banner;
