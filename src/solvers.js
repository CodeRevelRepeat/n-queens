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

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;

  var board = newBoard({n: n});
  var clearRow = function(){
    return [0, 0, 0];
  };

  var row = board.get(0);
  // get first row of board
  row[0] = 1;
  // set first element of this row to 1
  board.set(0, row)
  // insert this row with the 1 into the board
  board.hasAnyRooksConflicts; //false
  // check if the board has any conflicts

  //if no conflicts, move to next row of board
  row = board.get(0+1);
  // get next row of board
  row[0] = 1;
  // set first element of this row to 1
  board.set(0+1, row);
  // insert this row with the 1 into the board
  board.hasAnyRooksConflicts; //true
  // check for conflicts
    // if there is a conflict
    board.set(0+1, [0, 0, 0]);
    // reset row in board to all 0's
    row = [0, 0, 0];
    // reset practice row
  row[0+1] = 1;
  // move to next element in row, add a value
  board.set(0+1, row);
  // insert modified row into board
  board.hasAnyRooksConflicts; //false
  // check for conflicts

  row = board.get(0+1+1)


//get complete board...
//increment solutionCount
//reset
//start over with first row second element to 1








  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
