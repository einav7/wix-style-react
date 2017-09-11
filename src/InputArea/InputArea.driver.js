import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import styles from './InputArea.st.css';
import $ from 'jquery';
import {hasCssState} from '../stylable-has-css-state';

const inputAreaDriverFactory = ({element, wrapper, component}) => {
  const $component = $(element);
  const textAreaElement = element && element.childNodes[0];
  const textArea = $component.find('textarea')[0];
  return {
    trigger: (trigger, event) => ReactTestUtils.Simulate[trigger](textArea, event),
    focus: () => textArea.focus(),
    enterText: text => ReactTestUtils.Simulate.change(textArea, {target: {value: text}}),
    getValue: () => textArea.value,
    getPlaceholder: () => textArea.placeholder,
    getDefaultValue: () => textArea.defaultValue,
    getRowsCount: () => textArea.rows,
    getMaxLength: () => textArea.maxLength,
    getTabIndex: () => textArea.tabIndex,
    getReadOnly: () => textArea.readOnly,
    getResizable: () => hasCssState(textAreaElement, styles, {resizable: true}),
    getHasCounter: () => hasCssState(textAreaElement, styles, {hasCounter: true}),
    hasExclamation: () => $component.find(`.${styles.exclamation}`).length === 1,
    hasError: () => hasCssState(textAreaElement, styles, {hasError: true}),
    isFocusedStyle: () => hasCssState(textAreaElement, styles, {hasFocus: true}),
    isHoveredStyle: () => hasCssState(textAreaElement, styles, {hasHover: true}),
    isOfStyle: style => textAreaElement.classList.contains(styles[`theme-${style}`]),
    isFocus: () => document.activeElement === textArea,
    exists: () => !!textArea,
    hasIconLeft: () => !$component.find(`.${styles.prefix}`).is(':empty'),
    getStyle: () => textArea.style,
    getAriaLabel: () => textArea.getAttribute('aria-label'),
    getAriaControls: () => textArea.getAttribute('aria-controls'),
    getAriaDescribedby: () => textArea.getAttribute('aria-describedby'),
    getTooltipDataHook: () => 'inputArea-tooltip',
    getTooltipElement: () => element,
    setProps: props => {
      const ClonedWithProps = React.cloneElement(component, Object.assign({}, component.props, props), ...(component.props.children || []));
      ReactDOM.render(<div ref={r => element = r}>{ClonedWithProps}</div>, wrapper);
    }
  };
};

export default inputAreaDriverFactory;
