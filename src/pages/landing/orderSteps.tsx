import { Card } from "@/components/ui/card"
import saladImg from '/decoration/salad.png'
import { steps } from "@/data/steps"

const OrderSteps = () => {

  return (
    <section className="bg-orange-50 py-24 px-4 relative overflow-hidden">
      <img
        src={saladImg}
        alt="Decorative salad image"
        className="absolute top-0 right-[-40%] sm:right-[-5%] w-96 h-96 object-cover opacity-20"
      />
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">How To Order?</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Follow these three simple steps to enjoy your favorite meals delivered fresh to your door-fast, secure, and hassle-free.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step) => {
            const IconComponent = step.icon
            return (
              <Card
                key={step.id}
                data-testid={`step-${step.id}`}
                className="relative bg-white border border-border hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8 md:p-10">
                  {/* Icon Circle and Step Label */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex-1">
                      <div className="bg-orange-500 group-hover:bg-white border-2 border-orange-500 w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mb-4 shrink-0 transition-colors duration-300">
                        <IconComponent className="w-10 h-10 md:w-12 md:h-12 text-white group-hover:text-orange-500 group-hover:animate-bounce" strokeWidth={1.5} />
                      </div>
                    </div>
                    <span className="text-orange-500 bg-orange-50 group-hover:bg-orange-500 group-hover:text-white font-semibold text-lg rounded-l-full py-2 px-4 absolute top-5 right-0 transition-colors duration-300">
                        Step {step.id}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">{step.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default OrderSteps