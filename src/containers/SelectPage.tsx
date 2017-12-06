import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../actions/modelActions";
import DropdownList from "../components/shared/DropDownList";

export class SelectPage extends React.Component {
  state = {
    makeId: -1,
    modelId: -1,
  };

  getModelsForMake = e => {
    const makeId = this.state.makeId;
    this.props.actions.getModels(makeId);
  }

  gotoDetail = () => {
    const modelId = this.state.modelId;
    this.props.history.push(`/make/model/${modelId}`);
  }

  render() {
    return (
      <div>
        <DropdownList
          id="makeList"
          dataSource={this.props.makes}
          name="Car Makes List"
          value="id"
          text="name"
          size="300"
          onchange={(e) => this.setState({makeId: e.target.value})}
        />
        <DropdownList
          id="modelList"
          dataSource={this.props.models}
          name="Car Models List"
          value="id"
          text="name"
          size="300"
          onchange={(e) => this.setState({modelId: e.target.value})}
        />
        <button onClick={this.gotoDetail}>Search</button>
      </div>
    );
  }
}

SelectPage.propTypes = {
  actions: PropTypes.object.isRequired,
  makes: PropTypes.array,
  models: PropTypes.array,
};

function mapStateToProps(state: any) {
  return {
    makes: state.makes,
    models: state.models,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectPage);
