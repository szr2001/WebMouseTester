import { MouseProfiler, TextSection } from '../../Components';
import './MouseTesterPage.css'

function MouseTesterPage() {
  return (
      <div>
          <div className="mouse-test">
              <MouseProfiler maxCountSize={50} doubleClickInterval={90} />
              <div className="profiler-details">
                  <div className="profiler-detail">
                      <div className="profiler-result profiler-result-undefined" />
                      <p className="profiler-result-desc"> Button not checked</p>
                  </div>
                  <div className="profiler-detail">
                      <div className="profiler-result profiler-result-success" />
                      <p className="profiler-result-desc"> No problems found</p>
                  </div>
                  <div className="profiler-detail">
                      <div className="profiler-result profiler-result-error" />
                      <p className="profiler-result-desc"> Double click detected</p>
                  </div>
              </div>
          </div>
          <TextSection title="What is a mouse test?" desc={["A mouse test is an online tool that helps you check if your mouse is functioning correctly."," It can detect issues like double-clicking or unresponsive buttons."]}/>
          <TextSection title="Can I fix a double-clicking mouse?" desc={["Yes! Try adjusting the double-click speed settings in your operating system, or updating/reinstalling the mouse drivers.", "If the issue persists, the switch inside the button may be worn out, in that case you could try oppening it up and clean the button contacts, if that doesn't work then it might be time to buy another one.." ]}/>
      </div>
  );
}

export default MouseTesterPage;