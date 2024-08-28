const calculateAngle = (a, b, c) => {
    const AB = {
      x: b.x - a.x,
      y: b.y - a.y,
    };
    const BC = {
      x: c.x - b.x,
      y: c.y - b.y,
    };
  
    const dotProduct = AB.x * BC.x + AB.y * BC.y;
    const magnitudeAB = Math.sqrt(AB.x ** 2 + AB.y ** 2);
    const magnitudeBC = Math.sqrt(BC.x ** 2 + BC.y ** 2);
  
    const angleRadians = Math.acos(dotProduct / (magnitudeAB * magnitudeBC));
    const angleDegrees = (angleRadians * 180) / Math.PI;
    return angleDegrees;
};

export default calculateAngle;