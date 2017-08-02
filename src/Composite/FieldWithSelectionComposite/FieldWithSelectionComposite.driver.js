import React from 'react';
import FieldWithSelectionComposite from './FieldWithSelectionComposite';
import ReactDOM from 'react-dom';
import $ from 'jquery';

const fieldWithSelectionCompositeDriverFactory = ({element, wrapper}) => {
  const label = element.querySelector('.label>label');
  const textInput = element.querySelector('input.input') || element.querySelector('textarea');
  const selectionInput = element.querySelector('.StylableCheckBox').childNodes[0];

  return {
    exists: () => !!element,
    getLabel: () => label && label.textContent,
    hasLabel: () => !!label,
    hasInput: () => !!textInput,
    hasSelectionInput: () => !!selectionInput.tagName,
    getAttr: attrName => element.getAttribute(attrName),
    getNumberOfChildren: () => element.childElementCount,
    hasFieldLabelAttributes: () => !!$(element).find('[data-hook="field-label-attributes"]').length,
    setProps: props => {
      ReactDOM.render(<div ref={r => element = r}><FieldWithSelectionComposite {...props}/></div>, wrapper);
    }
  };
};

export default fieldWithSelectionCompositeDriverFactory;
