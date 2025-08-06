# cf-remix [![CI/CD](https://github.com/coder7475/cf-remix/actions/workflows/ci_cd.yml/badge.svg)](https://github.com/coder7475/cf-remix/actions/workflows/ci_cd.yml)

A modern portfolio website built with **Remix** and deployed on **Cloudflare Pages** with automated CI/CD using GitHub Actions. This project showcases a full-stack web application with server-side rendering, edge computing capabilities, and modern development practices.

## ✨ Features

- 🚀 **Edge-First Architecture**: Built for Cloudflare's edge network for lightning-fast global performance
- 🎨 **Modern UI Components**: Crafted with Tailwind CSS, Radix UI primitives, and Lucide React icons
- 📱 **Fully Responsive**: Mobile-first design that works seamlessly across all devices
- ⚡ **Server-Side Rendering**: Remix-powered SSR for optimal SEO and performance
- 🔄 **Automated Deployment**: CI/CD pipeline with GitHub Actions for seamless updates
- 🎯 **TypeScript**: Full type safety throughout the application
- 🎭 **Interactive Components**: Toast notifications and smooth animations
- 📊 **Portfolio Sections**: About, Experience, Projects, Skills, Blog, and Contact pages

## 🛠️ Tech Stack

### Frontend
- **[Remix](https://remix.run/)** - Full-stack web framework
- **[React 18](https://react.dev/)** - UI library with latest features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible UI primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon pack
- **[Class Variance Authority](https://cva.style/)** - Class utility library

### Infrastructure & Tooling
- **[Cloudflare Pages](https://pages.cloudflare.com/)** - Edge deployment platform
- **[Wrangler](https://developers.cloudflare.com/workers/wrangler/)** - Cloudflare developer platform CLI
- **[Vite](https://vitejs.dev/)** - Next generation frontend build tool
- **[pnpm](https://pnpm.io/)** - Fast, disk space efficient package manager
- **[ESLint](https://eslint.org/)** - Code linting and formatting
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD automation

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** ≥ 20.0.0
- **pnpm** ≥ 9.0.0 (recommended) or npm/yarn
- **Git** for version control
- **Cloudflare Account** for deployment

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/coder7475/cf-remix.git
cd cf-remix
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Start Development Server

```bash
pnpm run dev
```

The application will be available at `http://localhost:5173`

## 🔧 Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm run dev` | Start development server with hot reload |
| `pnpm run build` | Build the application for production |
| `pnpm run start` | Preview the built application locally |
| `pnpm run preview` | Build and preview the application |
| `pnpm run deploy` | Build and deploy to Cloudflare Pages |
| `pnpm run typecheck` | Run TypeScript type checking |
| `pnpm run typegen` | Generate Cloudflare Workers types |
| `pnpm run lint` | Run ESLint for code quality |
| `pnpm run cf-typegen` | Alternative command for type generation |

### Development Workflow

1. **Local Development**: Use `pnpm run dev` for development with hot module replacement
2. **Type Checking**: Run `pnpm run typecheck` to ensure type safety
3. **Linting**: Use `pnpm run lint` to maintain code quality
4. **Testing Locally**: Use `pnpm run start` to test the built application

### Working with Wrangler

To run the application using Wrangler (Cloudflare's development environment):

```bash
pnpm run build
pnpm run start
```

This simulates the Cloudflare Pages environment locally, including edge runtime features.

## 🏗️ Project Structure

```
cf-remix/
├── app/                        # Remix application code
│   ├── components/            # Reusable React components
│   │   ├── ui/               # UI primitives and shared components
│   │   ├── AboutMe.tsx       # About section component
│   │   ├── Banner.tsx        # Hero banner component
│   │   ├── Blog.tsx          # Blog section component
│   │   ├── Experience.tsx    # Experience timeline component
│   │   ├── Footer.tsx        # Site footer component
│   │   ├── GetInTouch.tsx    # Contact form component
│   │   ├── Navbar.tsx        # Navigation component
│   │   ├── Projects.tsx      # Projects showcase component
│   │   └── Skills.tsx        # Skills display component
│   ├── hooks/                # Custom React hooks
│   ├── libs/                 # Utility functions and helpers
│   ├── routes/               # Remix route components
│   │   ├── _index.tsx        # Home page route
│   │   ├── about.tsx         # About page route
│   │   ├── blog.tsx          # Blog page route
│   │   ├── contact.tsx       # Contact page route
│   │   ├── experiences.tsx   # Experience page route
│   │   ├── projects.tsx      # Projects page route
│   │   └── skills.tsx        # Skills page route
│   ├── entry.client.tsx      # Client-side entry point
│   ├── entry.server.tsx      # Server-side entry point
│   ├── root.tsx              # Root application component
│   └── tailwind.css          # Global styles and Tailwind imports
├── build/                     # Built application (generated)
├── public/                    # Static assets
├── .github/                   # GitHub Actions workflows
│   └── workflows/
│       └── ci_cd.yml         # CI/CD pipeline configuration
├── package.json              # Project dependencies and scripts
├── wrangler.toml            # Cloudflare Workers configuration
├── vite.config.ts           # Vite build configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## 🎨 Styling & UI

### Tailwind CSS Configuration

The project uses a custom Tailwind CSS setup with:

- **Custom Design System**: Consistent spacing, colors, and typography
- **Component Variants**: Using Class Variance Authority for component styling
- **Responsive Design**: Mobile-first approach with responsive utilities
- **Animations**: Smooth transitions and micro-interactions
- **Dark Mode Support**: Built-in dark mode capabilities

### Component Architecture

- **Atomic Design**: Components are organized in a scalable hierarchy
- **Accessibility First**: All components follow WCAG guidelines
- **Reusability**: Shared components with flexible prop interfaces
- **Type Safety**: Full TypeScript integration for component props

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory for local development:

```env
# Add your environment variables here
# CLOUDFLARE_API_TOKEN=your_api_token
# CLOUDFLARE_ACCOUNT_ID=your_account_id
```

### Wrangler Configuration

The `wrangler.toml` file configures Cloudflare Workers settings:

```toml
name = "cf-remix"
compatibility_date = "2024-02-20"

[site]
bucket = "./build/client"
```

### Vite Configuration

Custom Vite setup with:

- **Remix Integration**: Full-stack development with file-based routing
- **TypeScript Paths**: Absolute imports configuration
- **Cloudflare Dev Proxy**: Local development with edge runtime
- **Future Flags**: Latest Remix features enabled

## 📦 Type Generation

Generate TypeScript types for your Cloudflare bindings:

```bash
pnpm run typegen
```

This command:

- Reads your `wrangler.toml` configuration
- Generates TypeScript definitions for Workers APIs
- Updates type definitions for environment bindings
- Ensures type safety across your application

**Note**: Rerun typegen whenever you modify `wrangler.toml` or add new Cloudflare bindings.

## 🚢 Deployment

### Automatic Deployment (Recommended)

The project includes a GitHub Actions workflow that automatically:

1. **Builds** the application on every push to main
2. **Tests** code quality with linting and type checking
3. **Deploys** to Cloudflare Pages
4. **Notifies** of deployment status

### Manual Deployment

For manual deployments:

```bash
# Build the application
pnpm run build

# Deploy to Cloudflare Pages
pnpm run deploy
```

### Deployment Prerequisites

1. **Cloudflare Account**: Set up a Cloudflare account
2. **Wrangler Authentication**: Login with `wrangler login`
3. **GitHub Secrets**: Configure deployment secrets in GitHub repository
4. **Domain Configuration**: Set up custom domain (optional)

## 🔍 Performance & Optimization

### Edge Computing Benefits

- **Global CDN**: Content delivered from 200+ edge locations
- **Zero Cold Starts**: Instant response times worldwide
- **Automatic Scaling**: Handles traffic spikes seamlessly
- **Built-in Caching**: Intelligent edge caching strategies

### Bundle Optimization

- **Tree Shaking**: Eliminates unused code automatically
- **Code Splitting**: Lazy loading for optimal performance
- **Asset Optimization**: Automatic image and asset optimization
- **Compression**: Gzip and Brotli compression enabled

## 🧪 Testing & Quality Assurance

### Code Quality

- **ESLint**: Comprehensive linting rules for JavaScript/TypeScript
- **TypeScript**: Compile-time error checking and IntelliSense
- **Prettier Integration**: Consistent code formatting
- **Import Sorting**: Organized import statements

### CI/CD Pipeline

The GitHub Actions workflow ensures:

- **Dependency Installation**: Cached for faster builds
- **Type Checking**: Validates TypeScript across the project
- **Linting**: Enforces code quality standards
- **Build Verification**: Ensures successful production builds
- **Automated Deployment**: Seamless deployment on success

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add some amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines

- Follow the existing code style and conventions
- Write meaningful commit messages
- Add appropriate TypeScript types for new features
- Test your changes locally before submitting
- Update documentation for significant changes

## 📚 Learning Resources

- **[Remix Documentation](https://remix.run/docs)** - Learn Remix framework
- **[Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)** - Deployment platform guide
- **[Tailwind CSS Guide](https://tailwindcss.com/docs)** - Styling documentation
- **[Vite Documentation](https://vitejs.dev/guide/)** - Build tool configuration
- **[TypeScript Handbook](https://www.typescriptlang.org/docs/)** - Type system guide

## 🐛 Troubleshooting

### Common Issues

**Development server not starting:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm run dev
```

**Type errors after updating dependencies:**
```bash
# Regenerate types
pnpm run typegen
pnpm run typecheck
```

**Build failures:**
```bash
# Check for TypeScript errors
pnpm run typecheck

# Check for linting issues
pnpm run lint
```

**Deployment issues:**
```bash
# Login to Wrangler
wrangler login

# Verify configuration
wrangler pages project list
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[Remix Team](https://remix.run/)** for the amazing full-stack framework
- **[Cloudflare](https://cloudflare.com/)** for the edge computing platform
- **[Tailwind CSS](https://tailwindcss.com/)** for the utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** for accessible UI primitives
- **Open Source Community** for the excellent tools and libraries
