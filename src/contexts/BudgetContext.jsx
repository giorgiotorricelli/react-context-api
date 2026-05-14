import { createContext, useState } from "react";

const BudgetContext = createContext(null);

function BudgetProvider({ children }) {

    const [budgetMode, setBudgetMode] = useState(false);
    const [budgetValue, setBudgetValue] = useState('');

    function budgetSettedHandler(event){
        const target = event.target;
        const value = target.value;
        setBudgetValue(value);
        
    }

    const value = {
        budgetMode,
        setBudgetMode,
        budgetValue,
        setBudgetValue,
        budgetSettedHandler
    }

    return (
        <BudgetContext.Provider value={value}>
            {children}
        </BudgetContext.Provider>
    );
}

export {BudgetContext, BudgetProvider}