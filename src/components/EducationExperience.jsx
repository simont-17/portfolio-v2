import * as React from 'react';
import * as Tabs from '@radix-ui/react-tabs';


export default function EducationExperience() {
  return (
    <Tabs.Root defaultValue="tab1">
      {/* Tab List */}
      <Tabs.List aria-label="Example Tabs" className="tabs-list">
        <Tabs.Trigger value="tab1" className="tab-trigger">
          Experience
        </Tabs.Trigger>
        <Tabs.Trigger value="tab2" className="tab-trigger">
          Education
        </Tabs.Trigger>
      </Tabs.List>

      {/* Tab Content */}
      <Tabs.Content value="tab1" className="tab-content">
        <div>Content for Tab 1</div>
      </Tabs.Content>
      <Tabs.Content value="tab2" className="tab-content">
        <div>Content for Tab 2</div>
      </Tabs.Content>
    </Tabs.Root>
  );
}
