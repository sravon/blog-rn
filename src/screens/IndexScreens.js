import React, { useContext } from 'react'
import { Button, FlatList, Text, View } from 'react-native'
import { BlogContext } from '../context/BlogContext'

export default function IndexScreens() {
  const {data, addBlogposts } = useContext(BlogContext)
  return (
    <View>
      <Text>IndexScreens</Text>
      <Button
        title='Blog Post'
        onPress={addBlogposts}
      />
      <FlatList
        data={data}
        keyExtractor={(post) => post.title}
        renderItem={ ({item}) =>{
          return <Text>{item.title}</Text>
        } }
      />
    </View>
  )
}
