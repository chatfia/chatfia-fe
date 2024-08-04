"use client";

import { useUserWinRates } from "@/app/apis/hooks/useUserWinRates";
import { useWinRateStore } from "@/app/stores/useWinRateStore";
import { useEffect } from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  winRate: {
    label: "승률",
    color: "#F87171",
  },
  usageRate: {
    label: "사용률",
    color: "#34D399",
  },
} satisfies ChartConfig;

export default function JobWinRates() {
  const setWinRate = useWinRateStore((state) => state.setWinRate);
  const {
    wins,
    losses,
    mafiaWins,
    mafiaLosses,
    policeWins,
    policeLosses,
    doctorWins,
    doctorLosses,
    citizenWins,
    citizenLosses,
  } = useWinRateStore((state) => state.winRate);
  const { data, isSuccess } = useUserWinRates();

  useEffect(() => {
    if (isSuccess && data) {
      setWinRate({
        wins: data.wins,
        losses: data.losses,
        mafiaWins: data.mafiaWins,
        mafiaLosses: data.mafiaLosses,
        policeWins: data.policeWins,
        policeLosses: data.policeLosses,
        doctorWins: data.doctorWins,
        doctorLosses: data.doctorLosses,
        citizenWins: data.citizenWins,
        citizenLosses: data.citizenLosses,
      });
    }
  }, [isSuccess, data, setWinRate]);

  // 승률 계산 (승률 = 승 / (승 + 패) * 100)
  const winRate =
    wins + losses > 0 ? ((wins / (wins + losses)) * 100).toFixed(2) : "0";

  // 각 직업의 사용 횟수 계산
  const mafiaUsage = mafiaWins + mafiaLosses;
  const policeUsage = policeWins + policeLosses;
  const doctorUsage = doctorWins + doctorLosses;
  const citizenUsage = citizenWins + citizenLosses;

  // 동적으로 그래프 데이터를 설정
  const chartData = [
    { job: "마피아", winRate: mafiaWins, usageRate: mafiaUsage },
    { job: "경찰", winRate: policeWins, usageRate: policeUsage },
    { job: "의사", winRate: doctorWins, usageRate: doctorUsage },
    { job: "시민", winRate: citizenWins, usageRate: citizenUsage },
  ];

  return (
    <>
      <p className="animate-colorChangeRed pt-10 text-xl font-semibold">
        전적 : {wins}승 {losses}패 (승률 : {winRate}%)
      </p>
      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full p-28"
      >
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
    </>
  );
}
