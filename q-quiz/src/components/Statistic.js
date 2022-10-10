import React from 'react'
import { useLoaderData } from 'react-router-dom'
import {
    Container,
} from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Statistic = () => {

    const data = useLoaderData().data

    console.log(data)
    return (
        <Container>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart width={650} height={400} data={data}  margin={{ top: 50, bottom: 50 }}>
                    <Bar type="monotone" dataKey="total" fill="#00b5ca" />
                    <Tooltip />
                    <XAxis dataKey="name" />
                    <YAxis dataKey="total" />
                </BarChart>
            </ResponsiveContainer>
        </Container>
    )
}

export default Statistic