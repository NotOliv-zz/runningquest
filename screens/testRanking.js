function Ranking () {
    
    const [sort, setSort] = useState()
    
    const user = [
        {
          pseudo: "user1",
          nbrKm: 45,
        },
        {
            pseudo: "user2",
            nbrKm: 30,
          },
    ]
    
    const sortBykm = (map,compareFn) => (a,b) => -compareFn(map(a),map(b));
    const byValue = (a,b) => a - b;
    const toKm = e => e.newkm;
    const byKm = sortBykm(toKm,byValue);
    setSort([...user].sort(byKm));  
    

    var listRanking = props.Activites.map(function(u) {
        return <View>
            <Text>{indexRanking} - {u.pseudo} - {u.newkm}Km</Text>
        </View>  
        })

};

function mapStateToProps(state) {

  return {Activites:state.ActivitiesList}
 }

export default connect(
  mapStateToProps,
  null
 )(Ranking);
