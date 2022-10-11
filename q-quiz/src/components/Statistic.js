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
        <Container className='mb-5'>
            <div className='text-center my-5'>
            <h3 className='text-center t-primary qt-hero'>Questions Statistic</h3>
                <p>See from the Graph how much questions are avilabel on each Topics</p>
            </div>
            
            
            <ResponsiveContainer width="100%" height={700}>
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