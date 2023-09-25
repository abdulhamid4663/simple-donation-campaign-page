import { useEffect, useState } from "react";
import Banner from "../../Componenets/Banner/Banner";
import Cards from "../../Componenets/Cards/Cards";
import "./Home.css";

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
        setSearchString(e.target.childNodes[0].childNodes[0].value)
        console.log(e.target.childNodes[0].childNodes[0].value)
    }
    console.log(searchString)
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
        </>
    );
};

export default Home;