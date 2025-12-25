import { defineStore } from "pinia";
import songsData from "@/data/songs.json";

export const useMusicPlayerStore = defineStore("musicPlayer", {
    state: () => ({
        songs: songsData.songs || [],
        currentIndex: 0,
        isPlaying: false,
        audio: null,
    }),

    getters: {
        currentSong(state) {
            return state.songs[state.currentIndex] || null;
        },
    },

    actions: {
        init() {
            if (!this.currentSong) return;

            this.audio = new Audio(this.currentSong.song_url);
            this.audio.addEventListener("ended", this.next);
        },

        play() {
            if (!this.audio) return;
            this.audio.play();
            this.isPlaying = true;
        },

        pause() {
            if (!this.audio) return;
            this.audio.pause();
            this.isPlaying = false;
        },

        next() {
            if (!this.songs.length) return;

            this.currentIndex = (this.currentIndex + 1) % this.songs.length;
            this.updateTrack();
        },

        previous() {
            if (!this.songs.length) return;

            this.currentIndex = (this.currentIndex - 1 + this.songs.length) % this.songs.length;
            this.updateTrack();
        },

        updateTrack() {
            if (!this.audio || !this.currentSong) return;

            this.audio.src = this.currentSong.song_url;

            if (this.isPlaying) {
                this.audio.play();
            }
        },

        destroy() {
            if (!this.audio) return;

            this.audio.pause();
            this.audio.src = "";
            this.audio = null;
            this.isPlaying = false;
        },
    },
});
