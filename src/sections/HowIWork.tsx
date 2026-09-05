import { HOW_I_WORK } from '../data/howIWork'
import './HowIWork.css'

function HowIWork() {
  return (
    <section id="how-i-work" className="how-i-work">
      <h2 className="how-i-work__heading">How I Work</h2>

      <div className="how-i-work__grid">
        {HOW_I_WORK.map((item) => (
          <article className="how-i-work__card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default HowIWork
