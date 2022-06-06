import React from "react"
import { View, SafeAreaView, StatusBar } from "react-native"
import { NativeRouter, Routes, Route } from "react-router-native"
import Subjects from "./Subjects"
import Footer from "./Footer"
import Header from "./Header"
import Profile from "./Profile"
import CalendarMain from "./Calendar"


const Main = () => {
    return (
        <NativeRouter>
            <SafeAreaView style={{flex: 1}}>
                <StatusBar barStyle={'light-content'} backgroundColor={'#1e1e1e'}/>
                <View style={{flex: 1, backgroundColor:'#111'}}>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Subjects />} exact />
                        <Route path="/profile" element={<Profile />} exact />
                        <Route path="/calendar" element={<CalendarMain />} exact />
                    </Routes>
                    <Footer />
                </View>
            </SafeAreaView>
        </NativeRouter>
        
    )
}

export default Main

