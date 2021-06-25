import "../css/Popup.css";
const Popup = ({ visible, setVisible }) => {
  return (
    <>
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
    </>
  );
};

export default Popup;
