import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { bestCourses, getImage } from '../constants';

export default function BestCourses() {
  return (
    <ScrollView className="bg-gray-100 py-">
      <View className="px-4 lg:px-20">
        <Text className="text-center mb-4 pt-7 py-2 text-lg font-bold">
          Les meilleurs cours
        </Text>
        {bestCourses.map((course, idx) => (
          <View key={idx} className="bg-white rounded-lg mb-4 overflow-hidden shadow-md">
            <View>
              <View className="relative">
                <Text className="absolute z-10 top-2 right-2 bg-white p-1 rounded text-sm">
                  {course.price}
                </Text>
                <Image
                  source={getImage(course.img)}
                  className="w-full h-40 object-cover"
                />
              </View>
              <View className="p-4">
                <View className="mb-2">
                  <Text className="bg-green-600 text-white px-2 py-1 rounded text-xs">
                    {course.level}
                  </Text>
                </View>
                <Text className="text-base font-semibold">{course.title}</Text>
                <View className="flex-row items-center mt-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Icon
                      key={index}
                      name="star"
                      size={20}
                      color={index < course.rating ? '#ffc107' : '#d1d5db'}
                    />
                  ))}
                  <Text className="ml-2 text-xs text-gray-700">
                    ({course.rating}) ({course.comments} Commentaires)
                  </Text>
                </View>
                <View className="flex-row justify-between items-center mt-3">
                  <Image
                    source={{ uri: course.instructorImg }}
                    className="rounded-full h-8 w-8"
                  />
                  <TouchableOpacity className="flex-row items-center gap-x-1 bg-green-100 p-1 px-1.5 rounded-lg">
                    <Icon name="retweet" size={20} color="#10b981" />
                    <Text className="text-xs text-green-900">Comparer</Text>
                  </TouchableOpacity>
                </View>
                <View className="flex-row justify-between items-center text-gray-700 border-t mt-3 pt-3">
                  <View className="flex-row items-center">
                    <Icon name="clock-o" size={20} color="#ef4444" />
                    <Text className="ml-1 text-xs">{course.hours} Les heures</Text>
                  </View>
                  <View className="flex-row items-center">
                    <Icon name="list-alt" size={20} color="#3b82f6" />
                    <Text className="ml-1 text-xs">{course.lectures} Lectures</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
