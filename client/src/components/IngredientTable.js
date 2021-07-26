import React from 'react'

export default function IngredientTable({ ingredients }) {
    return (
        <table className="table table-hover table-dark">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Ingredient</th>
                    <th scope="col">Measure</th>
                </tr>
            </thead>
            <tbody>
                {ingredients.map(ingr => {
                    return(
                        <tr className="active" key={ingr.name}>
                            <th scope="row">{ingr.count}</th>
                            <td className="bg-info">{ingr.name}</td>
                            <td className="bg-info">{ingr.measure}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
