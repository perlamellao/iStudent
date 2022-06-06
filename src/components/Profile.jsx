import React from 'react'
import { View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native'



const Profile = () => {

    return (
        <ScrollView style>
            <View style={styles.container}>
                <Text>Profile</Text>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#111",
        height: Dimensions.get('window').height,
    },
})

export default Profile