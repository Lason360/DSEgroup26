import React, { useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import PoseDetectionCamera from './Components/cameraComponent'; // Adjust path as necessary

const PoseApp = () => {
  const [landmarks, setLandmarks] = useState([]);

  const CAM_PREVIEW_WIDTH = Dimensions.get('window').width;
  const CAM_PREVIEW_HEIGHT = CAM_PREVIEW_WIDTH / (3 / 4);

  // Callback to handle detected landmarks
  const handleLandmarksDetected = (keypoints) => {

    const normalizedKeypoints = keypoints.map((keypoint) => ({
      ...keypoint,
      x: (1 - (keypoint.x / (CAM_PREVIEW_WIDTH*0.5))),
      y: (1 - (keypoint.y / (CAM_PREVIEW_HEIGHT*0.5))),
    }));
    setLandmarks(normalizedKeypoints);
  };

  return (
    <View style={{ flex: 1 }}>
      <PoseDetectionCamera onLandmarksDetected={handleLandmarksDetected} />
      <View style={{ padding: 10 }}>
        <Text>Detected Landmarks:</Text>
        {landmarks.map((keypoint, index) => (
          <Text key={index}>
            {keypoint.name}: ({keypoint.x.toFixed(2)}, {keypoint.y.toFixed(2)})
          </Text>
        ))}
      </View>
    </View>
  );
};

export default PoseApp;