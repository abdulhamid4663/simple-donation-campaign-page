import { useEffect, useState } from "react";
import { getStoredFromLocalStorage } from "../../localStorage/localStorage";
import { useLoaderData } from "react-router-dom";
import { Legend, Pie, PieChart } from "recharts";


const Statistics = () => {
    const [donatedData, setDonatedData] = useState([]);
    const allData = useLoaderData();
    
    useEffect(() => {

        const storedData = getStoredFromLocalStorage();
        setDonatedData(storedData);

    }, [])

    const data01 = [
        {
            "name": "Group A",
            "value": allData.length
        },
        {
            "name": "Group B",
            "value": donatedData.length
        },
    ];
    return (
        <div>
            <PieChart width={1000} height={500}>
                <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                <Legend />
            </PieChart>
        </div>
    );
};

export default Statistics;