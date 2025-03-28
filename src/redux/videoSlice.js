import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    muted: false,
    likedVideos: {},
  },
  reducers: {
    toggleMute: (state) => {
      state.muted = !state.muted;
    },
    toggleLike: (state, action) => {
      const videoId = action.payload;
      state.likedVideos[videoId] = !state.likedVideos[videoId];
    },
  },
});

export const { toggleMute, toggleLike } = videoSlice.actions;
export default videoSlice.reducer;
