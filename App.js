import { NavigationContainer } from '@react-navigation/native';
import { AppDrawer } from './ui/app/routes/Drawer';

export default function App() {
  return (
    <NavigationContainer>
      <AppDrawer />
    </NavigationContainer>
  );
}