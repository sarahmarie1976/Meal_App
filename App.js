import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverViewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen'
import FavContextProvider from './store/context/favorites-context';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return(
    <Drawer.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#222324' },
      headerTintColor: 'whitesmoke',
      sceneContainerStyle: { backgroundColor: '#000000'},
      drawerContentStyle: { backgroundColor: '#222324'},
      drawerInactiveTintColor: 'whitesmoke',
      drawerActiveTintColor: '#a2a7aa',
       
    }} >
      <Drawer.Screen 
        name='Categories' 
        component={CategoriesScreen} 
        options={{
          title: 'All Categories',
          drawerIcon: ({color, size}) => 
            <Ionicons name="list" color={color} size={size} />
        }}
      />
      <Drawer.Screen 
        name='Favorites'  
        component={FavoritesScreen} 
        options={{
          drawerIcon: ({color, size}) => 
            <Ionicons name="star" color={color} size={size} />
        }}
        
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <FavContextProvider >
      <NavigationContainer  >
        <Stack.Navigator screenOptions={{
          title: 'All Categories',
          headerStyle: { backgroundColor: '#222324' },
          headerTintColor: 'whitesmoke',
          contentStyle: { backgroundColor: '#000000'}
          }}  
        >
          <Stack.Screen 
            name='DrawerScreen' 
            component={DrawerNavigator}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen 
            name="MealsOverview"
            component={MealsOverviewScreen}
          />

          <Stack.Screen 
            name="MealDetail"
            component={MealDetailScreen}
            options={{
              title: 'Meal Instructions'
            }}
          />
        
        </Stack.Navigator>
        
      </NavigationContainer>
      </FavContextProvider>
    </>  
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
})