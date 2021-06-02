//------------------AJOUT DES ACTIVITES---------------------
export default function(activitesList = [], action){
    if(action.type == 'addActivities'){
        return action.activites
    } else {
        return activitesList
    }
}