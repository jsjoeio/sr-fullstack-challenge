import React from "react";

type FruitProps = {
    name: string
    colors: string[]
    inSeason: boolean
}

const Fruit = ({ name, colors, inSeason }: FruitProps) => (
    <article>
        <h3>{name}</h3>
        <ul>
            Colors:
            {colors.map(color => <li><strong>{color}</strong></li>)}
        </ul>
        <p>
            <strong>In Season:</strong> {inSeason ? "Yes" : "No"}
        </p>
    </article>
);

export default Fruit;
