import React from 'react'
import { Text, View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements'

const ToggleButton = (props) => {
  return (
    <View style={{ marginLeft: 20, width: '100%', alignItems: 'center' }}>
      <Button 
      title={props.title} 
      borderRadius={20}
      fontSize={14}
      fontWeight={'700'}
      buttonStyle={{height:35}}
      containerViewStyle={{ borderRadius: 10, marginLeft: 4, marginRight: 4, marginBottom: 15, width: 130}}
      onPress={ () => props.onPress(props.title) }
      outline={!props.toggle}
      backgroundColor={'rgba(209,109,138,1)'}
      />
    </View>
  )

}

export default ToggleButton