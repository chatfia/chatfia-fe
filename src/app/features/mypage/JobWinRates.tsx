"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { job: "마피아", winRate: 186, usageRate: 80 },
  { job: "경찰", winRate: 305, usageRate: 200 },
  { job: "의사", winRate: 237, usageRate: 120 },
  { job: "시민", winRate: 73, usageRate: 190 },
];

const chartConfig = {
  winRate: {
    label: "승률",
    color: "#047857",
  },
  usageRate: {
    label: "사용률",
    color: "#34D399",
  },
} satisfies ChartConfig;

export default function JobWinRates() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full p-28">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="job"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="winRate" fill="var(--color-winRate)" radius={4} />
        <Bar dataKey="usageRate" fill="var(--color-usageRate)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
