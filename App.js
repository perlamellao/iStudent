import React from 'react'
import Main from './src/components/Main'
import { View, ScrollView, StatusBar, SafeAreaView} from 'react-native'
import Footer from './src/components/Footer'
import Header from './src/components/Header'

export default function App() {

    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar barStyle={'light-content'} backgroundColor={'#1e1e1e'}/>
            <View style={{flex: 1, backgroundColor:'#111'}}>
                <Header />
                <ScrollView horizontal={true}><Main /></ScrollView>
                <Footer />
            </View>
        </SafeAreaView>

        
    )
}