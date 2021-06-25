import { SectionTabs } from '@components/RenderSectionts'
import cn from 'classnames'
import { FC, useState } from 'react'

const TabsSection: FC<SectionTabs> = ({ heading, options }) => {
  const [selectedTab, setSelectedTab] = useState(options[0])

  return (
    <section
      className="bg-white relative bg-no-repeat	bg-bottom bg-contain"
      style={{
        backgroundImage: 'url(/images/bg-pink.svg)',
      }}
    >
      <div className="container mx-auto flex flex-col items-center px-8">
        <h2>{heading}</h2>

        <div className="flex flex-col md:flex-row items-center justify-center mt-9 space-x-5 space-y-4 md:space-y-0">
          {options.map((tab, index) => {
            const isActive = tab.heading === selectedTab.heading
            return (
              <button
                onClick={() => setSelectedTab(tab)}
                className={cn('hover:bg-gray-5 hover:border-white', {
                  'bg-gray-5': isActive,
                  'text-white': isActive,
                  'border-white': isActive,
                })}
                key={`TAB_${index}`}
              >
                {tab.heading}
              </button>
            )
          })}
        </div>

        <div className="border border-gray-4 mt-12 w-full lg:w-2/3">
          {selectedTab.values.map((option, index) => {
            return (
              <div
                className="flex flex-col md:flex-row md:items-center border-b border-gray-4 px-7 py-2"
                key={`OPTION_TAB_${index}`}
              >
                <div className="w-full md:w-4/12">
                  <p className="font-montserrat text-13.5 tracking-1.62 uppercase text-left">
                    {option.label}
                  </p>
                </div>

                <div className="w-full md:w-8/12">
                  <p className="text-left">{option.value}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TabsSection
