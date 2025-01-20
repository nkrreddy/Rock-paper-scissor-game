let score=JSON.parse(localStorage.getItem('score'));
        
        if(!score){
            score={
                wins:0,
                losses:0,
                Ties:0

            };
        }
         
        updateScore();
        let isAutoPlaying = false;
        let intervelId;
        function autoPlay(){
            if(!isAutoPlaying){
            intervelId  =  setInterval(() =>{
                const playMove = pickOne();
                playGame(playMove);

            },1000);
            isAutoPlaying =true;
        }else{
            clearInterval(intervelId);
            isAutoPlaying =false;
        }
        }
        function playGame(PlayerMove) {
            
            const computerMove = pickOne();
            let result = '';
            if (PlayerMove === 'rock') {
                if (computerMove === 'rock') {
                    result = 'Tie';
                }
                else if (computerMove === 'paper') {
                    result = 'you lose';
                }
                else if (computerMove === 'scissors') {
                    result = 'you win';
                }
            } else if (PlayerMove === 'paper') {
                if (computerMove === 'paper') {
                    result = 'Tie';
                }
                else if (computerMove === 'rock') {
                    result = 'you win';
                }
                else if (computerMove === 'scissors') {
                    result = 'you lose';
                }

            } else if (PlayerMove === 'scissors') {
                if (computerMove === 'rock') {
                    result = 'you lose';
                }
                else if (computerMove === 'paper') {
                    result = 'you win';
                }
                else if (computerMove === 'scissors') {
                    result = 'Tie';
                } 

            }
            if(result === 'you win'){
                score.wins += 1;
            }else if(result === 'you lose'){
                score.losses+=1;
            }else if(result === 'Tie'){
                score.Ties+=1;
            }
           localStorage.setItem('score', JSON.stringify(score));

           updateScore();
           document.querySelector('.js-result').innerHTML = ` ${result}`;
           document.querySelector('.js-move').innerHTML = `You <img class="img2" src="${PlayerMove}-emoji.png">
            <img class="img2" src="${computerMove}-emoji.png"> comptuer`;
         
            
        }
        function updateScore(){
            document.querySelector('.js-score')
            .innerHTML =`wins: ${score.wins}, losses: ${score.losses}, Ties: ${score.Ties}`;
        }
       
        function pickOne() {
            const rannum = Math.random();
             let computerMove='';
            if (rannum >= 0 && rannum <= (1 / 3)) {
                computerMove = 'rock';
            }
            else if (rannum > (1 / 3) && rannum <= (2 / 3)) {
                computerMove = 'paper';
            }
            else if (rannum > (2 / 3) && rannum <= 1) {
                computerMove = 'scissors';
            }
            return computerMove;
        }