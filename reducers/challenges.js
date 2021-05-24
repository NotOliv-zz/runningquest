export default function(challengesList = [], action){
    if(action.type == 'addChallenges'){
        return action.challengesList
    } else {
        return challengesList
    }
}