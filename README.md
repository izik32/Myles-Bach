# Myles's Bachelor Party 2026

**Lake Tahoe · Zephyr Cove · April 17–19, 2026**

A dark luxury themed bachelor party website with Firebase integration for photo uploads and carpool coordination.

## Pages

- **index.html** — Main hub with nav cards, championship banner, and Roy quote
- **photos.html** — Photo upload with Firebase Storage + gallery with lightbox
- **memories.html** — Fullscreen slideshow with Ken Burns effect and music
- **itinerary.html** — Schedule timeline from Google Sheets CSV (fallback to JSON)
- **tournaments.html** — Bracket generator for Halo 3, Smash, MTG, Pool + Win Tracker
- **carpool.html** — Real-time driver/rider coordination via Firestore

## Music Config

Music tracks are auto-generated from MP3 files in `assets/music/`.

To update after adding new songs:
```
Tell Claude Code: "regenerate the music config and push"
```
This runs `node generate-music-config.js`, which scans `assets/music/` and overwrites `config/music.js`.

## Itinerary Updates

To update the itinerary from Google Sheets:
```
Tell Claude Code: "Here's the updated Google Sheet link: [url] — update the itinerary"
```
This fetches the CSV, parses it, and overwrites `itinerary.json`.

## Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Set Firestore rules to allow public read/write (test mode)
3. Set Storage rules to allow public read/write (test mode)

## Deployment

1. Push to GitHub
2. Go to repo **Settings → Pages → Deploy from main branch**
3. Site will be live at `https://<username>.github.io/<repo>/`
