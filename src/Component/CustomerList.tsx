import React from 'react';
import CustomerCard from './CustomerCard';
import customers from '../data/customers.json';

interface CustomerListProps {
    selectedCustomerId: number;
    onSelectCustomer: (id: number) => void;
}

const CustomerList: React.FC<CustomerListProps> = ({ selectedCustomerId, onSelectCustomer }) => {
    return (
        <div className="customer-list">
            {customers.map(customer => (
                <CustomerCard
                    key={customer.id}
                    id={customer.id}
                    name={customer.name}
                    title={customer.title}
                    selected={customer.id === selectedCustomerId}
                    onClick={() => onSelectCustomer(customer.id)}
                />
            ))}
        </div>
    );
};

export default CustomerList;
export {};

