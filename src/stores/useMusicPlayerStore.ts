import { defineStore } from "pinia";

import type { Song, SongsJson } from "@/types/music";
import songsData from "@/data/songs.json";

export const useMusicPlayerStore = defineStore("musicPlayer", {
    state: () => ({
        songs: ((songsData as SongsJson).songs ?? []) as Song[],
        currentIndex: 0 as number,
        isPlaying: false as boolean,
        audio: null as HTMLAudioElement | null,
    }),

    getters: {
        currentSong(state): Song | null {
            return state.songs[state.currentIndex] ?? null;
        },
    },

    actions: {
        init(): void {
            if (!this.currentSong) return;

            const audio = new Audio();

            audio.crossOrigin = "anonymous";

            audio.src = this.currentSong.song_url;

            audio.addEventListener("ended", () => {
                this.next();
            });

            this.audio = audio;
        },

        play(): void {
            if (!this.audio) return;
            void this.audio.play();
            this.isPlaying = true;
        },

        pause(): void {
            if (!this.audio) return;
            this.audio.pause();
            this.isPlaying = false;
        },

        next(): void {
            if (!this.songs.length) return;
            this.currentIndex = (this.currentIndex + 1) % this.songs.length;
            this.updateTrack();
        },

        previous(): void {
            if (!this.songs.length) return;
            this.currentIndex = (this.currentIndex - 1 + this.songs.length) % this.songs.length;
            this.updateTrack();
        },

        updateTrack(): void {
            if (!this.audio || !this.currentSong) return;

            this.audio.src = this.currentSong.song_url;

            if (this.isPlaying) {
                void this.audio.play();
            }
        },

        destroy(): void {
            if (!this.audio) return;

            this.audio.pause();
            this.audio.src = "";
            this.audio = null;
            this.isPlaying = false;
        },
    },
});
