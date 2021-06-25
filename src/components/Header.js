import Popup from "./Popup";
import "../css/Header.css";
const Header = ({ setVisible, visible, difference, resetGame, numPassed }) => {
  return (
    <>
      <div className="header">
        <button className="directions" onClick={() => setVisible(!visible)}>
          Directions
        </button>
        <h1>Welcome to my Guessing Game!</h1>
        {difference === 0 ? (
          <button onClick={() => resetGame()} className="green-button">
            Next Level
          </button>
        ) : (
          <button className="grey-button">Next Level</button>
        )}
      </div>
      <h2>Levels Passed: {numPassed} </h2>
      <Popup visible={visible} setVisible={setVisible} />
    </>
  );
};

export default Header;
