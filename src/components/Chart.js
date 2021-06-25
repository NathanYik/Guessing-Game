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
          {bar.map((barNum, index) => (
            <div>
              {barNum === goal[index] ? (
                <img
                  src={checkmark}
                  alt=""
                  className={`indicator${index + 1}`}
                />
              ) : (
                <img
                  src={warningImg}
                  alt=""
                  className={`indicator${index + 1}`}
                />
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Chart;
