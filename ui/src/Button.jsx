import React from 'react';
import { kebabCase } from '@codebelt/util/src/stringUtil';

export const Button = props => {
  const kebabCaseName = kebabCase(props.name);

  return <button onClick={() => alert('Robert is Cool')}>{kebabCaseName}</button>;
};
