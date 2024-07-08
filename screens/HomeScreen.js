import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Button,
  Pressable,
} from "react-native";
// import { useNavigation } from "@react-navigation/native";

export default function HomeScreen({ navigation }) {
  console.log("HomeScreen rendered"); // Vérifier que l'écran se rend correctement
  // const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white">
      <View className="flex-1 justify-center items-center px-4">
        <Image
          source={{ uri: "https://okademy.africa/uploads/system/sign_up.png" }}
          style={{ width: 380, height: 300, marginBottom: 20 }}
        />

        <Image
          source={{
            uri: "https://okademy.africa/uploads/system/dddaf91164d007d90eb156aadb9ae95e.png",
          }}
          style={{ width: 300, height: 50, marginBottom: 30 }}
          className="max-h-20 min-w-20"
        />

        <Text className="text-xl">Bienvenue sur Okademy</Text>
        <Text className="text-center">
          Obtenez des nouvelles compétences, changez votre avenir.
          Inscrivez-vous dès maintenant.
        </Text>
      </View>

      <View className="flex-row items-center justify-between w-full p-4">
        <TouchableOpacity
          className="bg-gray-950 border border-gray-950 w-[48%] p-4 rounded-md"
          onPress={() => {
            console.log("Navigate to Register"); // Vérifier que le bouton est pressé
            navigation.navigate("Register");
          }}
        >
          <Text className="text-white text-lg text-center">S'inscrire</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="border border-gray-950 p-4 rounded-md w-[48%]"
          onPress={() => {
            console.log("Navigate to Register");
            navigation.navigate("Login");
          }}
        >
         <Text className="text-lg text-center">Connexion</Text> 
        </TouchableOpacity>
      </View>
    </View>
  );
}
