import React from "react";
import dataFile from "./data.json";

class App extends React.Component {
  render() {
    return (
      <div className="page">
        <div className="main-block">
          <div className="left-block">
            <p className="bold pale px24">Your Result</p>
            <div className="shapeInfo">
              <p className="extra-bold white px70">76</p>
              <p className="medium dark px18">of 100</p>
            </div>
            <p className="bold white px28">Great</p>
            <p className="medium pale px18 padding">
              You scored higher than 65% of the people who have taken these
              test.
            </p>
          </div>

          <div className="right-block">
            <p className="bold black px24">Summary</p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
              className="margin"
            >
              {dataFile.map((obj) => (
                <li
                  style={this.returnColor(obj.category)}
                  className="object-of-result"
                  key={obj.category}
                >
                  <div className="element-of-summary">
                    <img alt="penis" src={require(`${obj.icon}`)} />
                    <p style={{ padding: "0 15px" }} className="bold">
                      {obj.category}
                    </p>
                  </div>
                  <p className="dark medium">
                    <span className="black bold">{obj.score}</span> / 100
                  </p>
                </li>
              ))}
            </div>
            <button>Continue</button>
          </div>
        </div>

        <div className="attribution">
          <p>
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="blank"
            >
              Frontend Mentor
            </a>
            . Coded by <a href="https://www.frontendmentor.io/profile/MihailTomilko2003">Mihail Tomilko</a>.
          </p>
        </div>
      </div>
    );
  }

  returnColor(object) {
    if (object === "Reaction") {
      return {
        backgroundColor: "hsla(0, 100%, 67%, 0.07)",
        color: "hsl(0, 100%, 67%)",
      };
    }
    if (object === "Memory") {
      return {
        backgroundColor: "hsla(39, 100%, 56%, 0.07)",
        color: "hsl(39, 100%, 56%)",
      };
    }
    if (object === "Verbal") {
      return {
        backgroundColor: "hsla(166, 100%, 37%, 0.07)",
        color: "hsl(166, 100%, 37%)",
      };
    }
    if (object === "Visual") {
      return {
        backgroundColor: "hsla(234, 85%, 45%, 0.07)",
        color: "hsl(234, 85%, 45%)",
      };
    }
  }
}

export default App;
