import React from "react"
import { Text, View, StyleSheet, Image } from "react-native"

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.text}>Footer</Text>
            <Image style={styles.icons} source={require('../img/home.png')}></Image>
            <Text style={styles.text}>Footer</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 5,
        flexDirection: "row",
        backgroundColor: "#1e1e1e",
        height: 55,
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: 35,
        paddingLeft: 35,
    },
    text: {
        marginLeft: 20,
        color: "#fff"
    },
    icons: {
        width: 32,
        height: 32,
    }
})

export default Footer