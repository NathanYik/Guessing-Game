import "./App.css";
import "zingchart/es6";
import Header from "./components/Header";
import { useState } from "react";
import warningImg from "./Media/warning.jpg";
import checkmark from "./Media/checkmark.jpg";
import Chart from "./components/Chart";
import Controls from "./components/Controls";
function App() {
  const calculateRed = (difference) => {
    return difference > 100
      ? 214
      : difference > 50
      ? 214 + ((100 - difference) / 50) * 35
      : 244 - ((50 - difference) / 50) * 220;
  };
  const calculateGreen = (difference) => {
    return difference > 100
      ? 44
      : difference > 50
      ? 44 + ((100 - difference) / 50) * 214
      : 255 - ((50 - difference) / 50) * 20;
  };
  const calculateBlue = (difference) => {
    return difference > 100
      ? 21
      : difference > 50
      ? 21 + ((100 - difference) / 50) * 58
      : 79 - ((50 - difference) / 50) * 10;
  };
  const changeBackground = (difference) => {
    return {
      borderColor: `rgba(${calculateRed(difference)}, ${calculateGreen(
        difference
      )}, ${calculateBlue(difference)}, 0.75)`,
      boxShadow: `0px 0px 10px 4px rgba(${calculateRed(
        difference
      )}, ${calculateGreen(difference)}, ${calculateBlue(difference)}, 0.75) `,
    };
  };
  const generateGoal = () => {
    return [
      Math.floor(Math.random() * 51),
      Math.floor(Math.random() * 51),
      Math.floor(Math.random() * 51),
      Math.floor(Math.random() * 51),
    ];
  };
  const calculateDiff = (goal, bar) => {
    let diff = 0;
    for (let i = 0; i < goal.length; i++) {
      diff += Math.abs(goal[i] - bar[i]);
    }
    return diff;
  };
  const [bar, setBar] = useState([0, 0, 0, 0]);
  const [goal, setGoal] = useState(generateGoal);
  const [difference, setDifference] = useState(calculateDiff(goal, bar));
  const [numPassed, setNumPassed] = useState(0);
  const [background, setBackground] = useState(changeBackground(difference));
  const [visible, setVisible] = useState(false);
  const [config, setConfig] = useState({
    type: "bar",
    series: [
      {
        values: [0, 0, 0, 0],
      },
    ],
    scaleY: {
      values: "0:50:1",
    },
    scaleX: {
      labels: ["One", "Two", "Three", "Four"],
    },
  });
  const changeBar = (barNum, e) => {
    const newBar = [...bar];
    newBar[barNum] = parseInt(e.target.value);
    const newdiff = calculateDiff(goal, newBar);
    const newConfig = JSON.parse(JSON.stringify(config));
    newConfig.series[0].values = newBar;
    setBar(newBar);
    setDifference(newdiff);
    setBackground(changeBackground(newdiff));
    setConfig(newConfig);
  };
  const resetGame = () => {
    const newGoal = generateGoal();
    const newBar = [0, 0, 0, 0];
    const newdiff = calculateDiff(newGoal, newBar);
    const newConfig = JSON.parse(JSON.stringify(config));
    newConfig.series[0].values = [0, 0, 0, 0];
    setGoal(newGoal);
    setNumPassed(numPassed + 1);
    setBar(newBar);
    setDifference(newdiff);
    setBackground(changeBackground(newdiff));
    setConfig(newConfig);
  };
  return (
    <div className="App">
      <div className="container">
        <Header
          setVisible={setVisible}
          visible={visible}
          difference={difference}
          resetGame={resetGame}
          numPassed={numPassed}
        />
        <div>
          {bar[0]},{bar[1]},{bar[2]},{bar[3]}
        </div>
        <div>
          {goal[0]},{goal[1]},{goal[2]},{goal[3]},{difference}
        </div>
        <Chart
          difference={difference}
          background={background}
          config={config}
          bar={bar}
          goal={goal}
          warningImg={warningImg}
          checkmark={checkmark}
        />
        <Controls bar={bar} changeBar={changeBar} />
      </div>
    </div>
  );
}

export default App;
