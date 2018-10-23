// @flow
import React from 'react';
import { Image } from 'react-native';
import * as flags from './flags';

type Props = {
  code: string,
  style?: any,
};

const rectangle = { width: 40, height: 25, borderRadius: 2 };
const square = { marginLeft: 7.5, width: 25, height: 25, borderRadius: 2 };

const squareFlags = ['CH', 'NE', 'NP', 'VA'];

const Flag = ({ code, style }: Props) => {
  const flag = flags[code];
  const unknownFlag = flags['unknown'];

  return (
    <Image
      source={flag || unknownFlag}
      style={[squareFlags.find(i => i === code) ? square : rectangle, style]}
    />
  );
};

export default Flag;
