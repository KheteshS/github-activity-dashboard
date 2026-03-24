import { gql } from "graphql-request";

export const USER_STATS_QUERY = gql`
  query UserStats($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      name
      avatarUrl
      contributionsCollection(from: $from, to: $to) {
        totalCommitContributions
        totalPullRequestContributions
        totalPullRequestReviewContributions
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              color
            }
          }
        }
      }
      pullRequests(last: 100, states: MERGED) {
        totalCount
        nodes {
          createdAt
          mergedAt
        }
      }
    }
  }
`;
