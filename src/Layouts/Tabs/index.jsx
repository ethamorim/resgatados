import { useState } from "react";

import sheet from './style.module.scss';

function Tabs(props) {
  const tabs = props.tabs;
  const [ activeTab, setActiveTab ] = useState(tabs[0].tab);

  return (
    <div className={sheet.tabs}>
      <nav>
        <ul>
          {tabs.map(el => (
            <li
              className={el.tab === activeTab ? sheet.ativa : ''}
              key={el.tab}
              onClick={() => {
                if (el.tab !== activeTab)
                  setActiveTab(el.tab);
              }}>
              { el.tab }
            </li>
          ))}
        </ul>
      </nav>

      <div className={sheet.components}>
        {tabs.find(el => el.tab === activeTab).component}
      </div>
    </div>
  );
}

export default Tabs;
