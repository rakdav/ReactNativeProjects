import React from "react";
import {StatusBar, Text, View} from 'react-native';
import styles  from "./styles";
import Box  from "./Box";
import Row from "./Row"
import Column from "./Column";
const boxes=new Array(10).fill(null).map((v,i)=>i+1);
export default function App() {
  return (
    <View style={styles.container}>
        <StatusBar hidden={false}/>
        {/*{boxes.map((i)=>(*/}
        {/*    <Box key={i}>#{1}</Box>*/}
        {/*    ))}*/}
        <Row>
            <Column>
                <Box>#1</Box>
                <Box>#2</Box>
            </Column>
            <Column>
                <Box>#3</Box>
                <Box>#4</Box>
            </Column>
        </Row>
    </View>
  );
}


