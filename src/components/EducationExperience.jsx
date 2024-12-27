import * as React from "react";
import * as Tabs from "@radix-ui/react-tabs";

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

          <ul className="bullet-list">
            <li className="bullet-listitem">
              <a className="company-link" href="https://360eec.com/" target="_blank">
                <span className="company-logo-container">
                  <img
                    className="company-logo"
                    src="/portfolio-v2/company-one-logo.png"
                  ></img>
                </span>
              </a>
              <div className="experience-one">
                <p className="subtext">Apr 2023 - May 2023</p>
                <p className="job-title">
                  <b>360 Engineering & Environmental Consulting</b>
                </p>
                <p className="subtext">Digital Integration Co-Op Student</p>
                <ul className="description-list">
                  <li>
                    Spearheaded the successful migration of over 100 user
                    profiles to Microsoft’s Azure Active Directory from an
                    on-premise domain using Windows 2012, improving security
                    protocols and ensuring regulatory compliance.{" "}
                  </li>
                  <li>
                    Automated client file standardization by developing and
                    deploying custom PowerShell scripts, leading to an increase
                    in workflow efficiency and reducing human error.{" "}
                  </li>
                  <li>
                    Played a pivotal role in the formation of the IT department,
                    contributing to long-term infrastructure strategies that set
                    the foundation for scalable future growth.
                  </li>
                  <li>
                  Created comprehensive documentation and guidelines, accelerating onboarding and training processes for future full-time employees and co-op students.
                  </li>
                </ul>
              </div>
            </li>
          </ul>
 
      </Tabs.Content>
      <Tabs.Content value="tab2" className="tab-content">
        {}
              <ul className="bullet-list">
            <li className="bullet-listitem">
              <a className="education-link" href="https://www.mtroyal.ca/index.htm" target="_blank">
                <span className="education-logo-container">
                  <img
                    className="education-logo"
                    src="/portfolio-v2/mru-logo.png"
                  ></img>
                </span>
              </a>
              <div className="education-one">
                <p className="subtext">Sept 2020 - Dec 2024</p>
                <p className="job-title">
                  <b>Bachelor of Computer Information Systems</b>
                </p>
                <p className="subtext">Mount Royal University</p>
                <ul className="description-list">
                  <li>
                  Dean's Honour Roll x3
                  </li>
                </ul>
              </div>
            </li>
          </ul>
      </Tabs.Content>
    </Tabs.Root>
  );
}
