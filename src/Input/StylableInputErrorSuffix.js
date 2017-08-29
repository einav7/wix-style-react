import React from 'react';
import PropTypes from 'prop-types';

import Tooltip from '../Tooltip';
import SvgExclamation from '../svg/Exclamation.js';

import {SBComponent as sbcomponent} from 'stylable-react-component';
import styles from './InputErrorSuffix.st.css';
import inputStyles from './Input.st.css';

class InputErrorSuffix extends React.Component {
  render() {
    return (
      <Tooltip
        dataHook="input-tooltip"
        disabled={this.props.errorMessage.length === 0}
        placement="top"
        alignment="center"
        content={this.props.errorMessage}
        overlay=""
        theme="dark"
        hideDelay={150}
        >
        <div className={inputStyles.exclamation}><SvgExclamation width={2} height={11}/></div>
      </Tooltip>
    );
  }
}

InputErrorSuffix.propTypes = {
  theme: PropTypes.oneOf(['normal', 'paneltitle', 'material', 'amaterial']),
  errorMessage: PropTypes.string.isRequired,
  focused: PropTypes.bool
};

export default sbcomponent(InputErrorSuffix, styles);
