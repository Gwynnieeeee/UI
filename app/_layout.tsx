import { createNativeStackNavigator} from '@react-navigation/native-stack'
import index from './index'

const Stack = createNativeStackNavigator()

export default function RootLayout() {
  return (
    <Stack.Navigator initialRouteName='index' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='index' component={index} />
    </Stack.Navigator>
  );
}
