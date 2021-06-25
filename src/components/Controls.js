import "../css/Controls.css";
const Controls = ({ bar, changeBar }) => {
  return (
    <div className="controls">
      {bar.map((barNum, index) => (
        <input
          key={index}
          type="range"
          min="0"
          max="50"
          className="bar-slider"
          value={barNum}
          onChange={(e) => changeBar(index, e)}
        />
      ))}
    </div>
  );
};

export default Controls;
