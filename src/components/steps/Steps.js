import { stepsList } from "../../data";
import "./steps.css";

const Steps = () => {
  return (
    <div className="steps-container">
      <div className="steps-heading">
        <h1>Steps to be done</h1>
      </div>
      <div className="step-img-container">
        {stepsList.map((step,index) => {
          return (
            <div key={index} className="wrapper-content">
              <img className="step-img" src={step.img} alt="" />
              <span style={{backgroundColor : step.color}} className="step-tag">{step.step}</span>
              <span className="step-title">{step.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Steps;
