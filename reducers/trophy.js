export default function(trophy = [], action){
    if(action.type == 'addTrophy'){
        return action.trophy
    } else {
        return trophy
    }
}