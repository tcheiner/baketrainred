import { Link, Tabs } from 'expo-router'
import { Button, useTheme } from 'tamagui'
import { Atom, Flower, AlarmCheck, Baby, BarChartBig, House} from '@tamagui/lucide-icons'

export default function TabLayout() {
  const theme = useTheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.blue10.val,
        tabBarStyle: {
          backgroundColor: theme.background.val,
          borderTopColor: theme.borderColor.val,
        },
        headerStyle: {
          backgroundColor: theme.background.val,
          borderBottomColor: theme.borderColor.val,
        },
        headerTintColor: theme.color.val,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Atom color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Button mr="$4" bg="$brown8" color="$purple12">
                Login
              </Button>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="pomodoro"
        options={{
          title: 'Pomodoro',
          tabBarIcon: ({ color }) => <AlarmCheck color={color} />,
        }}
      />
        <Tabs.Screen
            name="meditate"
            options={{
                title: 'Meditate',
                tabBarIcon: ({ color }) => <Flower color={color} />,
            }}
        />
        <Tabs.Screen
            name="charts"
            options={{
                title: 'Charts',
                tabBarIcon: ({ color }) => <BarChartBig color={color} />,
            }}
        />
        <Tabs.Screen
            name="profile"
            options={{
                title: 'Profile',
                tabBarIcon: ({ color }) => <Baby color={color} />,
            }}
        />
    </Tabs>
  )
}
