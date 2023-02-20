export function compareMatchCards(cardOne, cardTwo){
    if(cardOne && cardTwo){
        if(cardOne.src.slice(-5) === cardTwo.src.slice(-5)){
            console.log('Those cards do match!');
            
        }else{
            console.log('Those cards do not match');
        }
    }
}