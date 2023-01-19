interface IWizardStep {
  currentStep?: string | undefined;
}

export default function WizardStep({ currentStep }: IWizardStep) {
  const steps = [
    {
      title: 'Information',
      isStep: true,
    },
    {
      title: 'Shipping',
      isStep: currentStep !== undefined ? true : false,
    },
    {
      title: 'Paiement',
      isStep: currentStep === 'payment' ? true : false,
    },
  ];

  return (
    <div className="flex flex-row justify-between w-full py-8 space-x-3">
      {steps.map((step, index) => {
        return (
          <div
            key={index}
            className={` ${
              step.isStep ? 'border-indigo-600' : 'border-gray-200'
            } w-4/12 border-t-4 leading-4 text-xs`}
          >
            <p
              className={` ${
                step.isStep ? 'text-indigo-600 ' : 'text-gray-200'
              }font-medium pt-3`}
            >
              Etape {index + 1}
            </p>
            <p className="font-bold text-slate-800">{step.title}</p>
          </div>
        );
      })}
    </div>
  );
}
