# GitHub Activity Dashboard

A modern, responsive web application that visualizes GitHub user activity and contributions. Built with React, TypeScript, and Vite, featuring GitHub OAuth authentication, interactive charts, and a sleek dark theme.

<!-- ![Dashboard Preview](https://via.placeholder.com/800x400/1e1b4b/ffffff?text=GitHub+Activity+Dashboard) -->

## ✨ Features

- **GitHub OAuth Authentication**: Secure login with GitHub to access user data
- **User Profile Display**: Shows avatar, name, and basic info
- **Contribution Heatmap**: Interactive calendar-style heatmap of contributions
- **Pull Request Analytics**: Charts showing PR merge status and review contributions
- **User Search with Autocomplete**: Search and select GitHub users with real-time suggestions
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Dark Theme**: Modern UI with gradient backgrounds and glassmorphism effects
- **Real-time Data**: Fetches live data from GitHub GraphQL API

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS, Custom CSS
- **State Management**: React Context, TanStack Query
- **Charts**: Recharts
- **Authentication**: GitHub OAuth 2.0
- **Deployment**: Vercel
- **API**: GitHub REST & GraphQL APIs
- **Build Tools**: Vite, ESLint, TypeScript

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- GitHub OAuth App (see setup below)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/github-activity-dashboard.git
   cd github-activity-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:
   ```env
   # GitHub OAuth App credentials
   VITE_GITHUB_CLIENT_ID=your_github_client_id
   VITE_GITHUB_CLIENT_SECRET=your_github_client_secret
   VITE_GITHUB_REDIRECT_URI=http://localhost:5173/callback

   # For API routes (server-side)
   GITHUB_CLIENT_ID=your_github_client_id
   GITHUB_CLIENT_SECRET=your_github_client_secret
   ```

4. **Create GitHub OAuth App**

   - Go to [GitHub Developer Settings](https://github.com/settings/developers)
   - Click "New OAuth App"
   - Fill in:
     - **Application name**: GitHub Activity Dashboard
     - **Homepage URL**: `http://localhost:5173` (for local dev)
     - **Authorization callback URL**: `http://localhost:5173/callback`
   - Copy the Client ID and Client Secret to your `.env` file

5. **Start the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📖 Usage

1. **Login**: Click "Login with GitHub" to authenticate
2. **Dashboard**: After login, you'll be redirected to the dashboard
3. **Search Users**: Use the search bar to find and select GitHub users
4. **View Stats**: See contribution heatmaps, PR charts, and user statistics
5. **Explore**: Click on different chart elements for more details

## 🏗️ Project Structure

```
github-activity-dashboard/
├── public/                 # Static assets
├── src/
│   ├── api/               # API routes (Vercel serverless functions)
│   │   └── exchange-token.ts
│   ├── components/        # Reusable React components
│   │   ├── ContributionHeatmap.tsx
│   │   └── PRChart.tsx
│   ├── context/           # React Context providers
│   │   └── AuthContext.tsx
│   ├── hooks/             # Custom React hooks
│   │   └── useUserStats.ts
│   ├── lib/               # Utility functions
│   │   └── githubClient.ts
│   ├── pages/             # Page components
│   │   ├── Callback.tsx
│   │   └── Dashboard.tsx
│   ├── queries/           # GraphQL queries
│   │   └── userStats.ts
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # App entry point
│   └── index.css          # Global styles
├── tests/                 # Test files
├── .env                   # Environment variables (not committed)
├── package.json
├── tsconfig.json
├── vite.config.ts
├── vercel.json            # Vercel deployment config
└── README.md
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Set environment variables in Vercel**
   - Go to your Vercel project dashboard
   - Navigate to Settings > Environment Variables
   - Add:
     - `GITHUB_CLIENT_ID`
     - `GITHUB_CLIENT_SECRET`
     - `VITE_GITHUB_CLIENT_ID` (if needed for client-side)

3. **Deploy**
   ```bash
   vercel --prod
   ```

### Other Platforms

The app can be deployed to any static hosting service that supports SPA routing:

- **Netlify**: Add `_redirects` file with `/* /index.html 200`
- **GitHub Pages**: Use `gh-pages` package for deployment
- **AWS S3 + CloudFront**: Configure for SPA routing

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality

- **ESLint**: Configured with TypeScript and React rules
- **TypeScript**: Strict type checking enabled
- **Prettier**: Code formatting (via ESLint)

### Testing

Run tests with:
```bash
npm run test
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

## 📄 API Reference

### GitHub OAuth Flow

1. User clicks "Login with GitHub"
2. Redirected to GitHub OAuth with client_id and scopes
3. GitHub redirects back with authorization code
4. Code exchanged for access token via `/api/exchange-token`
5. Token stored in localStorage for API calls

### Data Sources

- **User Profile**: GitHub GraphQL API
- **Contributions**: GitHub GraphQL API (contributionCalendar)
- **Pull Requests**: GitHub GraphQL API
- **User Search**: GitHub REST API

## 🔒 Security

- OAuth tokens are stored client-side in localStorage
- No sensitive data is stored server-side
- All API calls include proper authorization headers
- Environment variables are used for secrets

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [GitHub API](https://docs.github.com/en/rest) for providing user data
- [Recharts](https://recharts.org/) for charting components
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Vite](https://vitejs.dev/) for fast development experience

## 📞 Support

If you have any questions or issues:

- Open an issue on GitHub
- Check the [GitHub API documentation](https://docs.github.com/en/rest)
- Review the [Vite documentation](https://vitejs.dev/)

---

Made with ❤️ and lots of ☕
