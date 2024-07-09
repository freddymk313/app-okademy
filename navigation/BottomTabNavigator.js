import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome6";
import Ionicons from "react-native-vector-icons/Ionicons";
import IconHome from "react-native-vector-icons/MaterialCommunityIcons";
import DashboardScreen from "../screens/DashboardScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import Header from "../components/Header";
import MesCoursScreen from "../screens/MesCoursScreen";

const ProfileContext = React.createContext({
  userProfileImage: null,
  setUserProfileImage: () => {},
});

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  // Exemple d'utilisation du contexte pour obtenir l'image de profil
  const { userProfileImage } = useContext(ProfileContext);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Acceuil") {
            iconName = focused ? "home" : "home-outline";
            return <IconHome name={iconName} size={32} color={color} />;
          } else if (route.name === "Reglages") {
            iconName = focused ? "settings" : "settings-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === "Profile") {
            iconName = userProfileImage
              ? "circle-user"
              : focused
              ? "circle-user"
              : "user-circle";
            return <Icon name={iconName} size={size} color={color} />;
          } else if (route.name === "Mes Cours") {
            iconName = focused ? "book" : "book-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Acceuil"
        component={DashboardScreen}
        options={{
          headerTitle: () => <Header />,
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="Mes Cours"
        component={MesCoursScreen}
        options={{
          tabBarLabel: "Mes Cours",
        }}
      />
      <Tab.Screen name="Reglages" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
