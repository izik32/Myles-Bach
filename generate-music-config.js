#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const musicDir = path.join(__dirname, 'assets', 'music');
const outputFile = path.join(__dirname, 'config', 'music.js');

// Ensure music directory exists
if (!fs.existsSync(musicDir)) {
  fs.mkdirSync(musicDir, { recursive: true });
}

// Scan for mp3 files
const files = fs.readdirSync(musicDir).filter(f => f.toLowerCase().endsWith('.mp3'));

const tracks = files.map(f => {
  const title = path.basename(f, path.extname(f));
  return { title, file: `assets/music/${f}` };
});

const output = `const MUSIC_TRACKS = ${JSON.stringify(tracks, null, 2)};

function getRandomTrack() {
  if (MUSIC_TRACKS.length === 0) return null;
  return MUSIC_TRACKS[Math.floor(Math.random() * MUSIC_TRACKS.length)];
}
`;

fs.writeFileSync(outputFile, output, 'utf8');
console.log(`Generated config/music.js with ${tracks.length} track(s).`);
