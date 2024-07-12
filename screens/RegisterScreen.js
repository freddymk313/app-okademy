import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import tw from 'twrnc';

export default function RegisterScreen({ navigation }) {
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      {/* Header */}
      <View style={tw`p-4`}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="blue" />
          <Text style={tw`text-blue-600 ml-1`}>Back</Text>
        </TouchableOpacity>
      </View>

      {/* Form Connexion */}
      <View style={tw`flex-1 justify-center px-6`}>
        <Text style={tw`text-2xl font-bold`}>Inscription</Text>

        {/* Login with email and password */}
        <View style={tw`mb-6`}>
          <View style={tw`mb-4`}>
            <Text style={tw`mb-2`}>Email</Text>
            <TextInput
              placeholder="eddymk@gmail.com"
              style={tw`py-3 px-4 w-full border border-gray-300 rounded-md`}
            />
          </View>
          <View>
            <Text style={tw`mb-2`}>Mot de passe</Text>
            <TextInput
              placeholder="***********"
              secureTextEntry
              style={tw`py-3 px-4 w-full border border-gray-300 rounded-md`}
            />
          </View>
        </View>

        {/* Login with Google and Facebook */}
        <View style={tw`flex-row justify-between mb-6`}>
          <TouchableOpacity style={tw`flex-1 p-2 border border-gray-300 rounded-md mr-2`}>
            <Text style={tw`text-center font-bold`}>G</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`flex-1 p-2 border border-gray-300 rounded-md ml-2`}>
            <Text style={tw`text-center font-bold`}>F</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Section */}
      <View style={tw`w-full p-6`}>
        <Text style={tw`text-center mb-4`}>
          Vous avez déjà un compte?{" "}
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={tw`text-green-800`}>Connexion</Text>
          </TouchableOpacity>
        </Text>

        <TouchableOpacity
          style={tw`bg-gray-950 border border-gray-950 w-full py-4 rounded-md`}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={tw`text-white text-lg text-center`}>Connexion</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
