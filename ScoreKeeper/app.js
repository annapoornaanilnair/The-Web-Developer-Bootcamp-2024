const p1btn = document.querySelector( '#player1' );
const p2btn = document.querySelector( '#player2' );
const rst = document.querySelector( '#reset' );
const score1 = document.querySelector( '#p1Score' );

const score2 = document.querySelector( '#p2Score' );
const scoreSelect = document.querySelector( '#playTo' );

let p1Score = 0
let p2Score = 0
let WinningScore = 3
let gameOver = false
p1btn.addEventListener( 'click', function ()
{
    if ( !gameOver )
    {
        p1Score += 1
    }
    if ( p1Score === WinningScore )
    {
        gameOver = true;
        score1.classList.add( 'winner' );
        p1btn.disabled = true;
        p2btn.disabled = true;
        score2.classList.add( 'loser' );
    }
    score1.innerText = p1Score

} )
p2btn.addEventListener( 'click', function ()
{
    if ( !gameOver )
    {
        p2Score += 1
    }
    if ( p2Score === WinningScore )
    {
        gameOver = true;
        score2.classList.add( 'winner' );
        score1.classList.add( 'loser' );
        p1btn.disabled = true;
        p2btn.disabled = true;
    }
    score2.innerText = p2Score
} )

rst.addEventListener( 'click', reset )

function reset ()
{
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    score1.textContent = p1Score;
    score2.textContent = p2Score;
    score1.classList.remove( 'winner', 'loser' );
    score2.classList.remove( 'winner', 'loser' );
    p1btn.disabled = false;
    p2btn.disabled = false;
}

scoreSelect.addEventListener( 'change', function ()
{
    WinningScore = parseInt( this.value )
    reset()
} )