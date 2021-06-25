import "zingchart/es6";
import Zingchart from "zingchart-react";
import "../css/Chart.css";
const Chart = ({
  difference,
  background,
  config,
  bar1,
  bar2,
  bar3,
  bar4,
  goal1,
  goal2,
  goal3,
  goal4,
  warningImg,
  checkmark,
}) => {
  return (
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
  );
};

export default Chart;
