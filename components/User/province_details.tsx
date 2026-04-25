import React from "react";
import StatCard from "./stat_cards";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { PillTabTrigger } from "./pill_tab_trigger";

interface ProvinceDetailsProps {
  provinceName: string;
}

const statusClasses: Record<string, string> = {
  Low: "bg-[var(--accent-green)]/20 text-[var(--accent-green)] border border-[var(--accent-green)]",
  Moderate:
    "bg-[var(--accent-orange)]/20 text-[var(--accent-orange)] border border-[var(--accent-orange)]",
  High: "bg-[var(--accent-red)]/20 text-[var(--accent-red)] border border-[var(--accent-red)]",
};

const ProvinceDetails: React.FC<ProvinceDetailsProps> = ({ provinceName }) => {
  const provinces = {
    Albay: {
      status: "Moderate",
      cases: 88,
      forecasted_cases: 100,
      last_week_cases: 70,
      peak_month: "September",
      five_year_avg: 65,
      week: 17,
      topDriver: "Rainfall t-2",
    },
    "Camarines Norte": {
      status: "Low",
      cases: 25,
      forecasted_cases: 30,
      last_week_cases: 20,
      peak_month: "July",
      five_year_avg: 28,
      week: 17,
      topDriver: "Temperature drop",
    },
    "Camarines Sur": {
      status: "High",
      cases: 120,
      forecasted_cases: 135,
      last_week_cases: 110,
      peak_month: "August",
      five_year_avg: 95,
      week: 17,
      topDriver: "Flooding",
    },
  };

  const province = provinces[provinceName as keyof typeof provinces];

  if (!province) {
    return <div>No data found for {provinceName}</div>;
  }

  return (
    <div>
      <div className="flex items-center gap-3 my-6">
        <h1 className="text-4xl font-bold">{provinceName}</h1>
        <Badge className={statusClasses[province.status]}>
          {province.status}
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch">
        <StatCard title="Forecasted this week">
          <>
            <p className="text-2xl font-bold">{province.forecasted_cases}</p>
            <p className="text-xs">CASES</p>
          </>
        </StatCard>

        <StatCard title="Last week actual">
          <>
            <p className="text-2xl font-bold">{province.last_week_cases}</p>
            <p className="text-xs">CASES</p>
          </>
        </StatCard>

        <StatCard title="Peak month (historical)">
          <p className="text-2xl font-bold">{province.peak_month}</p>
        </StatCard>

        <StatCard title="5-year avg weekly">
          <>
            <p className="text-2xl font-bold">{province.five_year_avg}</p>
            <p className="text-xs">CASES</p>
          </>
        </StatCard>
      </div>

      <div>
        <Tabs defaultValue="overview" className="flex flex-col">
          <TabsList className="flex flex-row item-start gap-2 mt-6 mb-4">
            <PillTabTrigger value={"overview"}>Overview</PillTabTrigger>
            <PillTabTrigger value={"climate"}>Climate</PillTabTrigger>
            <PillTabTrigger value={"forecast"}>Forecast</PillTabTrigger>
            <PillTabTrigger value={"insights"}>All Insights</PillTabTrigger>
          </TabsList>

          {/* Tab content */}
          <TabsContent value="overview">
            <div className="grid grid-cols-1 gap-4">
              <div>Chart 1</div>
              <div>Chart 2</div>
              <div>Chart 3</div>
            </div>
          </TabsContent>

          <TabsContent value="climate">
            <div className="grid grid-cols-1 gap-4">
              <div>Chart 1</div>
              <div>Chart 2</div>
              <div>Chart 3</div>
            </div>
          </TabsContent>

          <TabsContent value="forecast">
            <div className="grid grid-cols-1 gap-4">
              <div>Chart 1</div>
              <div>Chart 2</div>
              <div>Chart 3</div>
            </div>
          </TabsContent>

          <TabsContent value="insights">
            <div>AI Insights</div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProvinceDetails;
