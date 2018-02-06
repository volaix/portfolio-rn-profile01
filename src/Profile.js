import React from 'react'
import { Text, View, Image } from 'react-native';


class Profile extends React.Component {
  render() {
    return (
      <View style={{ width: '80%' }}>
              <Image
          style={{width: '100%', height: 300, marginBottom: 20, borderRadius: 20, marginTop: 15}}
          resizeMode='cover'
          source={require('./images/gabriel-silverio-221749-02.jpg')}
          
        />
          <View style={{marginBottom: 20}}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 24, color: 'white', fontWeight: "800" }}>Theresa</Text>
              <Text style={{ fontSize: 24, color: 'green', fontWeight: "800" }}>84%</Text>
            </View>
            <Text style={{ color: 'grey' }}>0.8 km</Text>
          </View>
          <Text style={{ color: 'white' }}>100% Italian, fun loving, affectionate, young lady who knows what it takes to make a relationship work.</Text>
        </View>
    )
  }
}

export default Profile