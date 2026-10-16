# NetflixGemini🎬 
A Netflix-inspired movie streaming UI built with React, Redux Toolkit, Tailwind CSS, and Firebase, featuring AI-powered movie search using Gemini.

🌐 Visit NetflixGEMINI Live


 ## Features
🔐 User authentication with Firebase
🎥 Browse movies and watch trailers
🤖 AI-powered movie recommendations using Gemini API
🔍 Search movies using natural language
🎨 Responsive Netflix-inspired UI
⚡ State management with Redux Toolkit


## Tech Stack
React.js
Redux Toolkit
Tailwind CSS
Firebase Authentication & Hosting
Gemini API
TMDB API


## Setup
- create React app
- configured TailwindCSS

## Features
- Login/Signup Page
   - Sign In/Sign Up Form
   - Redirect to Browse Page
  
- Browse(After authentication)
  - Header
  - Main Movie
    - Trailer in BG
    - Title and Description
    - Movie Suggestions
      - Movie List

- NetfliXGPT
  - SearchBar
  - Movie Suggestions

## Modules
- Header
- routing
- Login Form
- Sign Up, Sign In Form
- Form validation
- useRef Hook
- Firebase setup
- Deployed to Production
- Create User Account
- implement sign in User
- creted redux store with user slice
- implemented sign out
- update profile
- fetch from pmdb movies
- bug fixed - only redirect to browse if user logged in
- unsubsribed to  onauthstatechange callback
- kept urls in constant file
- in React.strictMode => two api calls bcz of react checks inconsistency betn calls (only in dev mode)
- registered tmdb api and craete app and get accesss token
- Make get data from tmdb now playing movies
- custom hook for Now Playing Movies
- craeted movie slice
- updated store with movies data
- main container and secondary container
- fetch data for trailer video
- updated store with trailer video data
- embedded yt video and made autoplay and mute
- secondary conatiner
- movieCards list for now playing movies
- scroll movies
- created hook for popular movies
- created custom hook for TopRatedMovies
- added movie list of top rated movies to main container
- created custom hook for UpcomingMovies
- added movie list of upcoming movies to main container
- Search feature
- multi-language feature
- displayed search movie results
- MovieList reused for gemini movie results
- memoization => set limit on api calls
- secured keys using env file
- made app responsive 
