import "./App.css";
import Accordion from "./components/Accordion";
import { CustomHook } from "./components/CustomHook";
import { UseCallback } from "./components/UseCallback";
import { UseImperativeHandle } from "./components/UseImparativeHanldel";
import { UseMemoExample } from "./components/UseMemoExample";
import { UseReduser } from "./components/UseReduser";
import { UserLayoutEffect } from "./components/UserLayoutEffect";
import { UserRefExample } from "./components/UserRefExample";

function App() {
  return (
    <div className="container mt-5">
      <div className="accordion" id="accordionHooks">
        {/* Item 1 */}
        <Accordion title="Introduction" header="One">
          <p>This is the content inside the first section (children).</p>
        </Accordion>

        {/* Item 2 */}
        <Accordion title="useRef Practice" header="Two">
          <UserRefExample />
        </Accordion>
        {/* Item 3 */}
        <Accordion title="useMemo Practice" header="Three">
          <UseMemoExample />
        </Accordion>

        <Accordion title="useCallback Practice" header="fure">
          <UseCallback />
        </Accordion>

        <Accordion title="useReduser Practice" header="Five">
          <UseReduser />
        </Accordion>

        <Accordion title="useLayoutEffect Practice" header="sex">
          <UserLayoutEffect />
        </Accordion>

        <Accordion title="useImparativeHandle  Practice" header="seven">
          <UseImperativeHandle />
        </Accordion>

        <Accordion title="Custom Hooks  Practice" header="eight">
          <CustomHook />
        </Accordion>
      </div>
    </div>
  );
}

export default App;
