function Question({question, answer}) {
    const quest ={question, answer};
    return <div>
                <h3 className="mb-2 ">{quest.question}</h3>
                <span className="mb-2 ">{quest.answer}</span>
            </div>
}

export default Question ;
