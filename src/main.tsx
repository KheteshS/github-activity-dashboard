import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthProvider } from './context/AuthContext.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Callback } from './pages/Callback.tsx'
import { Dashboard } from './pages/Dashboard.tsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <div className="min-h-screen flex items-center justify-center">
                <a
                  href={`https://github.com/login/oauth/authorize?client_id=${import.meta.env.VITE_GITHUB_CLIENT_ID}&scope=read:user`}
                  className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700"
                >
                  Login with GitHub
                </a>
              </div>
            } />
            <Route path="/callback" element={<Callback />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
)
