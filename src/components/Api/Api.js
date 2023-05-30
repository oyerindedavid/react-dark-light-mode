import { useEffect, useState } from "react";

export default function Api(){
    const [starWarsData, setStarWarsData] = useState({})
    const [count, setCount] = useState(0)

    useEffect(()=>{
        fetch(`https://swapi.dev/api/people/${count}`)
        .then(res => res.json())
        .then(data => setStarWarsData(data))
    }, [count]) // compare initial state to new state to determine whether to run(refetch)
    //[] run the fetch on first load

    return(
        <div>{JSON.stringify(starWarsData, null, 2)}</div>
    )
}