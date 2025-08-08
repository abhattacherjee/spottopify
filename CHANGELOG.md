# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2025-08-08

### 🚀 Major Updates
- **React 18 Migration**: Updated from React 16.13.1 to React 18.3.1
- **Bootstrap 5**: Migrated from Bootstrap 4.x to Bootstrap 5.3.7
- **Modern Dependencies**: Updated all major dependencies to latest stable versions

### ✨ Added
- React 18's `createRoot` API for better performance
- Modern Redux Toolkit patterns (RTK 1.9.7)
- Enhanced package.json with metadata, keywords, and engines
- New npm scripts: `test:coverage`, `lint`, `lint:fix`, `format`, `analyze`
- Prettier configuration for consistent code formatting
- Comprehensive README with emojis, better structure, and modern documentation
- Security vulnerability documentation and transparency

### 🔧 Changed
- **React**: 16.13.1 → 18.3.1
- **React-DOM**: 16.13.1 → 18.3.1
- **Bootstrap**: 4.x → 5.3.7
- **Redux Toolkit**: 1.3.5 → 1.9.7
- **React Redux**: 7.2.0 → 8.1.3
- **Redux**: 4.0.5 → 5.0.1
- **Reselect**: 4.0.0 → 5.1.0
- **React Scripts**: 3.4.1 → 5.0.1
- **Testing Libraries**: Updated to latest compatible versions
- **Moment.js**: 2.25.3 → 2.30.0

### 🐛 Fixed
- ESLint warning for anonymous function export in `configureStore.js`
- React 18 deprecation warnings by implementing `createRoot`
- Modern build pipeline compatibility issues

### 📚 Documentation
- Complete README.md rewrite with modern formatting
- Added project structure documentation
- Added technology stack information
- Added contribution guidelines
- Added deployment instructions
- Added security vulnerability transparency

### 🔒 Security
- Applied security updates where possible
- Documented remaining 9 vulnerabilities (development dependencies only)
- These are primarily in react-scripts and related build tools, not affecting production

### ⚡ Performance
- React 18 concurrent features ready
- Modern Redux Toolkit patterns for better performance
- Updated build tools for faster development experience

### 🛠️ Development Experience
- Added Prettier for consistent code formatting
- Enhanced npm scripts for better developer workflow
- Modern ESLint configuration
- Bundle analyzer script for build optimization

## [0.1.0] - Original Release

### ✨ Initial Features
- React-based Spotify statistics dashboard
- Redux state management
- Bootstrap UI components
- Artist and album display functionality
- Search capabilities
- Responsive design
