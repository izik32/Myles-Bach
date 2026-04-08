const MUSIC_TRACKS = [];

function getRandomTrack() {
  if (MUSIC_TRACKS.length === 0) return null;
  return MUSIC_TRACKS[Math.floor(Math.random() * MUSIC_TRACKS.length)];
}
