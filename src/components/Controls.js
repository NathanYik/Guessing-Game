import "../css/Controls.css";
const Controls = ({ bar1, bar2, bar3, bar4, changeBar }) => {
  return (
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
  );
};

export default Controls;
