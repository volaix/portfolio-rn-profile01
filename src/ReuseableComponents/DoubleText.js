import React from 'react'
import { Text, View } from 'react-native';

const DoubleText = (props) => {

  return (
    <View style={{ flexDirection: 'row', marginBottom: 10 }}>

      <Text style={{
        alignItems: 'flex-end',
        color: 'rgba(106,103,116,1)',
        fontSize: 15,
        fontWeight: '700',
      }}>{props.category}: </Text>

      <Text style={{ 
        alignItems: 'flex-start',
         color: 'white',
         fontWeight: '700',
         }}>{props.result}</Text>
    </View>
  )

}

export default DoubleText