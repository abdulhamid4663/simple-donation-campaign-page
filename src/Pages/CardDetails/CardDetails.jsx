import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setDataToLocalStorage } from "../../localStorage/localStorage";

const CardDetails = () => {
    const data = useLoaderData();
    const params = useParams()
    const idInt = Number.parseInt(params.id);

    const cardDetails = data.find(card => card.id === idInt)

    const { id, image, description, donation, title, text_color } = cardDetails;

    const myDivStyle = {
        backgroundColor: "#0B0B0B80",
        backgroundBlendMode: "overlay",
    }

    function handleDonate(id) {
        toast.success("Thank you for the donation");
        setDataToLocalStorage(id)
    }

    return (
        <div className="container mx-auto px-4 mt-20 mb-32">
            <figure className="relative">
                <img src={image} alt={`image of ${title}`} className="h-[43.75rem] w-full max-h-fit"

                />
                <div className="absolute bottom-0 left-0 py-9 px-9 w-full" style={myDivStyle}>
                    <button onClick={() => handleDonate(id)} className="py-4 px-7 text-white rounded-md text-xl font-semibold" style={{ backgroundColor: text_color }}>Donate {donation}</button>
                </div>
            </figure>
            <h1 className="text-[#0B0B0B] text-5xl font-bold mb-6 mt-14">{title}</h1>
            <p className="text-base font-normal text-[#0B0B0BB2]">{description}</p>
            <ToastContainer
                pauseOnHover={false}
            />
        </div>
    );
};

export default CardDetails;