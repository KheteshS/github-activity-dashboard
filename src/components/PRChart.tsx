import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface PR {
  createdAt: string;
  mergedAt: string | null;
}

export function PRChart({ prs }: { prs: PR[] }) {
  const data = prs
    .filter((p) => p.mergedAt)
    .map((p) => ({
      date: new Date(p.createdAt).toLocaleDateString(),
      hours: Math.round(
        (new Date(p.mergedAt!).getTime() - new Date(p.createdAt).getTime()) /
          36e5,
      ),
    }));

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="font-semibold text-gray-700 mb-3">
        PR Turnaround Time (hours)
      </h3>
      <ResponsiveContainer width="100%" height={180}>
        <LineChart data={data}>
          <XAxis dataKey="date" hide />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="hours"
            stroke="#6366f1"
            dot={false}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
