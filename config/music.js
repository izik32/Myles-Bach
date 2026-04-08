const MUSIC_TRACKS = [
  {
    "title": "Berk Up Tahoe",
    "file": "assets/music/Berk Up Tahoe.mp3"
  },
  {
    "title": "Glory Tahoe Days",
    "file": "assets/music/Glory Tahoe Days.mp3"
  },
  {
    "title": "Tahoe Boys Party Energy",
    "file": "assets/music/Tahoe Boys Party Energy.mp3"
  },
  {
    "title": "Tahoe with the boys",
    "file": "assets/music/Tahoe with the boys.mp3"
  },
  {
    "title": "The Stag of El Rocco",
    "file": "assets/music/The Stag of El Rocco.mp3"
  },
  {
    "title": "The Tahoe Thin Air",
    "file": "assets/music/The Tahoe Thin Air.mp3"
  }
];

function getRandomTrack() {
  if (MUSIC_TRACKS.length === 0) return null;
  return MUSIC_TRACKS[Math.floor(Math.random() * MUSIC_TRACKS.length)];
}
