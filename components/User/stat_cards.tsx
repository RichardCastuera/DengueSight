import React from "react";
import { Card, CardContent } from "../ui/card";

interface StatCardProps {
  title: string;
  children?: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, children }) => {
  return (
    <div>
      <Card className="cursor-pointer rounded-md shadow-md text-[var(--accent-violet)] hover:shadow-lg transition">
        <CardContent className="md:px-6 space-y-2">
          <p className="text-sm uppercase">{title}</p>
          {children}
        </CardContent>
      </Card>
    </div>
  );
};

export default StatCard;
