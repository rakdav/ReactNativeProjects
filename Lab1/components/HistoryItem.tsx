import React from 'react';
import {View,Text,StyleSheet} from "react-native";
import {CalculationHistory} from "../types";

interface HistoryItemProps {
    item: CalculationHistory;
}

export const HistoryItem:React.FC<HistoryItemProps>=({item})=>{
    return(
      <View style={styles.container}>
          <View style={styles.header}>
              <Text style={styles.shape}>{item.shape}</Text>
              <Text style={styles.area}>{item.area}</Text>
          </View>
          <Text style={styles.calculation}>{item.calculation}</Text>
          <Text style={styles.timestamp}>{item.timestamp}</Text>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#fff",
        padding:15,
        borderRadius:10,
        marginBottom:10,
        borderLeftWidth:3,
        borderLeftColor:"#34c759"
    },
    header: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:5
    },
    shape:{
        fontSize:16,
        fontWeight:"600",
        color:"#333"
    },
    area:{
        fontSize:18,
        fontWeight:'bold',
        color:'#34c759'
    },
    calculation:{
        fontSize:14,
        color:'#666',
        fontStyle:'italic',
        marginBottom:5
    },
    timestamp:{
        fontSize:12,
        color:'#999'
    }
});