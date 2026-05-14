import { createContext, useState } from "react";

const BudgetContext = createContext(null);

function BudgetProvider({ children }) {

    const [budgetMode, setBudgetMode] = useState(false);

    const value = {
        budgetMode,
        setBudgetMode
    }

    return (
        <BudgetContext.Provider value={value}>
            {children}
        </BudgetContext.Provider>
    );
}

export {BudgetContext, BudgetProvider}