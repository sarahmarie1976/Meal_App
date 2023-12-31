import { useContext, useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealsInfo/Subtitle";
import List from "../components/MealsInfo/List";
import { Ionicons } from '@expo/vector-icons';
import IconButton from "../components/IconButton";
import { FavoritesContext } from '../store/context/favorites-context';

function MealDetailScreen({ route, navigation }) {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      favoriteMealsCtx.removeFavorite(mealId);
    } else {
      favoriteMealsCtx.addFavorite(mealId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? 'star' : 'star-outline'}
            color="whitesmoke"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);
 

    return(
        <ScrollView style={styles.container} >
          <Image style={styles.image} source={{uri: selectedMeal.imageUrl}} />
          <Text style={styles.title} >{selectedMeal.title}</Text>
          <MealDetails
            duration={selectedMeal.duration} 
            complexity={selectedMeal.complexity} 
            affordability={selectedMeal.affordability} 
            textStyle={styles.detailText}
          />
          <View style={styles.listOuterContainer} >
            <View style={styles.listContainer} >
              <Subtitle >Ingredients</Subtitle>
                <List data={selectedMeal.ingredients} />
              <Subtitle >Steps</Subtitle>
                <List data={selectedMeal.steps} />
            </View>
           </View>
          
        </ScrollView>
    )
}

export default MealDetailScreen 

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 40,
  },
   image: {
    width: '100%',
    height: 350,
   },
   title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'whitesmoke',
    margin: 8,
    textAlign: 'center',
   },
   detailText: {
    color: 'whitesmoke',
   },
   listOuterContainer: {
    alignItems: 'center',
   },
   listContainer: {
    maxWidth: '80%',
   },
})