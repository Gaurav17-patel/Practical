import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Video from "react-native-video";
import { useSelector } from "react-redux";

const VideoPlayer = ({ videoUrl, isPlaying }) => {
  const muted = useSelector((state) => state.video.muted);
  const [loading, setLoading] = useState(true);
  const [paused, setPaused] = useState(!isPlaying);

  useEffect(() => {
    setPaused(!isPlaying);
  }, [isPlaying]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchable}
        activeOpacity={0.9}
        onPress={() => setPaused((prev) => !prev)} // Toggle Play/Pause
      >
        <Video
          source={{ uri: videoUrl }}
          style={styles.video}
          resizeMode="cover"
          muted={muted}
          paused={paused}
          playInBackground={false}
          playWhenInactive={false}
          onLoad={() => setLoading(false)}
          onError={(error) => console.warn("Video Error: ", error)}
          repeat
        />
        {loading && (
          <ActivityIndicator style={styles.loader} size="large" color="white" />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  touchable: {
    flex: 1,
  },
  video: {
    flex: 1,
  },
  loader: {
    position: "absolute",
    alignSelf: "center",
    top: "50%",
  },
});

export default VideoPlayer;
