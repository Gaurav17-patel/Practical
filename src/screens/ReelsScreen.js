import { Provider } from "react-redux";
import { FlatList, View, Dimensions } from "react-native";
import React, { useState, useRef, useCallback } from "react";

import store from "../redux/store";
import { videoData } from "../utils/data";
import VideoItem from "../components/VideoItem";

const { height } = Dimensions.get("window");

const ReelsScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const viewabilityConfig = useRef({ viewAreaCoveragePercentThreshold: 80 });

  const onViewableItemsChanged = useCallback(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }, []);

  return (
    <Provider store={store}>
      <FlatList
        data={videoData}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={{ height }}>
            <VideoItem item={item} isPlaying={currentIndex === index} />
          </View>
        )}
        pagingEnabled
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig.current}
        scrollEventThrottle={16}
      />
    </Provider>
  );
};

export default ReelsScreen;
