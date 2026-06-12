import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, BarChart, Bar } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/assets/components/ui/chart";

interface Props {
  totalData: any;
  topPagesData: any;
  topRefsData: any;
}

export default function AnalyticsCharts({ totalData, topPagesData, topRefsData }: Props) {
  const lineChartData: any[] = [];
  const today = new Date();
  const statsMap = new Map();

  totalData?.stats?.forEach((stat: any) => {
    // GoatCounter returns "YYYY-MM-DD", parse it to local date string
    // Assuming stat.day is like "2024-05-10"
    const dateStr = new Date(stat.day).toLocaleDateString("en-US", { month: "short", day: "numeric" });
    statsMap.set(dateStr, stat.daily);
  });

  for (let i = 29; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const dateStr = d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    lineChartData.push({
      date: dateStr,
      visitors: statsMap.get(dateStr) || 0,
    });
  }

  const pagesData = topPagesData?.hits?.map((hit: any) => ({
    path: hit.path.replace("/undefined","").trim() == "" ? "/" : hit.path.replace("/undefined",""),
    visitors: hit.count,
  })) || [];

  const refsData = topRefsData?.stats?.map((stat: any) => ({
    source: stat.name || "(direct)",
    visitors: stat.count,
  })) || [];

  return (
    <div className="flex flex-col gap-12 w-full">
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="font-serif font-medium text-[21px] text-[hsl(var(--theme-text))] tracking-tight">Visitors</h2>
          <p className="text-[16px] text-[hsl(var(--theme-text-muted))] mt-1 leading-relaxed">How many people visited</p>
        </div>
        <ChartContainer
          config={{
            visitors: {
              label: "Visitors",
              color: "hsl(var(--theme-accent))",
            },
          }}
          className="h-[250px] w-full"
        >
          <LineChart data={lineChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--hairline)" />
            <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} minTickGap={32} className="font-mono text-[11px] fill-[hsl(var(--theme-text-muted))]" />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} className="font-mono text-[11px] fill-[hsl(var(--theme-text-muted))]" />
            <ChartTooltip content={<ChartTooltipContent className="bg-[var(--paper)] border-[var(--hairline)]" />} />
            <Line
              type="monotone"
              dataKey="visitors"
              stroke="var(--color-visitors)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="font-serif font-medium text-[18.5px] text-[hsl(var(--theme-text))] tracking-tight">Top pages</h2>
            <p className="text-[15px] text-[hsl(var(--theme-text-muted))] mt-1 leading-relaxed">What people look at</p>
          </div>
          <ChartContainer
            config={{
              visitors: {
                label: "Visitors",
                color: "hsl(var(--theme-accent))",
              },
            }}
            className="h-[300px] w-full"
          >
            <BarChart data={pagesData} layout="vertical" margin={{ top: 0, right: 0, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="var(--hairline)" />
              <YAxis dataKey="path" type="category" tickLine={false} axisLine={false} width={120} tickFormatter={(value) => value.length > 15 ? value.substring(0, 15) + '...' : value} className="font-mono text-[11px] fill-[hsl(var(--theme-text-muted))]" />
              <XAxis type="number" tickLine={false} axisLine={false} hide />
              <ChartTooltip cursor={false} content={<ChartTooltipContent className="bg-[var(--paper)] border-[var(--hairline)]" />} />
              <Bar dataKey="visitors" fill="var(--color-visitors)" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ChartContainer>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <h2 className="font-serif font-medium text-[18.5px] text-[hsl(var(--theme-text))] tracking-tight">Top referral sources</h2>
            <p className="text-[15px] text-[hsl(var(--theme-text-muted))] mt-1 leading-relaxed">Where people come from</p>
          </div>
          <ChartContainer
            config={{
              visitors: {
                label: "Visitors",
                color: "hsl(var(--theme-accent))",
              },
            }}
            className="h-[300px] w-full"
          >
            <BarChart data={refsData} layout="vertical" margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="var(--hairline)" />
              <YAxis dataKey="source" type="category" tickLine={false} axisLine={false} width={100} tickFormatter={(value) => value.length > 12 ? value.substring(0, 12) + '...' : value} className="font-mono text-[11px] fill-[hsl(var(--theme-text-muted))]" />
              <XAxis type="number" tickLine={false} axisLine={false} hide />
              <ChartTooltip cursor={false} content={<ChartTooltipContent className="bg-[var(--paper)] border-[var(--hairline)]" />} />
              <Bar dataKey="visitors" fill="var(--color-visitors)" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ChartContainer>
        </div>
      </div>
    </div>
  );
}
