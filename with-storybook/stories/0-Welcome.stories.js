import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react-native';
import { Welcome } from '@storybook/react/demo';
import { ApolloProvider, useQuery, gql } from '@apollo/client';
import { Picker } from '@react-native-picker/picker';
export default {
  title: 'Welcome',
};

export const toStorybook = () => <Welcome showApp={linkTo('Button')} />;

toStorybook.story = {
  name: 'to Storybook',
};

// On-Device Register
storiesOf('Welcome', module).add(toStorybook.story.name, toStorybook);
