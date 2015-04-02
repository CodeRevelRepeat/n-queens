/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var board = new Board({n: n});


  var solution = board.rows();
  var start = 0;

  for(var i =0; i < solution.length; i++){
    solution[i][start] = 1;
    start ++;
  }

  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  if(n === 1){
    return 1;
  }
  var solutionCount = 0;
  var solutionStorage = [];

  var rooksBoardx = new Board({n: n});
  var matrix = rooksBoardx.rows();
  var firstRow = matrix[0];



  var recursiveAdd = function(rooksBoardx, targetRow, rowsRemaining){
    if(rowsRemaining === 0){
      solutionStorage.push(rooksBoardx.rows());
      solutionCount++;
      return;
    }

    for(var j = 0; j < n; j++){

      rooksBoardx.togglePiece(targetRow, j);

      if(rooksBoardx.hasAnyRooksConflicts()){
        rooksBoardx.togglePiece(targetRow, j);
      } else{
        recursiveAdd(rooksBoardx, targetRow + 1, rowsRemaining - 1);
        rooksBoardx.togglePiece(targetRow, j);
      }
    }
  };


  for(var i = 0; i < n; i++){

    rooksBoardx.togglePiece(0, i);
    recursiveAdd(rooksBoardx, 1, n - 1);
    var rooksBoardx = new Board({n:n});
    matrix = rooksBoardx.rows();
    firstRow = matrix[0];



  }


   //create 000 board
  //Insert first rook, go down tree to child
  //add rook to first child
    //check if conflict
    //  if conflict, stop and restore to 0, go to sibling insert rook
    //  if not conflict, move to next child and insert rook
    //  keeps going until no more board and then push game solution
    //
    //  reset whole board
    //  rook to second position first row, repeat
  //





  //console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  //console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  //console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
