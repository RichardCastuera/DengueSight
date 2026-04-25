import ProvinceDetails from "@/components/User/province_details";
import { use } from "react";

export default function ProvincePage({
  params,
}: {
  params: Promise<{ provinceName: string }>;
}) {
  const { provinceName } = use(params);
  const decodedProvinceName = decodeURIComponent(provinceName); // ✅ fix spaces
  return <ProvinceDetails provinceName={decodedProvinceName} />;
}
