import React, { useState, useEffect } from "react";
import {StatusBar, Text, View} from "react-native";
import * as Location from "expo-location";
import styles from "./styles";
import MapView, {Marker} from "react-native-maps";

// export default function WhereAmI() {
//     const [address, setAddress] = useState("loading...");
//     const [longitude, setLongitude] = useState<number | undefined>();
//     const [latitude, setLatitude] = useState<number | undefined>();
//
//     useEffect(() => {
//         function setPosition({
//                                  coords: { latitude, longitude },
//                              }: Location.LocationObject) {
//             setLongitude(longitude);
//             setLatitude(latitude);
//
//             fetch(`${URL}${latitude},${longitude}`)
//                 .then((resp) => resp.json())
//                 .then(({ results }) => {
//                     if (results.length > 0) {
//                         setAddress(results[0].formatted_address);
//                     }
//                 })
//                 .catch((error) => {
//                     console.log(error.message);
//                 });
//         }
//
//         let watcher: Location.LocationSubscription;
//
//         (async () => {
//             let { status } = await Location.requestForegroundPermissionsAsync();
//             if (status !== "granted") {
//                 return;
//             }
//
//             let location = await Location.getCurrentPositionAsync({});
//             setPosition(location);
//
//             watcher = await Location.watchPositionAsync(
//                 { accuracy: Location.LocationAccuracy.Highest },
//                 setPosition
//             );
//         })();
//
//         return () => {
//             watcher?.remove();
//         };
//     }, []);
//
//     return (
//         <View style={styles.container}>
//             <Text style={styles.label}>Address: {address}</Text>
//             <Text style={styles.label}>Latitude: {latitude}</Text>
//             <Text style={styles.label}>Longitude: {longitude}</Text>
//         </View>
//     );
// }

StatusBar.setBarStyle("dark-content");

export default function App() {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.mapView}
                showsPointsOfInterest={false}
                showsUserLocation
                followsUserLocation
            >
                <Marker
                    title="Duff Brewery"
                    description="Duff beer for me, Duff beer for you"
                    coordinate={{
                        latitude: 43.8418728,
                        longitude: -79.086082,
                    }}
                />
                <Marker
                    title="Pawtucket Brewery"
                    description="New! Patriot Light!"
                    coordinate={{
                        latitude: 43.8401328,
                        longitude: -79.085407,
                    }}
                />
            </MapView>
        </View>
    );
}
