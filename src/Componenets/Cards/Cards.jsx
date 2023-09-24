import { useEffect, useState } from "react";
import Card from "../Card/Card";


const Cards = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function loadData() {
            const res = await fetch('./data.json');
            const data = await res.json();

            setData(data);
        }

        loadData()

    }, [])
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {
                data.map(card => <Card key={card.id} card={card} />)
            }
        </div>
    );
};

export default Cards;