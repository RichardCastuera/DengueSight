import React from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";

interface ProvinceCardProps {
  provinceName: string;
  status: "Low" | "Moderate" | "High";
  cases: number;
  week: number;
  topDriver: string;
}

const ProvinceCard: React.FC<ProvinceCardProps> = ({
  provinceName,
  status,
  cases,
  week,
  topDriver,
}) => {
  const statusClasses: Record<ProvinceCardProps["status"], string> = {
    Low: "bg-[var(--accent-green)]/20 text-[var(--accent-green)] border border-[var(--accent-green)]",
    Moderate:
      "bg-[var(--accent-orange)]/20 text-[var(--accent-orange)] border border-[var(--accent-orange)]",
    High: "bg-[var(--accent-red)]/20 text-[var(--accent-red)] border border-[var(--accent-red)]",
  };

  return (
    <Link href={`/user/provinces/${encodeURIComponent(provinceName)}`}>
      <Card className="cursor-pointer rounded-md shadow-md text-[var(--accent-violet)] hover:shadow-lg transition">
        <CardHeader className="flex items-end justify-between md:px-6">
          <h2 className="text-base font-bold">{provinceName}</h2>
          <Badge className={statusClasses[status]}>{status}</Badge>
        </CardHeader>
        <CardContent className="md:px-6 space-y-2">
          <div>
            <p className="text-3xl font-bold">{cases}</p>
            <p className="text-sm">EST. CASES · WEEK {week}</p>
          </div>
          <p className="text-xs text-gray-600">Top driver: {topDriver}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProvinceCard;
