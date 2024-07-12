import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

const categories = [
  {
    title: "Design Graphique",
    image: "https://www.asu.edu.bh/wp-content/uploads/2023/02/graphic-designer-job-description.webp",
  },
  {
    title: "Business en ligne",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_mnCmiJcZtHYQCLKM9OMej9iI1F2H5QzKeA&s",
  },
  {
    title: "Marketing Digital",
    image: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/04/106032482.jpeg?auto=format&q=60&fit=max&w=930",
  },
  {
    title: "Systèmes Informatiques",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_mnCmiJcZtHYQCLKM9OMej9iI1F2H5QzKeA&s",
  },
  {
    title: "Microsoft Office",
    image: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/04/106032482.jpeg?auto=format&q=60&fit=max&w=930",
  },
  {
    title: "Communication",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_mnCmiJcZtHYQCLKM9OMej9iI1F2H5QzKeA&s",
  },
];

export default function Categories() {
  return (
    <View style={tw`px-4 py-3`}>
      <Text style={tw`text-base font-bold pb-2`}>
        Que voulez-vous apprendre aujourd'hui?
      </Text>
      <View style={tw`relative`}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`space-x-4`}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.title}
              style={[tw`bg-white shadow-xl rounded-lg overflow-hidden`, { minWidth: 200, maxWidth: 200 }]}
            >
              <Image
                source={{ uri: category.image }}
                style={tw`w-full h-28 object-cover`}
              />
              {/* <View style={tw`p-4`}>
                <Text style={tw`text-lg font-semibold`}>{category.title}</Text>
              </View> */}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
