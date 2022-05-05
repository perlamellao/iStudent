import React from "react"
import { Text, View, StyleSheet, Image } from "react-native"

const Header = () => {
    return (
        <View style={styles.header}>
            <Image style={styles.logo} source={require('../img/logo.png')}></Image>
            <Image style={styles.menuIcon} source={require('../img/lista.png')}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        backgroundColor: "#1e1e1e",
        height: 50,
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: 15,
        paddingLeft: 5,
    },
    text: {
        marginLeft: 20,
        color: "#fff"
    },
    menuIcon: {
        width: 30,
        height: 30,
    },
    logo: {
        width: 45,
        height: 45,
    }
})

export default Header