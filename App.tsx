import React, { useState } from 'react';
import { View, Text } from 'react-native';
import PoseDetectionCamera from './Components/cameraComponent'; // Adjust path as necessary

const PoseApp = () => {
  const [landmarks, setLandmarks] = useState([]);

  // Callback to handle detected landmarks
  const handleLandmarksDetected = (keypoints) => {
    setLandmarks(keypoints);
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