import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    marginTop: 10,
    fontSize: 14,
  },
});

export function NewsFullItem({ route }) {
  const { title, text, comments } = route.params;

  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "news", title: "Читать" },
    { key: "comments", title: "Комментарии" },
  ]);

  const renderScene = SceneMap({
    news: () => (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    ),
    comments: () => (
      <FlatList
        keyExtractor={(commentItem) => commentItem.id}
        data={comments}
        renderItem={({ item: comment }) => {
          const { name, text } = comment;

          return (
            <View style={styles.container}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.text}>{text}</Text>
            </View>
          );
        }}
      />
    ),
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}
