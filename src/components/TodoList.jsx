import React from 'react'
import {FlatList, Text, View, StyleSheet, Image} from 'react-native'
import Tasks from '../data/Tasks'
import { Dimensions } from 'react-native';

const TodoList = () => {

    return (
        <FlatList
            style={styles.container}
            data={Tasks}
            ItemSeparatorComponent={() => <View style={{height:1, backgroundColor:'#AAA'}} />}
            renderItem={({item : task }) => (
                <View key={task.id} style={{padding: 20}}>
                    <Text style={styles.title}>{task.title}</Text> 
                    <Text style={styles.text}>{task.description}</Text>
                    <Text style={styles.text}>{task.priority}</Text>
                    <Text style={styles.text}>{task.status}</Text>
                </View> 
            )}
        >
        </FlatList>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#111",
        width: Dimensions.get('window').width,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    text: {
        fontSize: 16,
        color: '#fff',
    }

})

export default TodoList