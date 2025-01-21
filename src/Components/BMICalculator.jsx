import { useState } from "react";
import "../Styles/BMICalculator.css";
const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmi);

      if (bmi < 18.5) {
        setCategory("Under-Weight");
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        setCategory("Normal-Weight");
      } else if (bmi >= 25 && bmi <= 29.9) {
        setCategory("Over-Weight");
      } else {
        setCategory("Obese");
      }
    }
  };
  return (
    <div className="bmi-card">
      <h2>BMI Calculator</h2>
      <div className="input-group">
        <label htmlFor="">Weight (kg)</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter Your Weight"
        />
      </div>
      <div className="input-group">
        <label htmlFor="">Height (cm)</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter Your Height"
        />
      </div>
      <button className="btn-calculator" onClick={calculateBMI}>
        Calculate BMI
      </button>
      {bmi && (
        <div className="result">
          <h3>Your BMI: {bmi}</h3>
          <h4>Category: {category}</h4>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
