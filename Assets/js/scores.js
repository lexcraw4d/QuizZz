let scoresEl = document.getElementById("finalScore");


function getScores(){
    let finalScoreArray= JSON.parse(localStorage.getItem("scores"))
    // console.log('finalscorearr', finalScoreArray)
    console.log(finalScoreArray)
    for (let i = 0; i<finalScoreArray.length; i++){
        let results = document.createElement('div');
        results.setAttribute('class', 'results')
     
      
        results.textContent = `${finalScoreArray[i].userIntials} ${finalScoreArray[i].score}
         `
        // resultScore.textContent = `${finalScoreArray[i].score}`
        
        scoresEl.appendChild(results);
        // scoresEl.appendChild(resultScore);
       
   }
  }

getScores();