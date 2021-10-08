import React from "react";

const Question = (props) => {
  let progressStyle = `${props.progress}%`;
  return (
    <div>
      <p className="progress-status"> Progress Status: </p>{" "}
      <div id="myProgress">
        <div id="myBar" style={{ width: progressStyle }}>
          {Math.round(props.progress)}%
        </div>
      </div>
      <div className="answer">
        <div className="column-answer">
          <p> Total number of questions = {props.total} </p>{" "}
        </div>{" "}
        <div className="column-answer">
          <p className="unanswered">
            Number of questions answered = {props.answered}{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
      <div className="question">
        <div>
          <p className="quest"> {props.question} </p>{" "}
          <div className="container-label">
            <ul className="ul">
              <li className="li">
                <input
                  type="radio"
                  id="f-option"
                  name="selector"
                  onClick={props.handleOptionClick}
                />
                <label htmlFor="f-option">{props.option1}</label>

                <div className="check"></div>
              </li>

              <li className="li">
                <input
                  type="radio"
                  id="s-option"
                  name="selector"
                  onClick={props.handleOptionClick}
                />
                <label htmlFor="s-option">{props.option2}</label>

                <div className="check">
                  <div className="inside"></div>
                </div>
              </li>

              <li className="li">
                <input
                  type="radio"
                  id="t-option"
                  name="selector"
                  onClick={props.handleOptionClick}
                />
                <label htmlFor="t-option">{props.option3}</label>

                <div className="check">
                  <div className="inside"></div>
                </div>
              </li>

              <li className="li">
                <input
                  type="radio"
                  id="r-option"
                  name="selector"
                  onClick={props.handleOptionClick}
                />
                <label htmlFor="r-option">{props.option4}</label>

                <div className="check">
                  <div className="inside"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>{" "}
      </div>{" "}
      <div className="column">
        <div className="back">
          <button
            type="submit"
            className="btn btn-success"
            onClick={props.handleBack}
          >
            Back{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
      <div className="column">
        <div className="next">
          <button
            type="submit"
            className="btn btn-success"
            onClick={props.handleNext}
          >
            {props.index !== 9 ? "Next" : "submit"}{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Question;
