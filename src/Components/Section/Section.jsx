import './Section.css'

function Section({ title, desc, children }) {
  return (
      <div className="section-holder">
          <h1 className="section-title">{title}</h1>
            {Array.isArray(desc) ? (
                desc.map((text, index) => <p key={index} className="section-desc">{text}</p>)
            ) : (
                <p className="section-desc">{desc}</p>
          )}
          {children}
      </div>
  );
}

export default Section;