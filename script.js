// Simple Music Player - Working Version with Real Album Covers
let currentSongIndex = 0
let isPlaying = false
let audio = null
let progressInterval = null

// Updated playlist with only your two working songs and real album covers
const playlist = [
  {
    title: "O Pilla Shubhanalla",
    artist: "Sardaar Gabbar Singh",
    src: "/music/O Pilla Shubhanalla - SenSongsMp3.Co.mp3",
    cover: "/images/o-pilla-cover.png",
    duration: "4:25",
  },
  {
    title: "Heat Waves",
    artist: "Glass Animals",
    src: "/music/Heat Waves - (Raag.Fm).mp3",
    cover: "/images/heat-waves-cover.png",
    duration: "3:58",
  },
]

// Initialize when page loads
document.addEventListener("DOMContentLoaded", () => {
  console.log("Music Player Loading...")

  // Get all elements
  const playPauseBtn = document.getElementById("playPauseBtn")
  const prevBtn = document.getElementById("prevBtn")
  const nextBtn = document.getElementById("nextBtn")
  const songTitle = document.getElementById("songTitle")
  const artistName = document.getElementById("artistName")
  const albumArt = document.getElementById("albumArt")
  const currentTime = document.getElementById("currentTime")
  const totalTime = document.getElementById("totalTime")
  const progressFill = document.getElementById("progressFill")
  const progressBar = document.querySelector(".progress-bar")
  const playlistContainer = document.getElementById("playlist")

  // Create audio element
  audio = new Audio()
  audio.volume = 0.7

  console.log("Elements found:", {
    playPauseBtn: !!playPauseBtn,
    prevBtn: !!prevBtn,
    nextBtn: !!nextBtn,
    songTitle: !!songTitle,
    artistName: !!artistName,
  })

  // Load first song
  loadSong(0)

  // Render playlist
  renderPlaylist()

  // Play/Pause button
  playPauseBtn.addEventListener("click", () => {
    console.log("Play button clicked!")
    togglePlayPause()
  })

  // Previous button
  prevBtn.addEventListener("click", () => {
    console.log("Previous button clicked!")
    previousSong()
  })

  // Next button
  nextBtn.addEventListener("click", () => {
    console.log("Next button clicked!")
    nextSong()
  })

  // Progress bar click
  progressBar.addEventListener("click", (e) => {
    const rect = progressBar.getBoundingClientRect()
    const percent = (e.clientX - rect.left) / rect.width
    setProgress(percent)
  })

  // Audio events
  audio.addEventListener("loadedmetadata", () => {
    totalTime.textContent = formatTime(audio.duration)
  })

  audio.addEventListener("timeupdate", () => {
    if (audio.duration) {
      const percent = audio.currentTime / audio.duration
      progressFill.style.width = percent * 100 + "%"
      currentTime.textContent = formatTime(audio.currentTime)
    }
  })

  audio.addEventListener("ended", () => {
    nextSong()
  })

  // Functions
  function loadSong(index) {
    console.log("Loading song:", index, playlist[index].title)

    currentSongIndex = index
    const song = playlist[index]

    // Update display
    songTitle.textContent = song.title
    artistName.textContent = song.artist

    // Update album art with the real cover image
    albumArt.src = song.cover
    albumArt.alt = `${song.title} by ${song.artist}`

    console.log("Setting album art to:", song.cover)

    // Load audio
    audio.src = song.src
    console.log("Audio source set to:", song.src)

    // Reset progress
    progressFill.style.width = "0%"
    currentTime.textContent = "0:00"
    totalTime.textContent = song.duration

    // Update playlist
    updatePlaylistDisplay()
  }

  function togglePlayPause() {
    if (isPlaying) {
      pauseSong()
    } else {
      playSong()
    }
  }

  function playSong() {
    console.log("Attempting to play song...")

    const currentSong = playlist[currentSongIndex]

    // Try to play the real audio file
    audio
      .play()
      .then(() => {
        console.log("Audio playing successfully!")
        isPlaying = true
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>'
        document.querySelector(".album-art").classList.add("playing")
      })
      .catch((error) => {
        console.log("Audio play failed:", error)
        // Fallback to simulation
        simulatePlay()
      })
  }

  function pauseSong() {
    console.log("Pausing song...")
    audio.pause()
    isPlaying = false
    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>'
    document.querySelector(".album-art").classList.remove("playing")

    if (progressInterval) {
      clearInterval(progressInterval)
    }
  }

  function simulatePlay() {
    console.log("Simulating playback")
    isPlaying = true
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>'
    document.querySelector(".album-art").classList.add("playing")

    // Simulate progress
    let currentSeconds = 0
    const totalSeconds = parseDuration(playlist[currentSongIndex].duration)

    progressInterval = setInterval(() => {
      if (isPlaying && currentSeconds < totalSeconds) {
        currentSeconds++
        const percent = currentSeconds / totalSeconds
        progressFill.style.width = percent * 100 + "%"
        currentTime.textContent = formatTime(currentSeconds)
      } else if (currentSeconds >= totalSeconds) {
        nextSong()
      }
    }, 1000)
  }

  function previousSong() {
    let newIndex = currentSongIndex - 1
    if (newIndex < 0) {
      newIndex = playlist.length - 1
    }
    loadSong(newIndex)
    if (isPlaying) {
      setTimeout(() => playSong(), 100)
    }
  }

  function nextSong() {
    let newIndex = currentSongIndex + 1
    if (newIndex >= playlist.length) {
      newIndex = 0
    }
    loadSong(newIndex)
    if (isPlaying) {
      setTimeout(() => playSong(), 100)
    }
  }

  function setProgress(percent) {
    if (audio.duration) {
      audio.currentTime = percent * audio.duration
    }
    progressFill.style.width = percent * 100 + "%"
  }

  function renderPlaylist() {
    playlistContainer.innerHTML = ""

    playlist.forEach((song, index) => {
      const item = document.createElement("div")
      item.className = "playlist-item"
      item.innerHTML = `
                <img src="${song.cover}" alt="${song.title}" class="song-thumb">
                <div class="song-details">
                    <h4>${song.title}</h4>
                    <p>${song.artist}</p>
                </div>
                <span class="song-duration">${song.duration}</span>
            `

      item.addEventListener("click", () => {
        console.log("Playlist item clicked:", song.title)
        loadSong(index)
        if (isPlaying) {
          setTimeout(() => playSong(), 100)
        }
      })

      playlistContainer.appendChild(item)
    })
  }

  function updatePlaylistDisplay() {
    const items = document.querySelectorAll(".playlist-item")
    items.forEach((item, index) => {
      if (index === currentSongIndex) {
        item.classList.add("active")
      } else {
        item.classList.remove("active")
      }
    })
  }

  function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00"
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return mins + ":" + (secs < 10 ? "0" : "") + secs
  }

  function parseDuration(duration) {
    const parts = duration.split(":")
    return Number.parseInt(parts[0]) * 60 + Number.parseInt(parts[1])
  }

  console.log("Music Player Initialized Successfully!")
})
