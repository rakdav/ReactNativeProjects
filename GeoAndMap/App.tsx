import React from 'react';
import MapView,{Marker} from 'react-native-maps';
import {StatusBar, StyleSheet, View} from 'react-native';

StatusBar.setBarStyle("dark-content")
export default function App() {
    return (
        <View style={styles.container}>
            <MapView style={styles.mapView} showsUserLocation followsUserLocation/>
        </View>
        // <View style={styles.container}>
        //     <MapView style={styles.map}
        //     showsPointsOfInterest={false}
        //     showsUserLocation
        //     followsUserLocation>
        //         <Marker title="Тесов место"
        //                 description="Не приближаться"
        //                 coordinate={{
        //                     latitude:54.43,
        //                     longitude:20.453
        //                 }}
        //         />
        //     </MapView>
        // </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"ghostwhite"
    },
    mapView: {
        alignSelf:"stretch",
        width:450,
        height:30,
    },
});
