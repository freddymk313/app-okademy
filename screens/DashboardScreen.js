import React, { useRef } from 'react';
import { View, Text, ScrollView, StatusBar, Animated } from 'react-native';
import tw from 'twrnc';
import Categories from '../components/Categories';
import BestCourses from '../components/BestCourses';
import Header from '../components/Header';

const DashboardScreen = () => {
  const scrollY = useRef(new Animated.Value(0)).current; 

  const headerTranslateY = scrollY.interpolate({ 
    inputRange: [0, 100],
    outputRange: [0, -100], // Adjust this value based on your header height
    extrapolate: 'clamp',
  });

  return (
    <View style={tw`flex-1 bg-white`}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <Animated.View style={[tw`absolute w-full z-50`, { transform: [{ translateY: headerTranslateY }] }]}>
        <Header />
      </Animated.View>
      <ScrollView
        style={tw`flex-1 mt-${StatusBar.currentHeight || 0}`}
        contentContainerStyle={tw`pt-32`} // Adjust this based on your header and other content heights
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })}
        scrollEventThrottle={16}
      >
        <Categories />
        <BestCourses />
      </ScrollView>
    </View>
  );
};

export default DashboardScreen;
