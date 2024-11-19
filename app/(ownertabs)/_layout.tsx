import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { OwnerTabParamList} from '@/types/types';
import home from './home';
import create from './create';
import history from './history';
import Statistic from './statistic';

const Tab = createBottomTabNavigator<OwnerTabParamList>();

const OwnerTabLayout: React.FC = () => {

  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#76b852',
        tabBarInactiveTintColor: '#ddd',
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingBottom: 5,
          height: 80,
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          elevation: 0,
          borderTopWidth: 1,
          borderTopColor: "#ddd",
        },
        tabBarItemStyle: {
          paddingBottom: 10,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="home"
        component={home}
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused, size }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="create"
        component={create}
        options={{
          title: '',
          tabBarIcon: ({ color, focused, size }) => (
            <TabBarIcon name={focused ? 'add-circle' : 'add-circle-outline'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="history"
        component={history}
        options={{
          title: 'History',
          tabBarIcon: ({ color, focused, size }) => (
            <TabBarIcon name={focused ? 'time' : 'time-outline'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="statistic"
        component={Statistic}
        options={{
          title: 'Account',
          tabBarIcon: ({ color, focused, size }) => (
            <TabBarIcon name={focused ? 'people-circle' : 'people-circle-outline'} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default OwnerTabLayout;