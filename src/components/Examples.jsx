import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import {useState } from 'react';
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

  let selectedContent = <p>Please select a topic.</p>
  if (selectedTopic) {
    selectedContent = (
      <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
    );
  }

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  }

    return (
        <Section id="examples" title="Examples">
        <Tabs buttons = {
            <>
                <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
                <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
                <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
            </>
        }>
            {selectedContent}
        </Tabs>   
        </Section>
    );
}
