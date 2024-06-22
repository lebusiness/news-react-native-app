import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  }, 
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  text: {
    marginTop: 6,
  },
  line: {
    marginTop: 10,
    height: 1,
    backgroundColor: "#DDD",
  },
});

export function NewsItem({ title, text, onClick }) {
  return (
    <TouchableOpacity onPress={() => onClick()}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
        <View style={styles.line}></View>
      </View>
    </TouchableOpacity>
  );
}
