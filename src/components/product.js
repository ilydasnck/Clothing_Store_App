import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
const windowWidth = Dimensions.get('window').width;

const product = ({name, color, size, price, image, piece, azalt, arttir}) => {


  return (
    <View
      style={{
        width: windowWidth * 0.9,
        height: 130,
        backgroundColor: 'white',
        justifyContent: 'center',
        padding: 10,
        elevation: 5,
        shadowColor: 'grey',
        marginBottom:15,
      }}>
      <View style={{flexDirection: 'row'}}>
        <View style={{marginTop:10}}> 
          <Image source={image} style={styles.image} />
        </View>
        <View style={{padding: 15}}>
          <View>
            <Text style={{fontSize: 20}}>{name}</Text>
          </View>
          <View>
            <Text style={{color: 'grey'}}>
              {color} - {size}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: 240,
              height: 40,
            }}>
            <View style={{marginTop: 10, justifyContent: 'center'}}>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>${price*piece}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View>
                <TouchableOpacity onPress={() => azalt()}>
                  <View
                    style={{
                      width: 20,
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 30}}>-</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 40,
                }}>
                <Text style={{fontSize: 15}}>{piece}</Text>
              </View>
              <View>
                <TouchableOpacity onPress={() => arttir()}>
                  <View
                    style={{
                      width: 20,
                      alignItems: 'center',
                      marginTop:10
                    }}>
                    <Text style={{fontSize: 15}}>+</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
    elevation: 5,
    shadowColor: 'grey',
  },
});

export default product;
