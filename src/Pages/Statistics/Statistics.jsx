import { useEffect, useState } from "react";
import { getStoredFromLocalStorage } from "../../localStorage/localStorage";
import { useLoaderData } from "react-router-dom";
import { ResponsiveContainer, PieChart, Pie, Legend, Tooltip } from "recharts";


const Statistics = () => {
    const [donatedData, setDonatedData] = useState([]);
    const [newTotalData, setNewTotalData] = useState([]);
    const allData = useLoaderData();

    useEffect(() => {

        const storedData = getStoredFromLocalStorage();
        setDonatedData(storedData);

        const removeExisting = allData.filter(data => !storedData.includes(data.id));

        setNewTotalData(removeExisting);

    }, [allData])

    function getPercentage(num1, num2) {
        return (num1 - num2) / (num1) * 100
    }

    const totalDonationPercentage = getPercentage(allData.length, donatedData.length);
    const myDonationPercentage = getPercentage(allData.length, newTotalData.length);

    const totalDonationInt = Number.parseFloat(totalDonationPercentage.toFixed(2));
    const myDonationInt = Number.parseFloat(myDonationPercentage.toFixed(2));

    const data01 = [
        {
            name: `Total Donation`,
            value: totalDonationInt,
            fill: "red",
        },
        {
            name: `My Donation`,
            value: myDonationInt,
            fill: "green",
        },
    ];

    const customTooltip = ({active, payload}) => {
        if(active) {
            const data = payload[0].payload;

            return (
                <div className="py-2 px-6 bg-[#ffffffcc]">
                    <p className="font-extrabold">{`${data.name} : ${(data.value)}%`}</p>                        
                </div>
            );
        }

        return null
    }

    return (
        <ResponsiveContainer width="100%" height={700}>
            <PieChart>
                <Pie data={data01} dataKey={`value`} text cx="50%" label cy="50%" outerRadius={165} />
                <Legend iconType="plainline" iconSize={40} />
                <Tooltip content={customTooltip} cursor="pointer"/>
            </PieChart>
        </ResponsiveContainer>
    );
};

export default Statistics;