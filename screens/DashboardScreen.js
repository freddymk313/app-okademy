import React, { useRef } from 'react';
import { View, Text, ScrollView, StatusBar, Animated, StyleSheet } from 'react-native';
import Categories from '../components/Categories';
import BestCourses from '../components/BestCourses';
import Header from '../components/Header';

const DashboardScreen = () => {
  // const scrollY = useRef(new Animated.Value(0)).current; 

  // const headerTranslateY = scrollY.interpolate({ 
  //   inputRange: [0, 100],
  //   outputRange: [0, -100], // Adjust this value based on your header height
  //   extrapolate: 'clamp',
  // });

  return (
    <View>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <Animated.View>
        <Header />
      </Animated.View>
      <ScrollView
        // style={styles.scrollView}
        // contentContainerStyle={styles.scrollContent}
        // onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })}
        // scrollEventThrottle={16}
      >
        <Categories />
        <BestCourses />
      </ScrollView>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   header: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     zIndex: 1000,
//     elevation: 1000,
//     backgroundColor: '#fff',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//     paddingTop: StatusBar.currentHeight || 0, // Adjust for status bar height
//   },
//   scrollView: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0, // Adjust for status bar height
//   },
//   scrollContent: {
//     paddingTop: 200, // Adjust this based on your header and other content heights
//   },
// });

export default DashboardScreen;
