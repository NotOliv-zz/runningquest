export default function(challenge = [], action){
    if(action.type == 'addChallenge'){
        return action.challenge
    } else {
        return challenge
    }
}