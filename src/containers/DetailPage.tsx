import * as React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../actions/modelActions";
import ModelDetail from "../components/ModelDetail";

export class DetailPage extends React.Component {

  async componentDidMount() {
    const modelId = this.props.match.params.id;
    this.props.getModel(modelId);
  }

  render() {
    return (
      <ModelDetail
        model={this.props.model}
      />
    );
  }
}

DetailPage.propTypes = {
  actions: PropTypes.object.isRequired,
  car: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    model: state.model.currentModelDetail,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getModel: modelId => dispatch(actions.getModelById(modelId)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailPage);
