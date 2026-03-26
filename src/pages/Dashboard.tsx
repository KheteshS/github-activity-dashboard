import { useState } from "react";
import { useUserStats } from "../hooks/useUserStats";
import { ContributionHeatmap } from "../components/ContributionHeatmap";
import { PRChart } from "../components/PRChart";

export function Dashboard() {
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");
  const { data, isLoading, isError } = useUserStats(username);
  const user = (data as any)?.user;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && setUsername(input)}
          placeholder="Enter GitHub username"
          className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={() => setUsername(input)}
          className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700"
        >
          Search
        </button>
      </div>

      {isLoading && (
        <p className="text-center text-gray-500 animate-pulse">Loading...</p>
      )}
      {isError && <p className="text-center text-red-500">User not found.</p>}

      {user && (
        <div className="space-y-4">
          {/* Profile */}
          <div className="flex items-center gap-4 bg-white rounded-xl shadow p-4">
            <img
              src={user.avatarUrl}
              className="w-16 h-16 rounded-full"
              alt={user.name}
            />
            <div>
              <h2 className="text-xl font-bold">{user.name}</h2>
              <p className="text-gray-500 text-sm">@{username}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {[
              [
                "Commits",
                user.contributionsCollection.totalCommitContributions,
              ],
              ["PRs Merged", user.pullRequests.totalCount],
              [
                "PR Reviews",
                user.contributionsCollection
                  .totalPullRequestReviewContributions,
              ],
            ].map(([label, val]) => (
              <div
                key={label as string}
                className="bg-white rounded-xl shadow p-4 text-center"
              >
                <p className="text-2xl font-bold text-indigo-600">{val}</p>
                <p className="text-sm text-gray-500 mt-1">{label}</p>
              </div>
            ))}
          </div>

          <ContributionHeatmap
            weeks={user.contributionsCollection.contributionCalendar.weeks}
            total={
              user.contributionsCollection.contributionCalendar
                .totalContributions
            }
          />
          <PRChart prs={user.pullRequests.nodes} />
        </div>
      )}
    </div>
  );
}
