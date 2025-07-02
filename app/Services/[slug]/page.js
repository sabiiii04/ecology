import React from 'react';
import services from '@/data/services.json';

const Page = ({params}) => {
    const {slug} = params;
    const service = services.find((service) => service.slug === slug);
    if (!service) {
        return <div>
            No such service found.
        </div>
    }
    return (
        <div>
            <h1>{service.h1}</h1>
            <p>{service.description}</p>

            
        </div>
    );
};

export default Page;