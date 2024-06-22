import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { NewsItem } from "./NewsItem";

const mockNews = [
  {
    title: "Ученые обнаружили новую планету, на которой живут розовые слоны",
    text: "Группа астрономов заявила, что они обнаружили планету, где обитают розовые слоны, которые могут летать. Новость вызвала широкий резонанс в научном сообществе.",
    comments: [{ name: "Иван", text: "Невероятно!" }],
    id: 1,
  },
  {
    title: "В Антарктиде найден остров с горящими ледниками",
    text: "Экспедиция в Антарктиде обнаружила остров, на котором ледники горят, выделяя разноцветные огоньки. Ученые пока не могут объяснить этот феномен.",
    comments: [{ name: "Максим", text: "Супер!" }],
    id: 2,
  },
  {
    title:
      "В Китае открыт ресторан, где готовят блюда из космических ингредиентов",
    text: "Китайские предприниматели запустили ресторан, где повара используют ингредиенты, выращенные на Международной космической станции. Меню включает в себя суп из метеоритов и салат из спутниковых капель.",
    comments: [{ name: "Павел", text: "Поеду туда!" }],
    id: 3,
  },
  {
    title: "На дне Марианской впадины найдено древнее подводное царство",
    text: "Группа дайверов заявила, что они обнаружили древние руины на дне Марианской впадины, которые свидетельствуют о существовании подводной цивилизации. Ученые выражают сомнения по поводу этого открытия.",
    comments: [{ name: "Анатолий", text: "Сложно поверить!" }],
    id: 4,
  },
  {
    title: "В США появился новый вид крылатых единорогов",
    text: "Фермер из штата Техас заявил, что у него родился новый вид крылатых единорогов, способных летать на расстояние до 100 км. Фермер планирует использовать их для доставки почты.",
    comments: [{ name: "Сергей", text: "Вот бы увидеть!" }],
    id: 5,
  },
  {
    title: "На Марсе найдены древние руины пирамид",
    text: "Космический аппарат NASA обнаружил на Марсе структуры, напоминающие древние пирамиды. Ученые считают, что это может быть связано с древней цивилизацией или признаком действия инопланетян.",
    comments: [{ name: "Борис", text: "Вот оно как!" }],
    id: 6,
  },
];

function getMockNews() {
  return new Promise((res) => {
    setTimeout(() => {
      res(mockNews);
    }, 1000);
  });
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export function News({ navigation }) {
  const [news, setNews] = useState([]);
  const [newsIsLoading, setNewsIsLoading] = useState(false);

  useEffect(() => {
    setNewsIsLoading(true);

    getMockNews().then((fetchingNews) => {
      setNews(fetchingNews);
      setNewsIsLoading(false);
    });
  }, []);

  if (newsIsLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading..</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(newsItem) => newsItem.id}
        data={news}
        renderItem={({ item: newsItem }) => {
          const { title, text, comments } = newsItem;

          return (
            <NewsItem
              title={title}
              text={text}
              onClick={() => navigation.navigate("Новость", { title, text, comments })}
            />
          );
        }}
      />
    </View>
  );
}
