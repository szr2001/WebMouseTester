import './Section.css'

function Section({title, desc}) {
  return (
      <div className="section-holder">
          <h1 className="section-title">{title}</h1>
          <p className="section-desc">{desc}</p>
      </div>
  );
}

export default Section;