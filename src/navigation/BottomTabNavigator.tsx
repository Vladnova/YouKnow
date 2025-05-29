import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '@/src/screens/HomeScreen';
import ContentScreen from '@/src/screens/ContentScreen';

const Tabs = createBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name='home' component={HomeScreen}/>
      <Tabs.Screen name='content' component={ContentScreen}/>
    </Tabs.Navigator>
  )
}

export default BottomTabNavigator
