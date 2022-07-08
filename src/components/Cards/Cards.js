import Card from "../Card/Card";
import "../Cards/Cards.css";
import {useContext} from "react";
import {PetsContext} from "../Pets/Pets";

const Cards = () => {

    const { cats } = useContext(PetsContext)


    return (
        <div className="pet-cards-container">
            {cats.map((cat,index) => {
                return <Card
                    key={cat.id}
                    name={cat.name}
                    phone={cat.phone}
                    email={cat.email}
                    image={cat.image}
                    favoured={cat.favoured}
                    index={index}
                />

            })}

        </div>
    )
}

export default Cards