import { createDrawerNavigator } from "@react-navigation/drawer";

import { NewsPage } from "../../pages/news/News";
import { AboutPage } from "../../pages/about/About";

const Drawer = createDrawerNavigator();

export function AppDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="О нас" component={AboutPage} />
      <Drawer.Screen name="Раздел новости" component={NewsPage} />
    </Drawer.Navigator>
  );
}
