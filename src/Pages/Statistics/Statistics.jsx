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

    const data01 = [
        {
            "name": "Total Donation",
            "value": newTotalData.length,
            "fill": "red",
        },
        {
            "name": "My Donation",
            "value": donatedData.length,
            "fill": "green",
        },
    ];

    return (
        <ResponsiveContainer width="100%" height={700}>
            <PieChart>
                <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={165} />
                <Legend iconType="plainline" iconSize={40}/>
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default Statistics;