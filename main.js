const questionsAll = document.querySelectorAll('.question');
let answerAll = document.querySelectorAll('.a');
questionsAll.forEach((question) => {
    question.addEventListener('click', () => {
        
        let children = question.getElementsByTagName('p')[1];
        console.log(typeof answerAll);
        console.log(answerAll);
        
        if(children.className === 'a active') {
            children.className = 'a';
         }else{
            answerAll.forEach((answer) => {
                answer.className = 'a';
            });
            children.className = 'a active';
         }
        
    });
});