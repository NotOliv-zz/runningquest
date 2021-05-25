export default function(RankingList = [], action){
    if(action.type == 'addRanking'){
      
        return action.ranking
    } else {
        return RankingList
    }
}