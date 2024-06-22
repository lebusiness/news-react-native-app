import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { News } from "../../entities/news/ui/News";
import { NewsFullItem } from "../../entities/news/ui/NewsFullItem";

const Stack = createNativeStackNavigator();

export function NewsPage() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={"Все новости"} component={News} />
      <Stack.Screen name={"Новость"} component={NewsFullItem} />
    </Stack.Navigator>
  );
}
