import Quiz from './Quiz'
import { useEffect,useState } from 'react';
import { jsQuizz } from './constants';

function App() {
   useEffect(()=>{
    getQuestions();
   },[]);
   
   const getQuestions=async()=>{
    try{
      const response=await fetch("https://6623cf343e17a3ac84704e9d.mockapi.io/questions");
      const questionsResponse =await response.json();
      console.log(questionsResponse);
    }catch(error){
      console.log(error);
    }
   }

    return <Quiz questions={jsQuizz.questions} />;  
}

export default App;
