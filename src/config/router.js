import { StackNavigator } from 'react-navigation'
import { CreateStory, Home, ShowStory } from '../screens'

export const Navigation = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    }
  },
  CreateStory: {
    screen: CreateStory,
    navigationOptions: {
      title: 'New Story',
    }
  },
  ShowStory: {
    screen: ShowStory,
    navigationOptions: {
      title: 'Edit Story',
    }
  }
})


