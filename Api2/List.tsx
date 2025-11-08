import {FlatList, Text, View} from "react-native";
import ListControls from "./ListControls";
import styles from "./styles";

type Props={
    data: {key:string,value:string}[];
    onFilter:(text:string) => void;
    onSort:() => void;
    asc:boolean;
};

export default function List({data,onFilter,onSort,asc}:Props) {
    return(
        <FlatList data={data}
                  ListHeaderComponent={<ListControls{...{onFilter,onSort,asc}}/>}
                  renderItem={({item})=>
                          <View style={styles.container}>
                              <Text style={styles.item}>{item.title}</Text>
                              <Text style={styles.item}>{item.body}</Text>
                          </View>

                  }/>
    );
}