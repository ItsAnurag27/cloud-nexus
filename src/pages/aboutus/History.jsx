import React from 'react'
import subtitle_icon from '../../assets/images/subtitle-icon.png'

function History() {
  const historyData = [
    {
      year: "2024",
      content: {
        text: "They often mean leaving the perception of security in order to discover your personal freedom. These are the changes that will bring happiness and satisfaction into your life. Just go there now.",
        quote: "10 years out… having made a decade of changes. Imagine living the life you want to live.",
        conclusion: "The best way is to develop and follow a plan. Start with your goals in mind and then work backwards to develop the plan. What steps are required to get you to the goals? Make the plan as detailed as possible. Try to visualize and then plan for, every possible setback."
      }
    },
    {
      year: "2023",
      content: {
        text: "They often mean leaving the perception of security in order to discover your personal freedom. These are the changes that will bring happiness and satisfaction into your life. Just go there now.",
        quote: "10 years out… having made a decade of changes. Imagine living the life you want to live.",
        conclusion: "The best way is to develop and follow a plan. Start with your goals in mind and then work backwards to develop the plan. What steps are required to get you to the goals? Make the plan as detailed as possible. Try to visualize and then plan for, every possible setback."
      }
    },
    {
      year: "2022",
      content: {
        text: "They often mean leaving the perception of security in order to discover your personal freedom. These are the changes that will bring happiness and satisfaction into your life. Just go there now.",
        quote: "10 years out… having made a decade of changes. Imagine living the life you want to live.",
        conclusion: "The best way is to develop and follow a plan. Start with your goals in mind and then work backwards to develop the plan. What steps are required to get you to the goals? Make the plan as detailed as possible. Try to visualize and then plan for, every possible setback."
      }
    },
    {
      year: "2021",
      content: {
        text: "They often mean leaving the perception of security in order to discover your personal freedom. These are the changes that will bring happiness and satisfaction into your life. Just go there now.",
        quote: "10 years out… having made a decade of changes. Imagine living the life you want to live.",
        conclusion: "The best way is to develop and follow a plan. Start with your goals in mind and then work backwards to develop the plan. What steps are required to get you to the goals? Make the plan as detailed as possible. Try to visualize and then plan for, every possible setback."
      }
    }
  ];

  const HistoryItem = ({ year, content }) => (
    <div className="history-wrapper">
      <div className="history-year-sm">{year}</div>
      <div className="history-info">
        <div className="history-year-lg">{year}</div>
        <div className="history-content">
          <p>{content.text}</p>
          <blockquote>{content.quote}</blockquote>
          <p>{content.conclusion}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <section className="space-p bg-black ellipse-top">
      {/* <section className="space-pt bg-black ellipse-top"> */}
        <div className="space-pb ellipse-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="sticky-top" style={{top: 80}}>
                  <div className="section-title mb-0">
                    <span className="sub-title">
                      <img className="img-fluid" src={subtitle_icon} alt="subtitle icon" /> Our History
                    </span>
                    <h2 className="title">Our History</h2>
                  </div>
                  <p className="mb-5 mb-lg-0 ms-lg-5">
                  Positive, purpose-driven goals inspire greater motivation than fear-based ones. While both can drive success, the right balance of ambition and awareness creates the most powerful force for achievement.                  </p>
                </div>
              </div>
              <div className="col-lg-7">
                {historyData.map((item, index) => (
                  <HistoryItem 
                    key={item.year} 
                    year={item.year} 
                    content={item.content}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default History