import {useEffect, useState} from "react";
import List from "./List";

export default function ListContainer(){
    const [data, setData] = useState([]);
    const [asc,setAsc]=useState(false);
    const [filter,setFilter]=useState("");
    const [loading, setLoading] = useState(true);
    const url = "https://jsonplaceholder.typicode.com/posts"
    useEffect(() => {
        fetch(url)
            .then((resp) => resp.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, [])
    return(
        <List data={data}
              asc={asc}
              onFilter={(text)=>{setFilter(text)}}
              onSort={()=>{setAsc(!asc)}}
        />
    );
}