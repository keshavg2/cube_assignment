import React from 'react';
import PhotoGrid from './PhotoGrid';
import customers from '../data/customers.json';

interface CustomerDetailsProps {
    selectedCustomerId: number;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ selectedCustomerId }) => {
    const customer = customers.find(c => c.id === selectedCustomerId);

    if (!customer) {
        return <div>Select a customer to see details</div>;
    }

    return (
        <div className="customer-details">
            <h2>{customer.title} {customer.name}</h2>
            <p>Address: {customer.address}</p>
            <PhotoGrid />
        </div>
    );
};

export default CustomerDetails;

export {};

