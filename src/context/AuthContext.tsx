import { createContext, useContext, useState, type ReactNode } from "react";

interface AuthContextType {
  token: string | null;
  login: (code: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("gh_token"),
  );
  const [isLoading, setIsLoading] = useState(false);

  const login = async (code: string) => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/exchange-token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      if (res.status === 404) {
        throw new Error(
          "Exchange token endpoint not found (404). Use `npm run dev` and verify vite.config.ts has middleware or run `npx vercel dev`.",
        );
      }

      if (!res.ok) {
        const errorText = await res.text().catch(() => "");
        throw new Error(
          `Exchange token request failed: ${res.status} ${res.statusText} ${errorText}`,
        );
      }

      const bodyText = await res.text();
      if (!bodyText) throw new Error("Exchange token response is empty");

      const data = JSON.parse(bodyText);
      if (!data?.access_token)
        throw new Error("No access_token returned from exchange-token API");

      localStorage.setItem("gh_token", data.access_token);
      setToken(data.access_token);
    } catch (err) {
      console.error("Login failed:", err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("gh_token");
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext)!;
