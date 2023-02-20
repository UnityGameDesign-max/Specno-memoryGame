export const shuffleCards = (cardArray, assignCards) => {
    const randomCards = [...cardArray]
    .sort(() => Math.random() - 0.5)
    .map((card) => (
        {
            ...card, id: Math.random()
        }
    ));

    assignCards(randomCards);
}