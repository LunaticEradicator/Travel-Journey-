import EachCard from "./EachCard"
import locationDetails from './locationDetails'

export default function Card() {
    const mapped = locationDetails.map(item => {
        return (<EachCard
            key={item.id}
            {...item}
        />)
    })
    return (
        <div className="cardDetails">
            {mapped}
        </div>
    )
}
