import React from "react";
import PropTypes from "prop-types";

import MarkerStyled from "./MarkerStyled";
import MarkerInGroupStyled from "./MarkerInGroupStyled";
import Spy from "../Spy";

class Marker extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  static defaultProps = {
    inGroup: false,
  };
  // componentDidMount() {
  //   console.log(this.props);
  // }

  render() {
    return (
      <div>
        {this.props.inGroup ? (
          <MarkerInGroupStyled>
            <Spy
              data={this.props}
              scale="0.55"
              // name={this.props.pData.userName}
              // photo={this.props.pData.photo}
            />
          </MarkerInGroupStyled>
        ) : (
          <MarkerStyled>
            <Spy scale="0.55" data={this.props} />
          </MarkerStyled>
        )}
      </div>
    );
  }
}

Marker.propTypes = {
  inGroup: PropTypes.bool,
};

export default Marker;
