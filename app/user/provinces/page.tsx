import Header from "@/components/User/header";
import ProvinceCard from "@/components/User/province_card";

export default function ProvincePage() {
  // Dummy dataset
  const provinces = [
    {
      provinceName: "Albay",
      status: "Moderate",
      cases: 88,
      week: 17,
      topDriver: "Rainfall t-2",
    },
    {
      provinceName: "Camarines Norte",
      status: "Low",
      cases: 25,
      week: 17,
      topDriver: "Temperature drop",
    },
    {
      provinceName: "Camarines Sur",
      status: "High",
      cases: 120,
      week: 17,
      topDriver: "Flooding",
    },
    {
      provinceName: "Catanduanes",
      status: "Moderate",
      cases: 60,
      week: 17,
      topDriver: "Humidity",
    },
    {
      provinceName: "Masbate",
      status: "Low",
      cases: 30,
      week: 17,
      topDriver: "Dry season",
    },
    {
      provinceName: "Sorsogon",
      status: "Moderate",
      cases: 75,
      week: 17,
      topDriver: "Rainfall t-1",
    },
  ];

  return (
    <div>
      <Header
        title={"Provinces"}
        subtitle="Browse all 6 provinces of the Bicol Region."
      ></Header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {provinces.map((province, index) => (
          <ProvinceCard
            key={index}
            provinceName={province.provinceName}
            status={province.status as "Low" | "Moderate" | "High"}
            cases={province.cases}
            week={province.week}
            topDriver={province.topDriver}
          />
        ))}
      </div>
    </div>
  );
}
