import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './src/screens/Home';
import CategoryDetail from './src/screens/CategoryDetail';
import MealDetail from './src/screens/MealDetail';
import FavoritesScreen from './src/screens/FavoritesScreen';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const SCREEN_OPTIONS = {
  headerStyle: { backgroundColor: '#351401' },
  headerTintColor: 'white',
  contentStyle: { backgroundColor: '#3f2f25' },
  sceneContainerStyle: { backgroundColor: '#3f2f25' },
};

function Root() {
  return (
    <Drawer.Navigator screenOptions={SCREEN_OPTIONS}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={SCREEN_OPTIONS}>
          <Stack.Screen
            name="Root"
            component={Root}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="CategoryDetail" component={CategoryDetail} />
          <Stack.Screen
            name="MealDetail"
            component={MealDetail}
            options={{
              title: 'About the Meal',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
