import React from "react"
import Constants from "expo-constants"
import { Text, View} from "react-native"
import TodoList from "./TodoList"
import Footer from "./Footer"
const Main = () => {
    return (
        <View>
            <TodoList />
        </View>
    )
}

export default Main

