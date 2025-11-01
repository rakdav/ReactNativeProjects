import { Platform,StyleSheet,StatusBar } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'ghostwhite',
        ...Platform.select({
            android: {paddingTop: StatusBar.currentHeight},
            ios: {paddingTop: 20},
        }),
    },
    box:{
        width:100,
        height:100,
        justifyContent: 'center',
        alignSelf: 'stretch',
        alignItems: 'center',
        backgroundColor: 'lightgray',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: 'darkslategray',
        margin:10
    },
    boxText:{
        color:'darkslategray',
        fontWeight: "bold",
    },

    row:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-around",
        alignSelf:"stretch",
    },
    column: {
        flex:1,
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"space-around",
        alignSelf:"stretch",
    },
});

