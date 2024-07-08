import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="px-1.5 mt-8">
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="chevron-back" size={24} color="black" />
          {/* <Text className="text-blue-600 ml-1">Back</Text> */}
        </TouchableOpacity>
      </View>

      {/* Form Connexion */}
      <View className="flex-1 justify-center p-4">
        <Text className="text-2xl font-bold mb-8">Connexion</Text>

        {/* Login with email and password */}
        <View className="mb-6">
          <View className="mb-4">
            <Text className="mb-2">Email</Text>
            <TextInput
              placeholder="eddymk@gmail.com"
              className="py-3 px-4 w-full border border-gray-300 rounded-md"
            />
          </View>
          <View>
            <Text className="mb-2">Mot de passe</Text>
            <TextInput
              placeholder="***********"
              secureTextEntry
              className="py-3 px-4 w-full border border-gray-300 rounded-md"
            />
          </View>
        </View>

        {/* Login with Google and Facebook */}
        <View className="flex-row justify-between mb-6">
          <TouchableOpacity className="flex-1 p-2 border border-gray-300 rounded-md mr-2">
            <Text className="text-center font-bold">G</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 p-2 border border-gray-300 rounded-md ml-2">
            <Text className="text-center font-bold">F</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Section */}
      <View className="w-full px-4 mb-4">
        <Text className="text-center mb-4 flex flex-row items-center">
          <Text>Vous n'avez pas de compte?</Text>{" "}
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text className="text-green-900">Inscription</Text>
          </TouchableOpacity>
        </Text>

        <TouchableOpacity
          className="bg-gray-950 border border-gray-950 w-full py-4 rounded-md"
          onPress={() => navigation.navigate("Main")}
        >
          <Text className="text-white text-lg text-center">Connexion</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
