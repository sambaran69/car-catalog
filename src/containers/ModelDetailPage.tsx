import * as React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../actions/modelActions";
import ModelDetail from "../components/ModelDetail";

export class ModelDetailPage extends React.Component {

  async componentDidMount() {
    const modelId = this.props.match.params.id;
    this.props.actions.getModel(modelId);
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
  model: PropTypes.object.isRequired,
};

function mapStateToProps(state: any) {
  return {
    model: state.model.currentModelDetail,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    getModel: modelId => dispatch(actions.getModelById(modelId)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModelDetailPage);
