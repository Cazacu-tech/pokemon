import Question from './Question';
import { useEffect, useState } from 'react';
import { quests } from './../data/questionData';

const AfficheFaq = () => {
    const [questions, setQuestions]= useState();

    useEffect(()=>{
        setQuestions(quests)
    },[])
    if(!questions)return <div>chargement...</div>
    return  <div className='text-center'>
                {questions.map((quest)=>(
                    <Question key={quest.id} {...quest}/>

                ))}
            </div>
}

export default AfficheFaq;