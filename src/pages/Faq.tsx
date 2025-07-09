import { faqData } from "../assets/data"
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";



const Faq = () => {
    const [id,setId] = useState<string | null>(null)
  return (
    <section className="container pt-28">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black dark:text-p4 mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-p3 dark:text-[#94ABC7]">
          Find answers to common questions about our courses, enrollment, technical support, and certification.
        </p>
      </div>
      <div>
        {faqData.map((data) => (
          <div key={data.heading} className="py-[20px]">
              <h3 className="text-[22px] font-bold dark:text-p4 mb-[16px] ">{data.heading}</h3>
            <div className="flex flex-col gap-4">
              {data.questions.map((question) => {
                return (
                  <div className="bg-p4 dark:bg-[#21262B] rounded-2xl overflow-hidden transform border-[#D6DBE0] border-2 dark:border-dark-Cs flex flex-col py-[7px] px-[15px]" key={question.question}>
                    <div className="flex justify-between items-center">
                      <p className="py-[8px] text-[16px] font-semibold dark:text-p4">{question.question}</p>
                      <IoIosArrowDown className="dark:text-p4" onClick={()=>{
                        setId(id === question.question ? null : question.question)
                      }}/>
                    </div>
                          <p className="dark:text-p1">{question.answer}</p>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Faq
