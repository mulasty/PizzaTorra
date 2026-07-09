"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import styles from "../app/page.module.css";

type MusicTrack = {
  title: string;
  src: string;
};

type MusicPlayerProps = {
  tracks: MusicTrack[];
};

export function MusicPlayer({ tracks }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [musicPlayerOpen, setMusicPlayerOpen] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [musicPlaying, setMusicPlaying] = useState(false);

  const currentTrack = tracks[currentTrackIndex];

  const playTrack = async (trackIndex = currentTrackIndex) => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    setCurrentTrackIndex(trackIndex);

    if (audio.src !== new URL(tracks[trackIndex].src, window.location.href).href) {
      audio.src = tracks[trackIndex].src;
    }

    try {
      await audio.play();
      setMusicPlaying(true);
    } catch {
      setMusicPlaying(false);
    }
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    if (musicPlaying) {
      audio.pause();
      setMusicPlaying(false);
      return;
    }

    await playTrack();
  };

  const selectTrack = async (trackIndex: number) => {
    await playTrack(trackIndex);
  };

  const skipTrack = async (direction: 1 | -1) => {
    const nextTrackIndex =
      (currentTrackIndex + direction + tracks.length) % tracks.length;
    await playTrack(nextTrackIndex);
  };

  return (
    <aside
      className={`${styles.musicPlayer} ${styles.quickActionPlayer} ${musicPlayerOpen ? styles.musicPlayerOpen : ""}`}
      aria-label="TORRA Musica"
    >
      <audio
        ref={audioRef}
        preload="none"
        onEnded={() => skipTrack(1)}
        onPause={() => setMusicPlaying(false)}
        onPlay={() => setMusicPlaying(true)}
      />

      <div className={styles.musicFlag} aria-hidden="true" />

      <button
        type="button"
        className={styles.musicToggle}
        aria-expanded={musicPlayerOpen}
        aria-label={musicPlayerOpen ? "TORRA Musica — Zwiń" : "TORRA Musica — Rozwiń"}
        onClick={() => setMusicPlayerOpen((open) => !open)}
      >
        <span className={styles.musicDisc}>
          <Image
            src="/musica/torra-musica.webp"
            alt=""
            width={96}
            height={96}
            className={styles.musicDiscImage}
            loading="lazy"
            fetchPriority="low"
          />
        </span>
        <span className={styles.musicToggleText}>
          <span>TORRA Musica</span>
          <strong>{musicPlaying ? "Gra teraz" : "Sera Italiana"}</strong>
        </span>
        <span className={styles.musicToggleIcon}>{musicPlayerOpen ? "\u00D7" : "\u266A"}</span>
      </button>

      <div className={styles.musicPanel}>
        <div className={styles.musicPanelHeader}>
          <Image
            src="/musica/torra-musica.webp"
            alt="TORRA Musica Sera Italiana"
            width={160}
            height={160}
            className={styles.musicCover}
            loading="lazy"
            fetchPriority="low"
          />
          <div>
            <p>Playlist</p>
            <h2>TORRA Musica</h2>
            <span>Sera Italiana \u2022 {tracks.length} utworów</span>
          </div>
        </div>

        <div className={styles.musicNow}>
          <span>Teraz</span>
          <strong>{currentTrack.title}</strong>
        </div>

        <div className={styles.musicControls} aria-label="Sterowanie muzyką">
          <button type="button" onClick={() => skipTrack(-1)} aria-label="Poprzedni utwór">
            ‹
          </button>
          <button
            type="button"
            className={styles.musicPlayButton}
            onClick={toggleMusic}
            aria-label={musicPlaying ? "Pauza" : "Play"}
          >
            {musicPlaying ? "Pauza" : "Play"}
          </button>
          <button type="button" onClick={() => skipTrack(1)} aria-label="Następny utwór">
            ›
          </button>
        </div>

        <div className={styles.musicTrackList}>
          {tracks.map((track, index) => (
            <button
              key={track.src}
              type="button"
              className={`${styles.musicTrackButton} ${index === currentTrackIndex ? styles.musicTrackButtonActive : ""}`}
              onClick={() => selectTrack(index)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{track.title}</strong>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
