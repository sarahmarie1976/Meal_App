import {
  View, 
  Text, 
  StyleSheet, 
  Platform, 
  Pressable, 
  Image} 
  from 'react-native';
  
  function MealItem({ 
            title, 
            imageUrl, 
            duration, 
            complexity, 
            affordability
           }) 
          {
    return (
      <View style={styles.mealItem } >
        <Pressable 
          android_ripple={{color: '#fcf5e5'}}
          style={({ pressed }) => 
            (styles.button,
            pressed ? styles.buttonPressed : null)}
           >
          <View style={styles.innerContainer} >
            <View >
              <Image source={{uri: imageUrl }} style={styles.image} />
              <Text style={styles.title} >
              {title}
              </Text>
            </View>
            <View style={styles.details} >
              <Text style={styles.detailItem} > {duration} minutes </Text>
              <Text style={styles.detailItem} > {complexity.toUpperCase()} </Text>
              <Text style={styles.detailItem} > {affordability.toUpperCase()} </Text>
            </View>
          </View>
        </Pressable>
       
      </View>
    )
  }
  
  export default MealItem;
  
  const styles = StyleSheet.create({
    mealItem: {
      margin: 16,
      borderRadius: 10,
      overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
      backgroundColor: 'whitesmoke',
      elevation: 6,
      shadowColor: 'black',
      shadowOpacity: 0.35,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    innerContainer: {
      borderRadius: 10,
      overflow: 'hidden',
    },
    buttonPressed: {
      opacity: 0.5,
    },
    image: {
      width: '100%',
      height: 200,
    },
    title: {
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 20,
      margin: 10,
    },
    details: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
    },
    detailItem: {
      marginHorizontal: 4,
      fontSize: 14,
      
      
    },
  });