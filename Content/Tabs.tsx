import React, { useState } from "react";

interface Tab {
  label: string;
  content: JSX.Element;
}

interface TabsProps {
  tabs: Tab[];
}
export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="contain py-24 px-4">
      <div className="flex flex-col gap-4 lg:flex-row">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`py-5 px-8 text-2xl text-black font-bold bg-brand_gray-250 relative ${
              index === activeTab ? "active" : ""
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">{tabs[activeTab].content}</div>
      );
    </div>
  );
};
