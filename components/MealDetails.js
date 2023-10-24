import { StyleSheet, Text, View } from "react-native";


function MealDetails({
    duration,
    complexity,
    affordability,
    style,
    textStyle,
  }) {
    return (
      <View style={[styles.details, style]}>
        <Text style={[styles.detailItem, textStyle]}>{duration} minutes</Text>
        <Text style={[styles.detailItem, textStyle]}>
          {complexity}
        </Text>
        <Text style={[styles.detailItem, textStyle]}>
          {affordability}
        </Text>
      </View>
    );
  }
  

export default MealDetails

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
      },
      detailItem: {
        marginHorizontal: 4,
        fontSize: 14, 
        textTransform: 'uppercase',
      }
})