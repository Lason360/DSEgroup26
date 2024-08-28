import { useState,useEffect } from "react";



export async function predict(inputTensor) {
    if (!model) {
      throw new Error("Model not loaded yet. Call loadModel() first.");
    }
  
    const reshapedTensor = inputTensor.reshape([1, 34]); 
    try {
      const prediction = model.predict(reshapedTensor);
      const predictionArray = await prediction.array(); 
      return predictionArray[0]; 
    } catch (error) {
      console.error("Error during prediction:", error);
      throw new Error("Prediction failed");
    }
  }