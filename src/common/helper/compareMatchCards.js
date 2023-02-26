function getCardName(path){
    if(!path || typeof(path) !== 'string'){
        return;
    }else{
        return path.slice(-5);
    }
}

function resetChosenCards(assignCardOne, assignCardTwo){
    setTimeout(() => {
        assignCardOne(null);
        assignCardTwo(null);
    }, 1000);
}

function checkCardSource(card){
    if(getCardName(card.src) === getCardName(card.src)){
        return {...card, matched: true};
    }else{
        return card;
    }
}

export function compareMatchCards(
    cardOne,
    cardTwo,
    assignCards,
    assignCardOne,
    assignCardTwo){
    if(cardOne && cardTwo){
        if(getCardName(cardOne.src) === getCardName(cardTwo.src)){
            assignCards(prevCard => {
                return prevCard.map(card =>{
                   checkCardSource(card)
                })
            })
            resetChosenCards(assignCardOne, assignCardTwo);
        }else{
            resetChosenCards(assignCardOne, assignCardTwo);
        }
    }
}



