import { MouseProfiler, Section } from '../../Components';
import './MouseTesterPage.css'

function MouseTesterPage() {
  return (
      <div>
          <div className="mouse-test">
              <MouseProfiler maxCountSize={50} doubleClickInterval={90} />
          </div>
          <Section title="What is a mouse test?" desc={["A mouse test is meant to test the device for problems like double click and rabies. It also works on solar power and drugs.", "It's also the thing you hold in your hand right now :D "]} />
          <Section title="Why are we here?" desc="Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer,Just to suffer," />
      </div>
  );
}

export default MouseTesterPage;