function getCardName(path){
    if(!path || typeof(path) !== 'string'){
        return;
    }else{
        return path.slice(-5);
    }
}

export function compareMatchCards(cardOne, cardTwo, assignCards){
    if(cardOne && cardTwo){
        if(getCardName(cardOne.src) === getCardName(cardTwo.src)){
            assignCards(prevCard => {
                return prevCard.map(card =>{
                    if(getCardName(card.src) === getCardName(cardOne.src)){
                        return {...card, matched: true}
                    }else{
                        return card;
                    }
                })
            })
        }
    }
}