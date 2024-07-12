import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import tw from 'twrnc';
import { bestCourses, getImage } from '../constants';

export default function BestCourses() {
  return (
    <ScrollView style={tw`bg-gray-100 py-2`}>
      <View style={tw`px-4 lg:px-20`}>
        <Text style={tw`text-center mb-4 pt-7 py-2 text-lg font-bold`}>
          Les meilleurs cours
        </Text>
        {bestCourses.map((course, idx) => (
          <View key={idx} style={tw`bg-white rounded-lg mb-4 overflow-hidden shadow-md`}>
            <View>
              <View style={tw`relative`}>
                <Text style={tw`absolute z-10 top-2 right-2 bg-white p-1 rounded text-sm`}>
                  {course.price}
                </Text>
                <Image
                  source={getImage(course.img)}
                  style={tw`w-full h-40 object-cover`}
                />
              </View>
              <View style={tw`p-4`}>
                <View style={tw`mb-2`}>
                  <Text style={tw`bg-green-600 text-white px-2 py-1 rounded text-xs`}>
                    {course.level}
                  </Text>
                </View>
                <Text style={tw`text-base font-semibold`}>{course.title}</Text>
                <View style={tw`flex-row items-center mt-2`}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Icon
                      key={index}
                      name="star"
                      size={20}
                      color={index < course.rating ? '#ffc107' : '#d1d5db'}
                    />
                  ))}
                  <Text style={tw`ml-2 text-xs text-gray-700`}>
                    ({course.rating}) ({course.comments} Commentaires)
                  </Text>
                </View>
                <View style={tw`flex-row justify-between items-center mt-3`}>
                  <Image
                    source={{ uri: course.instructorImg }}
                    style={tw`rounded-full h-8 w-8`}
                  />
                  <TouchableOpacity style={tw`flex-row items-center gap-x-1 bg-green-100 p-1 px-1.5 rounded-lg`}>
                    <Icon name="retweet" size={20} color="#10b981" />
                    <Text style={tw`text-xs text-green-900`}>Comparer</Text>
                  </TouchableOpacity>
                </View>
                <View style={tw`flex-row justify-between items-center text-gray-700 border-t mt-3 pt-3`}>
                  <View style={tw`flex-row items-center`}>
                    <Icon name="clock-o" size={20} color="#ef4444" />
                    <Text style={tw`ml-1 text-xs`}>{course.hours} Les heures</Text>
                  </View>
                  <View style={tw`flex-row items-center`}>
                    <Icon name="list-alt" size={20} color="#3b82f6" />
                    <Text style={tw`ml-1 text-xs`}>{course.lectures} Lectures</Text>
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
