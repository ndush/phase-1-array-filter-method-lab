const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, matchingList){
    return drivers.filter(function(drivers)
    {
    return drivers.toLowerCase()===matchingList.toLowerCase()    
    })
}
console.log(findMatching(drivers, "Bobby"))

function fuzzyMatch( drivers ,query){
    return drivers.filter(function(drivers){
        return drivers.toLowerCase().startsWith(query.toLowerCase())
    })
}
console.log(fuzzyMatch(drivers,"a" ))

const driversInfo = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
  function matchName(driversInfo, recordName){
    return driversInfo.filter(function(driversInfo){
        return driversInfo.name===recordName
    })
  }
  console.log(matchName(driversInfo,"Sally"))