# 🎵 Music Player

A beautiful, modern web-based music player with a sleek glassmorphism design and smooth animations.

# ✨ Features

- **🎨 Modern UI**: Glassmorphism design with gradient backgrounds and smooth animations
- **🎵 Audio Playback**: Full audio controls with play, pause, next, previous, and shuffle
- **📱 Responsive Design**: Works perfectly on desktop and mobile devices
- **🎚️ Volume Control**: Interactive volume slider with visual feedback
- **📊 Progress Tracking**: Real-time progress bar with click-to-seek functionality
- **🔄 Playlist Management**: Built-in playlist with song selection
- **🎼 Album Art**: Rotating vinyl-style album covers with visual effects
- **⏯️ Autoplay**: Automatic progression to next song
- **🎪 Visual Effects**: Animated background particles and hover effects

## 🎵 Included Songs

- **O Pilla Shubhanalla** - Sardaar Gabbar Singh (4:25)
- **Heat Waves** - Glass Animals (3:58)

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software installation required

### Installation

1. **Clone or Download** the project files
2. **Open** `index.html` in your web browser
3. **Enjoy** your music! 🎉

### File Structure

```
Javascript music player/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
├── images/             # Album cover images
│   ├── heat-waves-cover.png
│   └── o-pilla-cover.png
└── music/              # Audio files
    ├── Heat Waves - (Raag.Fm).mp3
    └── O Pilla Shubhanalla - SenSongsMp3.Co.mp3
```

## 🎮 How to Use

### Basic Controls
- **Play/Pause**: Click the center play button
- **Next/Previous**: Use the arrow buttons to navigate songs
- **Shuffle**: Click the shuffle button to randomize playback
- **Repeat**: Toggle repeat mode for continuous playback

### Advanced Features
- **Progress Bar**: Click anywhere on the progress bar to jump to that time
- **Volume Control**: Drag the volume slider to adjust audio level
- **Playlist**: Click any song in the playlist to play it directly
- **Autoplay**: Toggle the autoplay switch to enable/disable automatic progression

### Visual Features
- **Album Art**: Rotates when playing, shows vinyl record effect
- **Hover Effects**: Interactive buttons with smooth animations
- **Background**: Animated gradient with floating particles

## 🛠️ Customization

### Adding New Songs

1. Add your audio file to the `music/` folder
2. Add the album cover image to the `images/` folder
3. Update the `playlist` array in `script.js`:

```javascript
const playlist = [
  {
    title: "Your Song Title",
    artist: "Artist Name",
    src: "/music/your-song.mp3",
    cover: "/images/your-cover.png",
    duration: "3:45",
  },
  // ... existing songs
]
```

### Styling Changes

- Modify `styles.css` to change colors, fonts, and animations
- The design uses CSS custom properties for easy theming
- Glassmorphism effects can be adjusted in the `.music-player` class

## 🌟 Technical Details

- **Pure JavaScript**: No frameworks or libraries required
- **HTML5 Audio API**: Native browser audio support
- **CSS3 Animations**: Smooth transitions and effects
- **Font Awesome Icons**: Beautiful icon set for controls
- **Google Fonts**: Inter font family for modern typography

## 📱 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ Internet Explorer (not supported)

## 🎨 Design Features

- **Glassmorphism**: Frosted glass effect with backdrop blur
- **Gradient Backgrounds**: Beautiful color transitions
- **Smooth Animations**: CSS transitions and keyframe animations
- **Responsive Layout**: Adapts to different screen sizes
- **Dark Theme**: Easy on the eyes with high contrast

## 🤝 Contributing

Feel free to fork this project and add your own features! Some ideas:
- Add more songs to the playlist
- Implement a search function
- Add equalizer visualization
- Create different themes
- Add keyboard shortcuts

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Enjoy your music! 🎵✨** 
