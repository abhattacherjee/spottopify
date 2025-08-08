# Spottopify 🎵

A modern React web application to showcase your top artists and albums on Spotify. Built with React 18, Redux Toolkit, and Bootstrap 5.

## ✨ Features

- 🎨 Clean, responsive UI with Bootstrap 5
- 🎪 Interactive artist and album cards
- 🔍 Search functionality for artists
- 📱 Mobile-friendly design
- 🏗️ Modern React architecture with hooks and Redux Toolkit

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd spottopify
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Technology Stack

- **Frontend**: React 18.2.0
- **State Management**: Redux Toolkit 1.9.7
- **UI Framework**: Bootstrap 5.3.7
- **Icons**: Font Awesome 4.7.0
- **Build Tool**: React Scripts 5.0.1
- **Testing**: Jest, React Testing Library

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── artists.jsx     # Main artists display
│   ├── artistsDeck.jsx # Artist cards layout
│   └── common/         # Common components
├── context/            # React context providers
├── services/           # API and data services
├── store/             # Redux store configuration
│   ├── api.js         # API middleware
│   ├── artists.js     # Artists slice
│   └── middleware/    # Custom middleware
└── App.js             # Main application component
```

## 📝 Available Scripts

### `npm start`

Runs the app in development mode on [http://localhost:3000](http://localhost:3000).

The page will reload when you make edits and show lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder with optimized performance.

### `npm run eject`

⚠️ **One-way operation!** Ejects from Create React App for full configuration control.

## 🔧 Development

### Code Style
- ESLint configuration included
- Prettier formatting recommended
- Modern JavaScript (ES6+)

### State Management
- Redux Toolkit for predictable state updates
- API middleware for async operations
- Normalized state structure

## 🚀 Deployment

The app can be deployed to any static hosting service:

- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Use `npm run build` and deploy the build folder

## 🚨 Security Notes

This project currently has 9 known vulnerabilities in development dependencies (mainly in react-scripts and related packages). These are:
- 6 high severity issues in `nth-check`, `svgo`, and related packages
- 3 moderate severity issues in `postcss` and `webpack-dev-server`

These vulnerabilities are in development-only dependencies and do not affect the production build. The issues will likely be resolved in future versions of react-scripts.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React Documentation](https://reactjs.org/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
