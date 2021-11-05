import React from 'react'

function FoodForm() {
    return (
        <div>
            <form>
                <input type="text" placeholder="Title"></input>
                <input type="text" placeholder="Price"></input>
                <input type="text" placeholder="Image URL"></input>
                <input type="text" placeholder="Ingredient"></input> <button type="button">Add</button>
            </form>
        </div>
    )
}

export default FoodForm
