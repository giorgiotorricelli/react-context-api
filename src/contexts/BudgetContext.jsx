import { createContext, useState } from "react";

const BudgetContext = createContext();

function BudgetProvider({ children }) {
    const budget = 11;

    return (
        <BudgetContext.Provider value={budget}>
            {children}
        </BudgetContext.Provider>
    );
}

export {BudgetContext, BudgetProvider}