# GEEK Music Website - Development Roadmap

## Table of Contents
1. [Overview](#overview)
2. [Tech Stack](#tech-stack)
3. [Core Features](#core-features)
4. [Development Milestones](#development-milestones)
5. [Deployment Steps](#deployment-steps)
6. [Future Enhancements](#future-enhancements)

---

## Overview
The GEEK Music website is a simple, minimalistic, and responsive music streaming platform that aims to provide an easy-to-use experience on both mobile and desktop. The website will allow users to stream music, manage playlists, search for songs, view profiles, and access leaderboard data while keeping the UI clean and straightforward.

## Tech Stack
### Frontend
- **Framework**: React.js
- **Styling**: Tailwind CSS
- **State Management**: Redux
- **Player Component**: `react-player` or HTML5 Audio API
- **Routing**: React Router
- **Localization**: i18next

### Backend
- **Framework**: Node.js with Express.js
- **Authentication**: JWT (JSON Web Tokens) or OAuth2 (Google/Discord)
- **APIs**: Integration with existing music API for song retrieval
- **Language**: JavaScript/TypeScript

### Database
- **Main Database**: PostgreSQL
- **Caching**: Redis

### Deployment
- **Frontend**: Vercel
- **Backend**: AWS Lambda / DigitalOcean
- **CI/CD**: GitHub Actions
- **Domain Management**: Namecheap / Google Domains

### Tools
- **Version Control**: Git & GitHub
- **Testing**: Jest (for frontend), Mocha/Chai (for backend)
- **Design**: Figma (UI/UX Prototyping)

---

## Core Features
### General
- **Minimalistic & Responsive Design** (Simple styles inspired by sites like cobalt.tools and lollipop.racing)
- **Mobile & Desktop Compatibility**
- **Multi-language Support**: Option to change language settings on the homepage.

### Homepage
- Navigation links:
  - Bot Invitation
  - Bot Documentation
  - Commands
  - Streaming Section
  - Donate Page
  - Translation Page
  - ToS & Privacy Policy
- Supported Platforms display (e.g., YouTube, Spotify)
- Language setting option

### Streaming Section
- **Audio Player** with controls:
  - Play/Pause
  - Skip
  - Previous
  - Shuffle
  - Volume Control
  - Title & Thumbnail Display
  - Platform Logo
  - Lyrics View Button
  - Queue View Button
  - Download Button
- **Background Playback** support

### Playlists
- Page to manage user playlists:
  - Playlist information (Title, Author, Number of Songs)
  - Songs list with controls (Play, Download, Remove)
  - Sort options (Platform, Title, Duration)
  - Buttons to Share and Play Playlist
- Filtering options by platform, title, and duration

### User Profiles
- User profile with:
  - Username
  - Time using the service (0d, 0m, 0s format)
  - Leaderboard position
  - List of user’s playlists with play buttons
- Private profile setting option

### Search
- Search bar with filtering capabilities:
  - Filter by Platform
  - Filter by Type (Radio/Songs)
  - Search results with sorting (Platform, Title, Duration)
- Song details with options to add to playlists, like, or download

### Leaderboard
- Global leaderboard sorted by service usage time
- Access to individual user profiles

### ToS & Privacy Policy
- Dedicated pages for ToS and Privacy Policy (migrated from Google Drive)

---

## Development Milestones
### Phase 1: Initial Setup
- [ ] Set up project structure with React.js and Tailwind CSS.
- [ ] Configure project on GitHub with GitHub Actions for CI/CD.
- [ ] Deploy basic static homepage on Vercel.

### Phase 2: Core Features Implementation
- [ ] Implement Navigation for the Homepage.
- [ ] Develop basic Audio Player with controls.
- [ ] Add playlist functionality (add, remove, reorder).
- [ ] Implement Search page with filtering and sorting.

### Phase 3: Backend Setup
- [ ] Set up Node.js server with Express.js.
- [ ] Integrate API for song retrieval.
- [ ] Implement authentication (JWT/OAuth2).
- [ ] Design and set up PostgreSQL database schema.
- [ ] Implement caching with Redis.

### Phase 4: Advanced Features
- [ ] Implement user profile page and privacy settings.
- [ ] Develop the leaderboard with service usage statistics.
- [ ] Implement Localization for multi-language support.
- [ ] Create ToS & Privacy Policy pages.

### Phase 5: Deployment & Testing
- [ ] Deploy backend to AWS Lambda/DigitalOcean.
- [ ] Deploy final version of frontend on Vercel.
- [ ] Implement testing (Jest for frontend, Mocha/Chai for backend).
- [ ] Test on various devices for responsiveness.

---

## Deployment Steps
### Frontend Deployment
1. Set up Vercel account and connect GitHub repository.
2. Deploy the React frontend on Vercel.
3. Configure domain settings (use Namecheap/Google Domains).

### Backend Deployment
1. Create AWS Lambda/DigitalOcean instance.
2. Deploy the Node.js backend.
3. Set up environment variables for API keys, database, and JWT secrets.
4. Configure Redis caching.

### CI/CD Pipeline
1. Set up GitHub Actions for automatic deployment on push.
2. Use workflows to run tests before deploying to staging/production.

---

## Future Enhancements
- **Real-time Chat Integration**: Add a chat feature for users while listening.
- **Collaborative Playlists**: Allow users to create and share collaborative playlists.
- **Dark Mode Toggle**: Option for users to switch between light and dark modes.
- **Premium Features**: Introduce premium features like high-quality streaming, ad-free experience.
- **Advanced Analytics**: Implement analytics for tracking most-played songs and user engagement.

---
