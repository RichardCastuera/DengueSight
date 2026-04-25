import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";

interface ProvinceSummaryCardProps {
  provinceName: string;
  children?: React.ReactNode;
}

// Define props with destructuring
const ProvinceSummaryCard = ({
  provinceName,
  children,
}: ProvinceSummaryCardProps) => {
  return (
    <div>
      <Card className="text-[var(--accent-red)]/75">
        <CardHeader className="md:px-8">
          <h2 className="text-base font-bold">{provinceName}</h2>
        </CardHeader>
        <CardContent className="md:px-8">{children}</CardContent>
      </Card>
    </div>
  );
};

export default ProvinceSummaryCard;
