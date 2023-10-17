import axios from 'axios'
import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';


const Chart = () => {
    const [phones, setPhones] = useState([])

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=samsung')
            .then(data => {
                const loadData = data.data.data;
                console.log(loadData);
                const phonesData = loadData.map(phone => {
                    const parts = phone.slug.split('-');
                    const price = parseInt(parts[1]);
                    const phoneInfo = {
                        name: phone.phone_name,
                        price: price
                    }
                    return phoneInfo;
                })
                setPhones(phonesData);
                console.log(phonesData)
            });

    }, [])

    return (
        <div>
            <BarChart width={1500} height={500} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey="name"></XAxis>
                <YAxis />
            </BarChart>
        </div>
    );
};

export default Chart;