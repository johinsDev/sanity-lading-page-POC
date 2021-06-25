import Figure from '@components/Figure'
import { SectionStep } from '@components/RenderSectionts'
import cn from 'classnames'
import { FC } from 'react'

const StepsSection: FC<SectionStep> = ({ heading, subtitle, steps }) => {
  return (
    <section className="bg-white container mx-auto">
      <h2>{heading}</h2>

      <p className="mt-6">{subtitle}</p>

      <div className="flex flex-col">
        {steps.map((step, index) => {
          return (
            <div
              key={`STEP-${index}`}
              className="flex flex-col px-0 mt-8 md:px-4 lg:mt-12 lg:flex-row lg:px-8"
            >
              <div className="flex-1 flex flex-col mr-0 pt-4 lg:mr-4 xl:mr-8">
                <p className="uppercase text-lg font-montserrat tracking-2 text-left leading-37">
                  STEP {index + 1} — <br /> {step.stepName}
                </p>

                <button className="mt-5">VIEW THE VIDEO</button>
              </div>

              <div className="flex flex-col mt-0 md:mt-8 lg:mt-0 md:flex-row">
                {step.steps.map((subStep, indexSubStep) => {
                  return (
                    <div
                      className={cn(
                        'flex-1 flex flex-col text-left mt-10 md:mt-0',
                        {
                          'mr-0 md:mr-8 lg:mr-14':
                            indexSubStep !== step.steps.length - 1,
                        }
                      )}
                      key={`SUB_STEP-${indexSubStep}`}
                    >
                      <div className="flex items-center ">
                        <Figure node={subStep.icon} />

                        <div
                          className={cn('h-1px w-full bg-black ml-7', {
                            'h-0': indexSubStep === step.steps.length - 1,
                          })}
                        />
                      </div>
                      <p className="mt-2 md:mt-6">{subStep.stepName}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default StepsSection
