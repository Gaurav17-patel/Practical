import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import VideoPlayer from "./VideoPlayer";
import ActionButton from "./ActionButton";
import { toggleLike, toggleMute } from "../redux/videoSlice";

const VideoItem = ({ item, isPlaying }) => {
  const dispatch = useDispatch();
  const liked = useSelector((state) => state.video.likedVideos[item.id]);
  const muted = useSelector((state) => state.video.muted);

  return (
    <SafeAreaView style={styles.container}>
      {/* Video Player */}
      <VideoPlayer videoUrl={item.videoUrl} isPlaying={isPlaying} />

      {/* User Info */}
      <View style={styles.userInfo}>
        <Image source={{ uri: item.user.profilePic }} style={styles.profilePic} />
        <Text style={styles.username}>{item.user.username}</Text>
      </View>

      {/* Actions (Like, Comment, Mute) */}
      <View style={styles.actionContainer}>
        <ActionButton
          icon="heart"
          color={liked ? "red" : "white"}
          onPress={() => dispatch(toggleLike(item.id))}
          count={item.likes}
        />
        <ActionButton icon="comment" color="white" count={item.comments} />
        <ActionButton
          icon={muted ? "volume-off" : "volume-up"}
          color="white"
          onPress={() => dispatch(toggleMute())}
        />
      </View>

      {/* Video Description */}
      <Text style={styles.description}>{item.description}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  userInfo: {
    position: "absolute",
    top: 10,
    left: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  profilePic: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    marginRight: 8,
  },
  username: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  actionContainer: {
    position: "absolute",
    bottom: 80,
    right: 15,
    alignItems: "center",
  },
  description: {
    color: "white",
    fontSize: 14,
    position: "absolute",
    bottom: 20,
    left: 15,
  },
});

export default VideoItem;
