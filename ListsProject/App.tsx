import {View} from 'react-native';
import ListContainer from "./ListContainer";
import styles from "./styles";

const data=new Array(100).fill(null).map((v,i)=>
    ({key:i.toString(),value:`Item ${i}`}));
export default function App() {
  return (
    <View style={styles.container}>
      <ListContainer/>
    </View>
  );
}


