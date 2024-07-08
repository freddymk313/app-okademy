import React from 'react';
import { View, Image, TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Header = ({ navigation }) => {
  return (
      <View className="px-4 py-2 bg-white w-full flex-row justify-between items-center">
        <View>
          <Image
            source={require('../assets/system/dddaf91164d007d90eb156aadb9ae95e.png')}
            style={{ width: 200, height: 35 }}
            className="-ml-[13px] -mt-1 max-h-8 max-w-xs"
          />
        </View>
        <View className="flex-row">
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Icon name="search" size={23} color="black" style={{ marginRight: 19 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Icon name="shopping-cart" size={23} color="black" />
          </TouchableOpacity>
        </View>
      </View>
  );
};

export default Header;
