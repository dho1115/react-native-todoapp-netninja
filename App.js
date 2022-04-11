import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './Components/header';
import TodoItem from './Components/TodoItem';

export default function App() {
  const [todos, settodos] = useState([
    { text: 'buy iced tea', key: 1 },
    { text: 'prepare my screenplays', key: 2 },
    { text: 'eat something.', key: 3 },
    { text: 'code', key: 4 },
    { text: 'watch sports', key: 5 }
  ]);

  const pressHandler = key => {
    settodos(prevtodos => prevtodos.filter(todo => todo.key != key));
  }

  return (
    <View style={styles.container}>
      {/* header */}
      <Header />
      <View style={styles.content}>
        {/* todo form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item}) => {
              return(
                <TodoItem item={item} pressHandler={pressHandler} />
              )
            }}
           />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    backgroundColor: 'yellow',
    padding: 35
  },
  list: {
    fontWeight: 'bold',
    color: 'red',
    backgroundColor: 'whitesmoke',
    marginTop: 31
  }
});
