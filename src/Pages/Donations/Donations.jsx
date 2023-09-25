import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredFromLocalStorage } from "../../localStorage/localStorage";
import DonationDetails from "../../Componenets/DonationDetails/DonationDetails";


const Donations = () => {
    const data = useLoaderData();
    const [donatedCards, setDonatedCards] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(()=> {
        const storedData = getStoredFromLocalStorage();
        if(storedData.length > 0) {
            const donatedData = data.filter(item => storedData.includes(item.id));
            setDonatedCards(donatedData);
        }
    }, [data])

    

    return (
        <div className="container mx-auto px-4 mt-20 mb-40">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
                {
                    showAll ? donatedCards.map(card => <DonationDetails key={card.id} card={card} />) : donatedCards.slice(0,4).map(card => <DonationDetails key={card.id} card={card} />)
                }
            </div>
            <div className="text-center">
                {
                    donatedCards.length <= 4 
                    ? "" 
                    : <button onClick={()=> setShowAll(!showAll)} className="bg-[#009444] text-white py-4 px-7 text-base font-semibold rounded-lg">
                        {showAll ? "See Less" : "Show All"}
                    </button>
                }
            </div>
        </div>
    );
};

export default Donations;