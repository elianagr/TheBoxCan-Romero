import { useEffect, useState } from "react"
import StarshipDetail from "./StarshipDetail"

const StarshipsContainer = () => {

    const [starships, setStarships] = useState([])

    useEffect(() => {
        getStarships()
    }, [])

    const getStarships = () => {
        const URL = 'https://swapi.dev/api/starships'
        fetch(URL)
            .then(res => {
                return res.json()
            })
            .then(data=> {
                setStarships(data.results)
            })
    }

  return (
    <div>
        {starships.map(s => <li><StarshipDetail key={s.url} starship={s}/></li>)}
    </div>
  )
}

export default StarshipsContainer