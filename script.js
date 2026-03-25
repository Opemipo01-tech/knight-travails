function getMoves([X,Y]){
    const moves = [
        [X + 2, Y +1],[X + 2, Y -1],
        [X - 2, Y + 1],[X -2, Y -1],
        [X + 1,Y - 2],[X - 1,Y + 2],
        [X - 1,Y - 2], [X + 1, Y + 2] 
    ]
let validMoves = []
moves.forEach(move => {
    const [newX,newY] = move
    if(newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7) {
        validMoves.push(move)
    }
});
   return validMoves; 
}

function knightMoves(startPoint, endPoint){
  if (startPoint[0] === endPoint[0] && startPoint[1] === endPoint[1]){
    return [startPoint]
}

  const queue = [];
  queue.push([startPoint,[startPoint]])
  const visited = new Set();
  visited.add(startPoint.toString());

  while(queue.length > 0) {
     const [currentPosition, pathSoFar] = queue.shift(); // Dequeue the first element

     if(currentPosition[0] === endPoint[0] && currentPosition[1] === endPoint[1]){
        return pathSoFar
     }
     const neighbours = getMoves(currentPosition);

     neighbours.forEach(neighbour => {
        const neighbourKey = neighbour.toString();
        if (!visited.has(neighbourKey)) {
            visited.add(neighbourKey);
            queue.push([neighbour,[...pathSoFar,neighbour]])
        }
     })

  }
}

// Test getMoves() alone
// Test BFS without path
// Then add path tracking