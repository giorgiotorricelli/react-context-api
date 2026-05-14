import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { BudgetContext } from "../contexts/BudgetContext";

function DefaultLayout() {
    const { budgetMode, setBudgetMode } = useContext(BudgetContext);
    return (
        <>
            <header className="my-header">
                <div className="d-flex flex-column align-items-center">
                    <h1>FAKE</h1>
                    <ul className="navbar d-flex gap-3">
                        <li>
                            <NavLink to='/about-us'>About us</NavLink>
                        </li>
                        <li>
                            <NavLink to='/products'>Products</NavLink>
                        </li>
                        <li>
                            <NavLink to=''>Home</NavLink>
                        </li>
                    </ul>
                </div>
                <button className="btn btn-primary position-absolute btn-budget" onClick={() => { setBudgetMode(!budgetMode) }}>Budget mode</button>
            </header>
            <Outlet />
        </>
    );
}

export default DefaultLayout