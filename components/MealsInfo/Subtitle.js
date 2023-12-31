import { View, Text, StyleSheet } from 'react-native';

function Subtitle({children}) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: 'whitesmoke',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitleContainer: {
    padding: 8,
    marginHorizontal: 25,
    marginVertical: 4,
    borderBottomColor: 'whitesmoke',
    borderBottomWidth: 2,
  },
});