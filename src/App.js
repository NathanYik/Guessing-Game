import "./App.css";
import "zingchart/es6";
import Zingchart from "zingchart-react";
import { useState, useEffect } from "react";
import warningImg from "./Media/warning.jpg";
import checkmark from "./Media/checkmark.jpg";
function App() {
  const [bar1, setBar1] = useState(0);
  const [bar2, setBar2] = useState(0);
  const [bar3, setBar3] = useState(0);
  const [bar4, setBar4] = useState(0);
  const [goal1, setGoal1] = useState(Math.floor(Math.random() * 51));
  const [goal2, setGoal2] = useState(Math.floor(Math.random() * 51));
  const [goal3, setGoal3] = useState(Math.floor(Math.random() * 51));
  const [goal4, setGoal4] = useState(Math.floor(Math.random() * 51));
  const [difference, setDifference] = useState(0);
  const [numPassed, setNumPassed] = useState(0);
  const [background, setBackground] = useState({});
  const [visible, setVisible] = useState(false);
  const [config, setConfig] = useState({
    type: "bar",
    title: "Hello there!",
    series: [
      {
        values: [0, 0, 0, 0],
      },
    ],
    scaleY: {
      values: "0:50:1",
      labels: ["0", "50"],
    },
    scaleX: {
      labels: ["One", "Two", "Three", "Four"],
    },
  });
  const changeBar = (barNum, e) => {
    const newConfig = {
      type: "bar",
      title: "Hello there!",
      series: [
        {
          values: [bar1, bar2, bar3, bar4],
        },
      ],
      scaleY: {
        values: "0:50:1",
        labels: ["0", "50"],
      },
      scaleX: {
        labels: ["One", "Two", "Three", "Four"],
      },
    };
    newConfig.series[0].values[barNum] = parseInt(e.target.value);
    switch (barNum) {
      case 0:
        setBar1(parseInt(e.target.value));
        break;
      case 1:
        setBar2(parseInt(e.target.value));
        break;
      case 2:
        setBar3(parseInt(e.target.value));
        break;
      case 3:
        setBar4(parseInt(e.target.value));
        break;
      default:
        break;
    }
    setConfig({ ...newConfig });
  };
  const resetGame = () => {
    setBar1(0);
    setBar2(0);
    setBar3(0);
    setBar4(0);
    setGoal1(Math.floor(Math.random() * 51));
    setGoal2(Math.floor(Math.random() * 51));
    setGoal3(Math.floor(Math.random() * 51));
    setGoal4(Math.floor(Math.random() * 51));
    setNumPassed(numPassed + 1);
    const newConfig = {
      type: "bar",
      title: "Hello there!",
      series: [
        {
          values: [0, 0, 0, 0],
        },
      ],
      scaleY: {
        values: "0:50:1",
        labels: ["0", "50"],
      },
      scaleX: {
        labels: ["One", "Two", "Three", "Four"],
      },
    };
    setConfig({ ...newConfig });
  };

  useEffect(() => {
    setDifference(
      Math.abs(goal1 - bar1) +
        Math.abs(goal2 - bar2) +
        Math.abs(goal3 - bar3) +
        Math.abs(goal4 - bar4)
    );
    setBackground({
      borderColor: `rgba(${
        difference > 100
          ? 214
          : difference > 50
          ? 214 + ((100 - difference) / 50) * 35
          : 244 - ((50 - difference) / 50) * 220
      }, ${
        difference > 100
          ? 44
          : difference > 50
          ? 44 + ((100 - difference) / 50) * 214
          : 255 - ((50 - difference) / 50) * 20
      }, ${
        difference > 100
          ? 21
          : difference > 50
          ? 21 + ((100 - difference) / 50) * 58
          : 79 - ((50 - difference) / 50) * 10
      }, 0.75)`,
      boxShadow: `0px 0px 10px 4px rgba(${
        difference > 100
          ? 214
          : difference > 50
          ? 214 + ((100 - difference) / 50) * 35
          : 244 - ((50 - difference) / 50) * 220
      }, ${
        difference > 100
          ? 44
          : difference > 50
          ? 44 + ((100 - difference) / 50) * 214
          : 255 - ((50 - difference) / 50) * 20
      }, ${
        difference > 100
          ? 21
          : difference > 50
          ? 21 + ((100 - difference) / 50) * 58
          : 79 - ((50 - difference) / 50) * 10
      }, 0.75) `,
    });
    return () => {};
  }, [config]);
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <button className="directions" onClick={() => setVisible(!visible)}>
            Directions
          </button>
          <h1 className="title">Welcome to my Guessing Game!</h1>
          {difference === 0 ? (
            <button onClick={() => resetGame()} className="green-button">
              Next Level
            </button>
          ) : (
            <button className="grey-button">Next Level</button>
          )}
        </div>
        <h2>Levels Passed: {numPassed}</h2>
        <div className="chart-container" style={background}>
          <Zingchart data={config} />
          {difference < 7 && (
            <>
              {bar1 === goal1 ? (
                <img src={checkmark} alt="" className="indicator1" />
              ) : (
                <img src={warningImg} alt="" className="indicator1" />
              )}
              {bar2 === goal2 ? (
                <img src={checkmark} alt="" className="indicator2" />
              ) : (
                <img src={warningImg} alt="" className="indicator2" />
              )}
              {bar3 === goal3 ? (
                <img src={checkmark} alt="" className="indicator3" />
              ) : (
                <img src={warningImg} alt="" className="indicator3" />
              )}
              {bar4 === goal4 ? (
                <img src={checkmark} alt="" className="indicator4" />
              ) : (
                <img src={warningImg} alt="" className="indicator4" />
              )}
            </>
          )}
        </div>
        <div className="controls">
          <input
            type="range"
            min="0"
            max="50"
            className="bar-slider"
            value={bar1}
            onChange={(e) => changeBar(0, e)}
          />
          <input
            type="range"
            min="0"
            max="50"
            className="bar-slider"
            value={bar2}
            onChange={(e) => changeBar(1, e)}
          />
          <input
            type="range"
            min="0"
            max="50"
            className="bar-slider"
            value={bar3}
            onChange={(e) => changeBar(2, e)}
          />
          <input
            type="range"
            min="0"
            max="50"
            className="bar-slider"
            value={bar4}
            onChange={(e) => changeBar(3, e)}
          />
        </div>
      </div>
      {visible && (
        <div className="instructions" onClick={() => setVisible(!visible)}>
          <p>Click anywhere to exit</p>
          <div className="instructions-box">
            <h2>Directions:</h2>
            <p>
              There are four bars, each with a predetermined height that they
              want to be at.
            </p>
            <p>The problem is, we don't know the heights!</p>
            <p>
              Luckily, we get a hint: the closer we get to the correct values
              for each of the bars, the color of the border changes from red to
              green.
            </p>
            <p>
              Once you get close enough to the true heights of all 4 bars, an
              indicator will show underneath the bars indicating which bars have
              been set correctly and which ones are close to being set
              correctly.
            </p>
            <p>Have fun!</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
