import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../actions/modelActions";
import Home from "../components/Home";

export class HomePage extends React.Component {

  async componentDidMount() {
    this.props.getCarOfWeek()
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

CarOfWeekPage.propTypes = {
  currentCarDetail: PropTypes.object.isRequired,  
  carOfWeek: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    currentCarDetail: state.model.currentCarDetail,
    carOfWeek: state.model.carOfWeek
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCarOfWeek: () => dispatch(actions.getCarOfWeek())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarOfWeekPage);