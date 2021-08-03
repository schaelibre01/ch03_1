import React, {Fragment} from 'react'
import {Platform, StyleSheet, SafeAreaView, View, FlatList} from 'react-native'
import Person from './src/copy/Person'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {Colors} from 'react-native-paper'
import color from 'color'
import TopBar from './src/screens/TopBar'
import Content from './src/screens/Content'
import BottomBar from './src/screens/BottomBar'
import * as D from './src/data'


const people : D.IPerson[] = D.makeArray(10).map(D.createRandomPerson)

//prettier-ignore
export default function App() {
  return (
    <SafeAreaView style={[styles.flex]}>
      <FlatList data={people}
        renderItem={({item})=> <Person person={item}/>}
        keyExtractor={(item, index) => item.id}
        ItemSeparatorComponent={()=><View style={styles.itemSeparator}></View>}
      >
      </FlatList>
    </SafeAreaView>
  )
}

//prettier-ignore
const styles = StyleSheet.create({
  flex : {flex:1},
  itemSeparator : {borderWidth : 1, borderColor : color(Colors.grey500).lighten(0.3).
  string()}
})

