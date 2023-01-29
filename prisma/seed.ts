import { prisma } from "../src/server/db";

type FruitType = {
    name: string
    colors: string[]
    in_season: boolean
}

function buildFruit(fruit: FruitType) {
    return {
        name: fruit.name,
        // we need to turn from array in to string
        colors: fruit.colors,
        in_season: fruit.in_season
    }
}

const fruits =
    [
        {
            "name": "Apple",
            "colors": [
                "red",
                "green",
                "yellow"
            ],
            "in_season": true
        },
        {
            "name": "Orange",
            "colors": [
                "orange"
            ],
            "in_season": true
        },
        {
            "name": "Grapes",
            "colors": [
                "purple",
                "green"
            ],
            "in_season": false
        },
        {
            "name": "Lime",
            "colors": [
                "green"
            ],
            "in_season": false
        },
        {
            "name": "Banana",
            "colors": [
                "yellow",
            ],
            "in_season": false
        },
        {
            "name": "Watermelon",
            "colors": [
                "red"
            ],
            "in_season": false
        },
        {
            "name": "Blueberry",
            "colors": [
                "blue"
            ],
            "in_season": true
        },
        {
            "name": "Coconut",
            "colors": [
                "white"
            ],
            "in_season": true
        }
    ]


async function main() {
    // 1. forEach over fruit
    // 2. build so Prisma is happy
    // 3. create in db

    // @ts-ignore fix later
    fruits.forEach(async (fruit) => {
        const fruitAsDbSchema = buildFruit(fruit)
        // add to db
        const data = await prisma.fruit.create({
            data: fruitAsDbSchema
        });
        console.log(data);
    })
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });