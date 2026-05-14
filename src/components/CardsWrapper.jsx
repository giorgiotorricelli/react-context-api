import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import Card from "./Card";
import { BudgetContext } from "../contexts/BudgetContext";
import { useContext } from "react";

function Cards_wrapper({ productList }) {

    const { budgetMode } = useContext(BudgetContext);
    const navigate = useNavigate();
    const budgetList = productList.filter(current => {
        return current.price <= 30;
    });

    return (
        <div className="container">
            <div className="cards-wrapper row">
                {budgetMode ? 
                (
                    budgetList.map(current => {
                        return <div key={current.id} onClick={() => { navigate(`/card/${current.id}`) }} className="col-3 col-lg-4 text-decoration-none text-dark">
                            <Card singleProduct={current} />
                        </div>;
                    })
                ) :
                (productList.map(current => {
                    return <div key={current.id} onClick={() => { navigate(`/card/${current.id}`) }} className="col-3 col-lg-4 text-decoration-none text-dark">
                        <Card singleProduct={current} />
                    </div>;
                }))

                }
            </div>
        </div>

    );
}

export default Cards_wrapper