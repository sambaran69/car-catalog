import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../actions/modelActions";
import Home from "../components/Home";

export class HomePage extends React.Component {

  async componentDidMount() {
    this.props.actions.getCarOfWeek();
  }

  render() {
    return (
      <div>
      <Home
        carOfWeek={this.props.carOfWeek}
      />
      </div>
    );
  }
}

HomePage.propTypes = {
  actions: PropTypes.object.isRequired,
  currentCarDetail: PropTypes.object.isRequired,
  carOfWeek: PropTypes.object.isRequired,
};

function mapStateToProps(state: any) {
  return {
    currentCarDetail: state.model.currentCarDetail,
    carOfWeek: state.model.carOfWeek,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    getCarOfWeek: () => dispatch(actions.getCarOfWeek()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);