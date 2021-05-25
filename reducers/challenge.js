export default function(challenge = [], action){
    if(action.type == 'addChallenge'){
        return action.challenge
    } else if(action.type == 'addNewChallenge') {
        var challengeCopy = [...challenge]
        challengeCopy.push({Nom:action.Nom, Trophee:action.Trophee }) 
        return challengeCopy
    } else {
        return challenge
    }
}