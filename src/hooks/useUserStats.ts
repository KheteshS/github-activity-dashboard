import { useQuery } from "@tanstack/react-query";
import { createGithubClient } from "../lib/githubClient";
import { USER_STATS_QUERY } from "../queries/userStats";
import { useAuth } from "../context/AuthContext";

export function useUserStats(username: string) {
  const { token } = useAuth();

  const now = new Date();
  const yearAgo = new Date(now);
  yearAgo.setFullYear(now.getFullYear() - 1);

  return useQuery({
    queryKey: ["userStats", username],
    queryFn: async () => {
      const client = createGithubClient(token!);
      return client.request(USER_STATS_QUERY, {
        login: username,
        from: yearAgo.toISOString(),
        to: now.toISOString(),
      });
    },
    staleTime: 5 * 60 * 1000,
    enabled: !!token && !!username,
  });
}
