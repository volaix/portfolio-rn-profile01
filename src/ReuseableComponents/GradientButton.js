// import LinearGradient from 'react-native-linear-gradient';
import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View, Alert } from 'react-native';
import { LinearGradient } from 'expo';

const GradientButton = (props) => {
  return (
    // Within your render function
    <TouchableOpacity
    onPress={props.onPress}
    >
      <LinearGradient
        colors={['rgba(241,70,60,1)', 'rgba(246,146,39,1)']}
        style={{
          paddingLeft: 15,
          paddingRight: 15,
          borderRadius: 20,
          width: 340,
          height: 50,
          justifyContent: 'center',
          marginBottom: 40,
        }}
        start={[0, 0]}
        end={[1, 0]}
      >
        <Text style={{
          fontSize: 20,
          textAlign: 'center',
          margin: 10,
          color: '#ffffff',
          backgroundColor: 'transparent',
          fontWeight: "800",
        }}>
          Message Theresa
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}

export default GradientButton