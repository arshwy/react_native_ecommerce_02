import { Text } from 'native-base'
import React, { useState } from 'react'
import { StyleSheet, useWindowDimensions } from 'react-native'
import { SceneMap, TabBar, TabView } from 'react-native-tab-view' 
import Profile from './Profile'
import Orders from './Orders'
import Colors from '../../colors'

const renderScene = SceneMap({
  first: Orders,
  second: Profile,
  
})

const Tabs = () => {
  const layout = useWindowDimensions()
  const [index, setIndex] = useState(0)

  const [routes] = useState([
    { key:"first", title:"ORDERS", },
    { key:"second", title:"PROFILE", },
  ])

  const renderTabsBar = (props) => {
    return (
      <TabBar 
        {...props} 
        tabStyle={styles.tabStyle} 
        indicatorStyle={styles.indicatorStyle}
        activeColor={Colors.main}
        inactiveColor={Colors.white}
        renderLabel={({route,color}) => (
            <Text style={{color, ...styles.text}}>
              {route.title}
            </Text>
          )
        }
      />
    )
  }

  return (
    <TabView 
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={renderTabsBar}
    />
  )
}

const styles = StyleSheet.create({
  indicatorStyle: {
    backgroundColor: Colors.black
  },
  tabStyle:{
    backgroundColor: "black",
  },
  text: {
    fontSize: 13,
    fontWeight: "bold",

  }
})

export default Tabs