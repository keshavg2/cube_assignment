import React from 'react';

interface CustomerCardProps {
    id: number;
    name: string;
    title: string;
    selected: boolean;
    onClick: () => void;
}

const CustomerCard: React.FC<CustomerCardProps> = ({ id, name, title, selected, onClick }) => {
    return (
        <div onClick={onClick} className={`customer-card ${selected ? 'selected' : ''}`}>
            <h3>{title} {name}</h3>
            <h5></h5>
        </div>
    );
};

export default CustomerCard;
export {};
