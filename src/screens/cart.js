import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  Image,
  Button,
} from 'react-native';
import Icons from '../assets/icons';
import Product from '../components/product';
import Images from '../assets/images';

const windowWidth = Dimensions.get('window').width;
const productsData = [
  {name: 'Kaban', piece: 3, total: 150, image: Images.urun1},
  {name: 'Kazak', piece: 1, total: 80, image: Images.urun2},
  {name: 'Mont', piece: 2, total: 50, image: Images.urun3},
  {name: 'Etek', piece: 5, total: 30, image: Images.urun4},
];

const Card = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState(productsData);

  const azalt = index => {
    const updatedProducts = products.map((product, i) =>
      i === index && product.piece > 0
        ? {...product, piece: product.piece - 1}
        : product,
    );
    setProducts(updatedProducts);
  };

  const arttir = index => {
    const updatedProducts = products.map((product, i) =>
      i === index ? {...product, piece: product.piece + 1} : product,
    );
    setProducts(updatedProducts);
  };

  useEffect(() => {
    const total = products.reduce(
      (sum, product) => sum + product.piece * product.total,
      0,
    );
    setTotalPrice(total);
  }, [products]);

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'space-between'}}>
      {/* Header */}
      <View
        style={{
          width: windowWidth,
          height: 70,
          alignItems: 'center',
          padding: 10,
          flexDirection: 'row',
        }}>
        <Image source={Icons.back} style={{width: 30, height: 30}} />
        <View style={{marginLeft: 20}}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>My Cart</Text>
        </View>
      </View>

      {/* Product List */}
      <View style={{alignItems: 'center'}}>
        {products.map((product, index) => (
          <Product
            key={index}
            image={product.image}
            name={product.name}
            color="Black"
            size="L"
            price={product.total}
            piece={product.piece}
            azalt={() => azalt(index)}
            arttir={() => arttir(index)}
          />
        ))}
      </View>

      {/* Total Section */}
      <View
        style={{
          width: windowWidth,
          height: 150,
          backgroundColor: 'white',
          elevation: 5,
          shadowColor: 'black',
          padding: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text>Total</Text>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>${totalPrice}</Text>
        </View>

        {/* Check Out Button */}
        <View style={{marginTop: 20}}>
          <Button
            title="Check Out"
            onPress={() => {
              alert(`Total Price: $${totalPrice}`);
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Card;
