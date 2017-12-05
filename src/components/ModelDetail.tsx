import * as React from "react";
import { IModelProps } from "../types";

class ModelDetail extends React.Component<IModelProps, {}> {
  render() {
    const model: IModelProps = this.props;
    return (
      <div className="thumbnail paddingtop10">
        <img className="thumbnail-size" src={model.imageUrl} alt={model.name} height="200px" />
        <div className="caption">
          <hr />
          <h3>{model.name}</h3>
          <p>{model.make.name}</p>
          <p>{model.price}</p>
        </div>
      </div>
    );
  }
}

export default ModelDetail;
