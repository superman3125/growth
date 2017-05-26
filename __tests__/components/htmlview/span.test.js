import { Text } from 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import Span from '../../../src/components/htmlview/Span';

it('renders correctly', () => {
  // eslint-disable-next-line no-unused-vars
  const span = renderer.create(
    <Span component={<Text>2333</Text>} />,
  );
  const spanJson = span.toJSON();
  expect(spanJson).toMatchSnapshot();
});