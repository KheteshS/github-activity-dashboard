interface Day {
  date: string;
  contributionCount: number;
  color: string;
}

interface Props {
  weeks: { contributionDays: Day[] }[];
  total: number;
}

export function ContributionHeatmap({ weeks, total }: Props) {
  return (
    <div className="overflow-x-auto p-4 bg-white rounded-xl shadow">
      <h3 className="font-semibold text-gray-700 mb-3">
        {total} contributions in the last year
      </h3>
      <div className="flex gap-1">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-1">
            {week.contributionDays.map((day) => (
              <div
                key={day.date}
                title={`${day.date}: ${day.contributionCount}`}
                className="w-3 h-3 rounded-sm"
                style={{ backgroundColor: day.color }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
