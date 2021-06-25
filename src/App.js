import "./App.css";
import "zingchart/es6";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import warningImg from "./Media/warning.jpg";
import checkmark from "./Media/checkmark.jpg";
import Chart from "./components/Chart";
import Controls from "./components/Controls";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config]);
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
        <Chart
          difference={difference}
          background={background}
          config={config}
          bar1={bar1}
          bar2={bar2}
          bar3={bar3}
          bar4={bar4}
          goal1={goal1}
          goal2={goal2}
          goal3={goal3}
          goal4={goal4}
          warningImg={warningImg}
          checkmark={checkmark}
        />
        <Controls
          bar1={bar1}
          bar2={bar2}
          bar3={bar3}
          bar4={bar4}
          changeBar={changeBar}
        />
      </div>
    </div>
  );
}

export default App;
