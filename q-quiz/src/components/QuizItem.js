import React from 'react'

const QuizItem = ({ data }) => {

    const { correctAnswer, id, options, question } = data;
    console.log(data)
    return (
        <div className='mb-3'>
            <article>

                <div className='questions'
                    dangerouslySetInnerHTML={{ __html: question }}
                />

            </article>

            <form className="donation-form" action="">
                <div className="row">

                    {
                        options.map((option, index) =>
                            <div className=" col-md-6" key={index}>
                                <div className="radio-field">
                                    <input className="op-1" type="radio" name="donate-cause" />
                                    <label htmlFor="donate-cause">{option}</label>
                                </div>
                            </div>
                        )
                    }



                </div>
            </form>

        </div>
    )
}

export default QuizItem