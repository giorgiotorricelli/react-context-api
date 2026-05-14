
import Cards_wrapper from "../components/CardsWrapper";
import { useContext } from "react";
import { BudgetContext } from "../contexts/BudgetContext";

function Homepage(){
    const valore = useContext(BudgetContext);
    return (
        <div className="text-center pt-2 homepage">
            <h1>Welcome</h1>
            <pre>{JSON.stringify(valore)}</pre>
        </div>
    );
}

export default Homepage