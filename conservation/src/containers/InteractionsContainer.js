import React, { useState } from 'react'
import { Text, View, StyleSheet, FlatList, LayoutAnimation} from 'react-native'
import Interactions from '../components/Interactions'
import InteractionDetails from '../components/InteractionDetails'

function InteractionsContainer ({ activeInteraction, activate }) {
    
    const [interactionData, setInteractionData] = useState(dataReset)

    const findActiveInteraction = (target) => {
        return interactionData.find(int => int.id == target)
    }
            
    return (
        <View style={styles.interactionStyle}>
            {activeInteraction 
                ? <InteractionDetails interaction={findActiveInteraction(activeInteraction)}/>
                : 
                    <FlatList
                        data={interactionData}
                        keyExtractor={interaction => interaction.id}
                        renderItem={ ({item}) => {
                        return <Interactions interaction={item} changeStatus={activate}/>
                        }}
                    />
            }
        </View>
    )
}
export default InteractionsContainer

const dataReset =[
    {id: 'touch',
    iconName: 'fingerprint',
    damage: 'Oils and dirt from fingerprints change the chemical balance between the oil, canvas, and varnish that start to decay the pigments over time. The paint begins to darken and turn bright greens into dull browns.',
    behavior: 'When pointing at a painting, maintain a distance of at least 3 to 6 inches. Try describing what you are looking at to others too. You might be suprised by what they see!'
    },
    {id: 'breath',
    iconName: 'weather-windy',
    damage: 'The heat and moisture from human breath will change the relative humidity in a localized area and can foster the development of molds within the painting materials. The bright yellow of "The Scream" by Edvard Munch has begun to turn green!',
    behavior: 'Admiring the details can draw you in for a closer look but make sure you maintain at least at least a 1 foot distance. We recommend using a maginifier like the zoom on your camera to get a closer look!'
    },
    {id: 'bump',
    iconName: 'handball',
    damage: 'Vibrations weaken the bond between the paints and the canvas resulting in cracks, or even flaking in the paint. Larger bumps can do even more damage, like loosening the canvas from its frame or even tearing the canvas!',
    behavior: `Make sure to keep each painting out of arm's reach(3 to 6 feet). People looking at art can bump into each other, so make sure you can take an average step forward and still not bump into the painting.`
    },
    {id: 'flash',
    iconName: 'flash',
    damage: 'Camera flashes generate an intense amount UV light, triggering a chemical reaction that bleaches the pigments in the paint. Just imagine the bright fabric on a chair left in the sun during summer.',
    behavior: 'Before taking a photo, make sure that the flash is off. If you change from camera-mode to selfie-mode on your smart-phone, make sure the flash is still off.'
    }
]

const styles = StyleSheet.create({
    interactionStyle: {
        flex: 95,
        alignSelf:'flex-start',
        marginHorizontal: 15,
        marginVertical: 15,
        marginBottom: 50
    }
})