export default function(challengeList = [], action){
    if(action.type == 'addchallengeList'){
        return action.challengeList
    } else {
        return challengeList
    }
}