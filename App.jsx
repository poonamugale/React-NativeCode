import React from 'react';
import {Text, View, Button} from 'react-native';
import First from './src/components/First';
const App = () => {
  return (
    <View>
      <Text style={{fontSize: 30}}>React Native</Text>
      <Text style={{fontSize: 30}}>First Progrm</Text>
      <Button title="Press here" />
      <First />
    </View>
  );
};

export default App;
