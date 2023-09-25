import { useEffect, useState } from "react";
import Banner from "../../Componenets/Banner/Banner";
import Cards from "../../Componenets/Cards/Cards";
import "./Home.css";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
    const [data, setData] = useState([]);
    const [searchString, setSearchString] = useState('');

    useEffect(() => {
        async function loadData() {
            const res = await fetch('./data.json');
            const data = await res.json();
            
            setData(data);
        }

        loadData()

    }, [])

    function handleSearchedData(e) {
        e.preventDefault()

        const searchedText = e.target.childNodes[0].childNodes[0].value;

        if(searchedText === "Health" || searchedText === "health") {
            return setSearchString(e.target.childNodes[0].childNodes[0].value)
        }

        if(searchedText === "Food" || searchedText === "food") {
            return setSearchString(e.target.childNodes[0].childNodes[0].value)
        }

        if(searchedText === "Education" || searchedText === "education") {
            return setSearchString(e.target.childNodes[0].childNodes[0].value)
        }

        if(searchedText === "Clothing" || searchedText === "clothing") {
            return setSearchString(e.target.childNodes[0].childNodes[0].value)
        }
        
        if(searchedText.length === 0 ) {
            return
        }

        return toast.error("Invalid Entered Data.")
    }
    
    return (
        <>
            <div className="background-style">
                <div className="container mx-auto px-4">
                    <Banner handleSearchedData={handleSearchedData}/>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-28 mb-40">
                <Cards data={data} searchString={searchString}/>
            </div>
            <ToastContainer 
                pauseOnHover= {false}
            />
        </>
    );
};

export default Home;