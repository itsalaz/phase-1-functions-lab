/* 
const doMathBlocks = function distanceFromHqInBlocks(start, destination) {
 console.log(destination - start)
}
doMathBlocks(50, 42)

const doMathFeet = function distanceTravelledinFeet(start, destination) {
  console.log((destination - start)*264)
}
doMathFeet(50, 42)
*/

function distanceFromHqInBlocks(n) {
  if (n > 42) {
    return (n-42)
  } else 
  return (42-n)
}

function distanceFromHqInFeet(nInFeet) {
  if (nInFeet > 42) {
    return ((nInFeet-42)*264)
  } else
  return ((42-nInFeet)*264)
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
      return ((start-destination)*264)
    } else
    return ((destination-start)*264)
  }



function calculatesFarePrice(start, destination) {
  let ft = distanceTravelledInFeet(start, destination)
  if (ft < 400) {
    return 0
  } else if(ft > 400 && ft < 2000) {
    return((ft - 400)*0.02)
  } else if(ft > 2000 && ft < 2500) {
    return(25)
  } else if(ft > 2500) {
    return('cannot travel that far')
  }

}

