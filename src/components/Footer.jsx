import React, { useState } from "react"
import { Text, View, StyleSheet, Image, Button } from "react-native"
import { Link, useLocation} from "react-router-native"



const Footer = () => {

    const location = useLocation()

    
    const getIcon = ({icon_name}) => {
        switch (icon_name) {
            case "home":
                if (location.pathname === "/") {
                    return <Image style={styles.icons} source={require('../img/homeActive.png')} />
                } else {
                    return <Image style={styles.icons} source={require('../img/home.png')} />
                }
                break
            case "profile":
                if (location.pathname === "/profile") {
                    return <Image style={styles.icons} source={require('../img/profileActive.png')} />
                } else{
                    return <Image style={styles.icons} source={require('../img/profile.png')} />
                }
                break
            case "calendar":
                if (location.pathname === "/calendar") {
                    return <Image style={styles.icons} source={require('../img/calendarActive.png')} />
                } else{
                    return <Image style={styles.icons} source={require('../img/calendar.png')} />
                }
        }
    }
        //<Image style={styles.icons} source={require()} />
    return (
        <View style={styles.footer}>
             <Link to={'/calendar'} underlayColor="">
                {getIcon({icon_name: 'calendar'})}
            </Link>
            <Link to={'/'} underlayColor="">
                {getIcon({icon_name: 'home'})}
            </Link>
            <Link to={'/profile'} underlayColor="">
                {getIcon({icon_name: 'profile'})}
            </Link>
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
        marginLeft: 0,
        color: "#fff"
    },
    icons: {
        width: 32,
        height: 32,
    },
})

export default Footer