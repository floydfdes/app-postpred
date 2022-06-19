import React from "react";
import { useHistory } from "react-router-dom";
import ClassiicationImage from "../../assets/images/classificationIcon.png";
import PredictionImage from "../../assets/images/predictionIcon.png";
import HobbyImage from "../../assets/images/hobbyIcon.png";
function Main() {
  const history = useHistory();
  return (
    <>
      <div className="row main-page mx-0">
        <div className="main-page-mobile-center main-page-web">
          <h1 className="main-page-heading my-3">
            Hello, Welcome to Postpred.
          </h1>

          <p className="main-page-sub-heading my-0">
            Share your events, memories and hobbies with the world.
          </p>
          <p className="main-page-sub-heading">
            Try out some classification based on machine learning having high
            accuracy.
          </p>
          <div className="my-3 main-page-button-div">
            <a href="#explore" className="btn main-page-button">
              Explore
            </a>
          </div>
        </div>
      </div>

      <div id="explore" className="main-page-card-div mt-4 py-2">
        <div
          className="card m-3 p-3 shadow text-center"
          onClick={() => {
            history.push("/hobbies");
          }}
        >
          <img className="main-page-image" src={HobbyImage} alt="img1" />
          <h3>Posts</h3>
          <p>
            Create a post of your events, memories and hobbies. See what others
            have been upto.
          </p>
        </div>
        <div
          className="card m-3 p-3 shadow text-center"
          onClick={() => {
            history.push("/hearts");
          }}
        >
          <img
            className="main-page-image"
            src={PredictionImage}
            alt="PredictionImage"
          />
          <h3>Prediction</h3>
          <p>
            Check if you have heart disease or not in no time. Get the result by
            only filling few fields.
          </p>
        </div>
        <div
          className="card m-3 p-3 shadow text-center"
          onClick={() => {
            history.push("/mobilenet");
          }}
        >
          <img
            className="main-page-image"
            src={ClassiicationImage}
            alt="ClassiicationImage"
          />
          <h3>Classification</h3>
          <p>
            Capture and classify an image. The outcome is based on tensorflow
            mobilenet model
          </p>
        </div>
      </div>
    </>
  );
}

export default Main;
