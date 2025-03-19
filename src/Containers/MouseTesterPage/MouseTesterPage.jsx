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
          <TextSection title="What is a mouse test?" desc={["A mouse test is meant to test the device for problems like double click and rabies. It also works on solar power and drugs.", "It's also the thing you hold in your hand right now :D "]} />
          <TextSection title="Why are we here?" desc="Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer," />
      </div>
  );
}

export default MouseTesterPage;