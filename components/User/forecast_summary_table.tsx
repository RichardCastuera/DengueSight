import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"; // adjust import path
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { Download } from "lucide-react";

const ForecastSummary = () => {
  const data = [
    {
      province: "Masbate",
      risk: "Moderate",
      cases: 63,
      delta: "↑ 9%",
      rainfall: "121mm",
      humidity: "80%",
      maxTemp: "33°C",
    },
    {
      province: "Camarines Norte",
      risk: "Low",
      cases: 41,
      delta: "↓ 4%",
      rainfall: "98mm",
      humidity: "79%",
      maxTemp: "32°C",
    },
  ];

  return (
    <Card className="text-[var(--accent-violet)]/75">
      <CardHeader className="md:px-8">
        <div className="flex flex-col md:flex-row w-full gap-4 md:items-center md:justify-between">
          <h2 className="text-base font-bold">Forecast Summary</h2>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Download CSV
          </Button>
        </div>
      </CardHeader>
      <CardContent className="md:px-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Province</TableHead>
              <TableHead>Risk</TableHead>
              <TableHead>Forecasted Cases</TableHead>
              <TableHead>Δ Last Week</TableHead>
              <TableHead>Rainfall</TableHead>
              <TableHead>Humidity</TableHead>
              <TableHead>Max Temp</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, idx) => (
              <TableRow key={idx}>
                <TableCell>{row.province}</TableCell>
                <TableCell>{row.risk}</TableCell>
                <TableCell>{row.cases}</TableCell>
                <TableCell
                  className={
                    row.delta.includes("↑") ? "text-red-600" : "text-green-600"
                  }
                >
                  {row.delta}
                </TableCell>
                <TableCell>{row.rainfall}</TableCell>
                <TableCell>{row.humidity}</TableCell>
                <TableCell>{row.maxTemp}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ForecastSummary;
