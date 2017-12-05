import * as React from "react";
import { ICarOfTheWeek } from "../types";

class Home extends React.Component<ICarOfTheWeek, {}> {
  render() {
    const carOfTheWeek: ICarOfTheWeek = this.props;
    return (
      <div>
        <h1>Quantas Car Catalogue</h1>
        {carOfTheWeek !== undefined ? (
          <div>
            <h2>Car of the Week</h2>
            <img src={carOfTheWeek.model.imageUrl} alt={carOfTheWeek.model.name} height="400px" />
            <hr />
            <h3>{carOfTheWeek.model.name}</h3>
            <p>{carOfTheWeek.model.make.name}</p>
            <p>{carOfTheWeek.model.price}</p>
            <hr />
            <h3>Review:</h3>
            <p>{carOfTheWeek.review}</p>
          </div>
        ) : (
          <div>Browser your favourite cars here!</div>
        )}
      </div>
    );
  }
}

export default Home;
