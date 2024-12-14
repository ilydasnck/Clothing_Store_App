import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Touchable,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import Icons from '../assets/icons';
import Images from '../assets/images';

const product = () => {
  const [buttonName, setButtonName] = useState('black');
  const [sizesName, setSizesName] = useState('L');
  const buttons = [
    {renk: 'black', gorsel: Images.urun1},
    {renk: 'grey', gorsel: Images.urun4},
    {renk: 'green', gorsel: Images.urun2},
  ];
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  const selectedImage = buttons.find(
    button => button.renk === buttonName,
  )?.gorsel;

  return (
    <SafeAreaView>
      <View style={Styles.header}>
        <View>
          <Image source={Icons.back} style={{width: 30, height: 30}} />
        </View>
        <View>
          <Image source={Icons.shop} style={{width: 30, height: 30}} />
        </View>
      </View>
      <View style={Styles.product}>
        <View>
          <Image
            source={selectedImage}
            style={{
              width: 420,
              height: 430,
              borderBottomLeftRadius: 40,
              borderBottomRightRadius: 40,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            top: -30,
          }}>
          <View
            style={{
              width: 8,
              height: 8,
              backgroundColor: 'grey',
              borderRadius: 5,
              marginRight: 5,
              elevation: 5,
              shadowColor: 'grey',
            }}></View>
          <View
            style={{
              width: 13,
              height: 13,
              backgroundColor: 'lightgrey',
              borderRadius: 10,
              marginRight: 5,
            }}></View>
          <View
            style={{
              width: 8,
              height: 8,
              backgroundColor: 'grey',
              borderRadius: 5,
            }}></View>
        </View>
      </View>

      <View
        style={{paddingLeft: 20, paddingRight: 20, backgroundColor: 'white'}}>
        <View>
          <Text style={{fontSize: 40, fontWeight: 'bold'}}>Kazak</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View>
            <Text style={{fontSize: 30}}>$80.99</Text>
          </View>
          <View style={{marginLeft: 10}}>
            <Text
              style={{
                textDecorationLine: 'line-through',
                fontSize: 20,
                color: 'lightgrey',
              }}>
              $95.99
            </Text>
          </View>
        </View>
        <View style={{marginTop: 10}}>
          <Text style={{fontWeight: '700', color: 'grey', fontSize: 15}}>
            Colour
          </Text>
        </View>
        <View
          style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
          {buttons.map((button, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setButtonName(button.renk);
                }}
                style={[
                  buttonName == button.renk
                    ? Styles.buttonPressGrey
                    : Styles.buttonUnPressGrey,
                  {backgroundColor: button.renk},
                ]}></TouchableOpacity>
            );
          })}
        </View>

        <View style={{marginTop: 10}}>
          <Text style={{fontWeight: '700', color: 'grey', fontSize: 15}}>
            Size
          </Text>
        </View>
        <View
          style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
          {sizes.map((button, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setSizesName(button);
                }}
                style={[
                  {alignItems: 'center', justifyContent: 'center'},
                  sizesName == button
                    ? Styles.buttonPressSize
                    : Styles.buttonUnPressSize,
                ]}>
                <Text>{button}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={{marginTop: 40}}>
          <Button title="Add to cart" style={{width: 100}} />
        </View>
      </View>
    </SafeAreaView>
  );
};
const Styles = StyleSheet.create({
  buttonUnPressSize: {
    width: 75,
    height: 30,
    backgroundColor: '#E4EAF6',
  },
  buttonPressSize: {
    width: 75,
    height: 30,
    borderWidth: 3,
    borderColor: 'lightblue',
    backgroundColor: '#3E9BF4',
  },
  buttonUnPressGrey: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  buttonPressGrey: {
    width: 20,
    height: 20,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'lightblue',
    marginRight: 10,
    padding: 10,
  },
  header: {
    height: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    alignItems: 'center',
  },
  product: {
    height: 430,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default product;
