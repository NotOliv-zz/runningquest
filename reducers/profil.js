export default function(profil = "", action){
    if(action.type == 'addProfil'){
        return action.profil
    } else {
        return profil
    }
}

