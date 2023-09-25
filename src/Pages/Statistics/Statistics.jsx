import { useEffect, useState } from "react";
import { getStoredFromLocalStorage } from "../../localStorage/localStorage";
import { useLoaderData } from "react-router-dom";
import { Legend, Pie, PieChart, Tooltip} from "recharts";


const Statistics = () => {
    const [donatedData, setDonatedData] = useState([]);
    const [newTotalData, setNewTotalData] = useState([]);
    const allData = useLoaderData();

    useEffect(() => {
        
        const storedData = getStoredFromLocalStorage();
        setDonatedData(storedData);
        
        const removeExisting = allData.filter(data => !storedData.includes(data.id)) 

        setNewTotalData(removeExisting)

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
        <div className="container mx-auto">
            <PieChart width={1600} height={800}>
                <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={250} />
                <Tooltip  />
                <Legend />
            </PieChart>
        </div>
    );
};

export default Statistics;