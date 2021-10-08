import React, { Component } from "react";
import Question from "./Question";
import questions from "../questions.json";
import isEmpty from "../utils/is-empty";
import Fire from "../config/Fire";

export class PersonalityTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions,
      nextQuestion: {},
      previousQuestion: {},
      currentQuestion: {},
      answers: {},
      results: {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
      },
      startTest: false,
      questionsAnswered: 0,
      noofQuestions: 0,
      currentQuestionIndex: 0,
      uid: this.props.uid,
    };

    this.handleOptionClick = this.handleOptionClick.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const {
      questions,
      currentQuestion,
      nextQuestion,
      previousQuestion,
    } = this.state;
    this.displayQuestion(
      questions,
      currentQuestion,
      nextQuestion,
      previousQuestion
    );
  }

  displayQuestion = (
    questions,
    currentQuestion,
    nextQuestion,
    previousQuestion
  ) => {
    let { currentQuestionIndex } = this.state;
    if (!isEmpty(questions)) {
      questions = this.state.questions;
      currentQuestion = questions[currentQuestionIndex];
      nextQuestion = questions[currentQuestionIndex + 1];
      previousQuestion = questions[currentQuestionIndex - 1];
    }
    this.setState((prevState) => ({
      currentQuestion,
      nextQuestion,
      previousQuestion,
    }));
  };

  handleOptionClick = (e) => {
    let answers = this.state.answers;
    answers[this.state.currentQuestion.question] = e.target.value;
    this.setState((prevState) => ({
      answers,
    }));
    // console.log(answers)
  };

  handleNext = (e) => {
    if (this.state.currentQuestionIndex !== 9) {
      let answers = this.state.answers;
      if (
        answers[this.state.currentQuestion.question] &&
        this.state.currentQuestionIndex === this.state.questionsAnswered
      ) {
        this.setState(
          (prevState) => ({
            currentQuestionIndex: prevState.currentQuestionIndex + 1,
            questionsAnswered: prevState.questionsAnswered + 1,
          }),
          () =>
            this.displayQuestion(
              questions,
              this.state.currentQuestion,
              this.state.nextQuestion,
              this.state.previousQuestion
            )
        );
      } else if (
        this.state.currentQuestionIndex < this.state.questionsAnswered
      ) {
        this.setState(
          (prevState) => ({
            currentQuestionIndex: prevState.currentQuestionIndex + 1,
          }),
          () =>
            this.displayQuestion(
              questions,
              this.state.currentQuestion,
              this.state.nextQuestion,
              this.state.previousQuestion
            )
        );
      }
    } else {
      this.handleSubmit(e);
    }
  };

  handleBack = (e) => {
    if (this.state.currentQuestionIndex > 0) {
      this.setState(
        (prevState) => ({
          currentQuestionIndex: prevState.currentQuestionIndex - 1,
        }),
        () =>
          this.displayQuestion(
            questions,
            this.state.currentQuestion,
            this.state.nextQuestion,
            this.state.previousQuestion
          )
      );
    }
  };

  startTestFunc = () => {
    this.setState({ startTest: true });
  };

  handleSubmit = (e) => {
    let answers = this.state.answers;
    let results = this.state.results;
    let finalans = {};
    let options = {
      a: "Logical",
      b: "Creative",
      c: "Suspicious",
      d: "Flexible",
    };
    for (var key in answers) {
      results[answers[key]] = results[answers[key]] + 1;
    }
    // a logical b creative c suspicious d angry person

    var items = Object.keys(results).map(function (key) {
      return [key, results[key]];
    });

    // Sort the array based on the second element
    items.sort(function (first, second) {
      return second[1] - first[1];
    });
    finalans = options[items[0][0]];
    console.log(results);
    console.log(finalans);

    delete results.on;

    Fire.Update(this.state.uid, "results", results);
    Fire.Update(this.state.uid, "PersonalityType", finalans);
    Fire.Update(this.state.uid, "test", true);

    alert(finalans);

    this.props.testDone();
  };

  render() {
    const { currentQuestion } = this.state;
    const { questionsAnswered } = this.state;
    const { currentQuestionIndex } = this.state;

    if (this.state.startTest === false) {
      return (
        <div className="container-test-page">
          <div className="heading-test-page">
            <h2>Test</h2>
          </div>

          <p className="text">
            What does it take to be a good parent? Literature on parenting
            identifies four main styles: Authoritative, Authoritarian,
            Permissive and Uninvolved. These are based on the extent to which
            parents are responsive (offer warmth and support) and demanding
            (level of behavioral control). Research has shown that a failure to
            balance these two key aspects of parenting can have very harmful
            effects on children and their future conduct. Children who grow up
            in households where there is too much or too little of one trait (or
            even worse, no recognizable presence of either), tend to have
            difficulty with social adjustment and often show poor academic
            performance. Furthermore, they are at risk of developing low
            self-esteem and disciplinary problems, which often filter into more
            serious conditions when they reach adulthood in the form of
            depression and anxiety.
          </p>
          <div className="button-test-page">
            <button
              type="submit"
              className="btn btn-success button-page"
              onClick={this.startTestFunc}
            >
              Take a test
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="container-test">
        <div className="heading-test">
          <h1>Personality Test</h1>
        </div>
        <Question
          handleOptionClick={this.handleOptionClick}
          handleNext={this.handleNext}
          handleBack={this.handleBack}
          handleSubmit={this.handleSubmit}
          question={`Question: ${currentQuestion.question}`}
          option1={`${currentQuestion.optionA}`}
          option2={`${currentQuestion.optionB}`}
          option3={`${currentQuestion.optionC}`}
          option4={`${currentQuestion.optionD}`}
          answered={questionsAnswered}
          progress={(questionsAnswered / 10) * 100}
          index={currentQuestionIndex}
          total="10"
        />
      </div>
    );
  }
}

export default PersonalityTest;
