import Banner from "@/components/User/banner";
import ForecastSummary from "@/components/User/forecast_summary_table";
import ProvinceSummaryCard from "@/components/User/province_summary_card";
import RiskMap from "@/components/User/risk_map";

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
      <ForecastSummary />
    </div>
  );
};

export default Overview;
