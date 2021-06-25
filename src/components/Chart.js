import "zingchart/es6";
import Zingchart from "zingchart-react";
import "../css/Chart.css";
const Chart = ({
  difference,
  background,
  config,
  bar,
  goal,
  warningImg,
  checkmark,
}) => {
  return (
    <div className="chart-container" style={background}>
      <Zingchart data={config} />
      {difference < 7 && (
        <>
          {bar[0] === goal[0] ? (
            <img src={checkmark} alt="" className="indicator1" />
          ) : (
            <img src={warningImg} alt="" className="indicator1" />
          )}
          {bar[1] === goal[1] ? (
            <img src={checkmark} alt="" className="indicator2" />
          ) : (
            <img src={warningImg} alt="" className="indicator2" />
          )}
          {bar[2] === goal[2] ? (
            <img src={checkmark} alt="" className="indicator3" />
          ) : (
            <img src={warningImg} alt="" className="indicator3" />
          )}
          {bar[3] === goal[3] ? (
            <img src={checkmark} alt="" className="indicator4" />
          ) : (
            <img src={warningImg} alt="" className="indicator4" />
          )}
        </>
      )}
    </div>
  );
};

export default Chart;
