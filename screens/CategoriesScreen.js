import { FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function rendeCategoryItem(itemData) {
    return(
        <CategoryGridTile 
          title={itemData.item.title} 
          color={itemData.item.color}
        />
    )
}

function CategoriesScreen() {
    return(
        <FlatList 
            data={CATEGORIES} 
            keyExtractor={(item) => item.id } 
            renderItem={rendeCategoryItem} 
        />
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({})