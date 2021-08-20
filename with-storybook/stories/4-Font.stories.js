import React, { useEffect, useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import * as Font from 'expo-font';
import { Text } from 'react-native';
import {Applo} from '../../with-apollo/App'

export default {
  title: 'Font',
};

export const CustomFontComponent = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await Font.loadAsync({
        'retro-regular': require('../assets/retro-regular.ttf')
      });
      setLoaded(true);
    })();
  }, []);

  return (
    loaded && (
      <Applo/>
    )
  );
}

// On-Device Register
storiesOf('Font', module).add('Font', () => (<CustomFontComponent/>));
