import { DynamicBreadcrumb } from "@/components/User/breadcrumb";
import ProvinceDetails from "@/components/User/province_details";
import { use } from "react";

export default function ProvincePage({
  params,
}: {
  params: Promise<{ provinceName: string }>;
}) {
  const { provinceName } = use(params);
  const decodedProvinceName = decodeURIComponent(provinceName);
  return (
    <div>
      <DynamicBreadcrumb></DynamicBreadcrumb>
      <ProvinceDetails provinceName={decodedProvinceName} />
    </div>
  );
}
