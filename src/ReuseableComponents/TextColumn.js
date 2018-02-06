import React from 'react'
import { Text, View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements'
import DoubleText from './DoubleText';

const TextColumn = (props) => {
  return (
    <View style={{ marginRight: 20, alignItems: 'center', justifyContent: 'center',
     marginBottom: 20, }}>
      {
        props.data.map((data) => (
          <DoubleText
            key={data.category}
            category={data.category}
            result={data.result}
          />
        ))
      }
    </View>
  )
}

export default TextColumn