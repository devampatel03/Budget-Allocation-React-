import React, { useState,useContext } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import RemainingBudget from './components/Remaining';




const App = () => {

    const [newCurrency, setnewCurrency] = useState("£ Pound");
    const [symbol, setsymbol] = useState("£");
    
    
    const handleCurrencyChange= (event)=>{
        setnewCurrency(event.target.value)
        if (event.target.value === "₹ Ruppee"){
            setsymbol("₹");
        }else if (event.target.value === "€ Euro"){
            setsymbol("€");
        }else if (event.target.value === "£ Pound"){
            setsymbol("£");
        }else if (event.target.value === "$ Dollar"){
            setsymbol("$");
        }
    }

    
    console.log(newCurrency);

    console.log(symbol);

    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>  
                    <div className='col-sm'>
                        <select className="form-select form-select-md alert alert-secondary bg-black bg-opacity-100 text-white hover: bg-opacity-20" value={newCurrency} onChange={handleCurrencyChange} required>
                            <option selected disabled>Select Currency</option>
                            <option value="₹ Ruppee">Currency (₹ Ruppee)</option>
                            <option value="€ Euro">Currency (€ Euro)</option>
                            <option value="£ Pound">Currency (£ Pound)</option>
                            <option value="$ Dollar">Currency ($ Dollar)</option>
                        </select>
                    </div>
                    <div className='col-sm'>
                        <Budget data={symbol} />
                    </div>
                    <div className='col-sm'>
                        <RemainingBudget data={symbol}/>
                    </div>
                    <div className='col-sm'>
                        <ExpenseTotal data={symbol}/>
                    </div>
                </div>
                <h3 className='mt-3'>Allocation</h3>
                <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList data={symbol} />
                    </div>
                </div>
                <h3 className='mt-3'>Change allocation</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <AllocationForm data={symbol}/>
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};

export default App;