import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import Home from './src/screens/Home';
import CategoryDetail from './src/screens/CategoryDetail';
import MealDetail from './src/screens/MealDetail';
import FavoritesScreen from './src/screens/FavoritesScreen';
import { FavoritesContextProvider } from './src/store/favoritesContext';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const SCREEN_OPTIONS = {
  headerStyle: { backgroundColor: '#351401' },
  headerTintColor: 'white',
  contentStyle: { backgroundColor: '#3f2f25' },
  sceneContainerStyle: { backgroundColor: '#3f2f25' },
};

const drawerIcon = (name) => ({
  drawerIcon: ({ color, size }) => <Ionicons name={name} color={color} size={size} />,
});

function Root() {
  return (
    <Drawer.Navigator screenOptions={SCREEN_OPTIONS}>
      <Drawer.Screen name="Home" component={Home} options={{ ...drawerIcon('home') }} />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{ ...drawerIcon('star') }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoritesContextProvider>
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
      </FavoritesContextProvider>
    </>
  );
}
