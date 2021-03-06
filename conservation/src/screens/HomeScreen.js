import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import PaintingContext from '../context/PaintingContext'
import ImageContainer from '../containers/ImageContainer'
import InteractionsContainer from '../containers/InteractionsContainer'

function HomeScreen ({ navigation }) {

    const { data } = useContext(PaintingContext)
    const [activeInteraction, setActiveInteraction] = useState(null)
    
    const changeActiveInteraction = (newInteraction) => {
        setActiveInteraction(newInteraction)
    }
    return (
        <View style={styles.backgroundStyle}>
            <View style={styles.canvasStyle}>
                <ImageContainer paintingDetails={data} effect={activeInteraction}/>
            </View>
            <View style={styles.panelStyle}>
                <InteractionsContainer
                    activeInteraction={activeInteraction}
                    activate={changeActiveInteraction}
                />
                <MaterialCommunityIcons
                    name='restart'
                    style={styles.resetStyle}
                    onPress={() => changeActiveInteraction(null)}
                />
                <MaterialCommunityIcons
                    name="account-badge-horizontal"
                    style={styles.buttonStyle}
                    onPress={ () => navigation.navigate('Admin')}
                />
            </View>
        </View>
    )
}
export default HomeScreen

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: 'darkgoldenrod',
        flex: 1,
        flexDirection: 'row'
    },
    textStyle:{
        fontSize: 24,
        alignSelf: 'center',
        flex: 5
    },
    resetStyle: {
        alignSelf: 'center',
        fontSize: 36,
        color: 'darkgoldenrod',
        marginVertical: 20,
        marginHorizontal: 15
    },
    buttonStyle: {
        alignSelf: "flex-end",
        fontSize: 24,
        color: 'darkgoldenrod',
        marginVertical: 15
    },
    canvasStyle: {
        flex: 75
    },
    panelStyle: {
        flex: 25,
        backgroundColor: 'darkslategrey',
        flexDirection: 'column',
        justifyContent: "space-between"
    }
})