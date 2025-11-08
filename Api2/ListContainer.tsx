import {useEffect, useState} from "react";
import List from "./List";

export default function ListContainer(){
    const [data, setData] = useState([]);
    const [asc,setAsc]=useState(false);
    const [filter,setFilter]=useState("");
    const [loading, setLoading] = useState(true);
    const filteredData = data
        .filter(item => item.title.startsWith(filter))
        .sort((a, b) => asc ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title));
    const url = "https://jsonplaceholder.typicode.com/posts"
    useEffect(() => {
        fetch(url)
            .then((resp) => resp.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, [])
    return(
        <List data={filteredData}
              asc={asc}
              onFilter={(text)=>{setFilter(text)}}
              onSort={()=>{setAsc(!asc)}}
        />
    );
}