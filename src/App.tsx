import React, { useState } from 'react';
import CustomerList from './Component/CustomerList';
import CustomerDetails from './Component/CustomerDetails';
import './App.css';

const App: React.FC = () => {
    const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(null);

    return (
        <>
            <div className="title">Customers</div>
            <div className="app">
                <CustomerList selectedCustomerId={selectedCustomerId!} onSelectCustomer={setSelectedCustomerId}/>
                <CustomerDetails selectedCustomerId={selectedCustomerId!}/>
            </div>
        </>
    );
};

export default App;
export {};

