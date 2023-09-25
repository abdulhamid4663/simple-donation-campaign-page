
import Banner from "../../Componenets/Banner/Banner";
import Cards from "../../Componenets/Cards/Cards";


const Home = () => {

    const backgroundStyle = {
        backgroundImage: `url('./bg-image.jpg')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "overlay",
        backgroundColor: "#FFFFFFF2"
    }

    return (
        <>
            <div className="" style={backgroundStyle}>
                <div className="container mx-auto px-4">
                    <Banner />
                </div>
            </div>
            <div className="container mx-auto px-4 mt-28 mb-40">
                <Cards />
            </div>
        </>
    );
};

export default Home;