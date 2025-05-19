
import React from 'react';

const JudgingCriteria = () => {
  const criteria = [
    {
      name: "Impact",
      weight: 25,
      description: "Potential business value and alignment with WonderBotz strategic direction"
    },
    {
      name: "Technical Feasibility",
      weight: 25,
      description: "Viability of implementation and technical architecture"
    },
    {
      name: "Originality",
      weight: 25,
      description: "Innovative approach and uniqueness of solution"
    },
    {
      name: "Presentation Clarity",
      weight: 20,
      description: "Clear communication of problem and solution"
    },
    {
      name: "Documentation Quality",
      weight: 5,
      description: "Thoroughness and clarity of technical documentation"
    }
  ];

  return (
    <section id="judging" className="scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-purple-900">Judging Criteria</h2>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-purple-100">
          <div className="p-6 border-b border-purple-100 bg-purple-50">
            <h3 className="text-xl font-bold text-purple-900">How Projects Will Be Evaluated</h3>
            <p className="text-gray-700 mt-2">
              Both the initial one-pager submissions and the final hackathon projects will be judged using the same criteria weights.
            </p>
          </div>
          
          <div className="p-6">
            <div className="space-y-6">
              {criteria.map((criterion) => (
                <div key={criterion.name} className="flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/3">
                    <h4 className="text-lg font-semibold text-purple-900">{criterion.name}</h4>
                    <div className="text-purple-700 font-medium">{criterion.weight}%</div>
                  </div>
                  <div className="md:w-2/3 mt-2 md:mt-0">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-purple-600 rounded-full" 
                        style={{ width: `${criterion.weight}%` }}
                      ></div>
                    </div>
                    <p className="text-gray-600 mt-2">{criterion.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-10 bg-gradient-to-r from-purple-100 to-indigo-100 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-purple-900 mb-3">Judging Panel</h3>
          <p className="text-gray-700">
            Projects will be evaluated by a panel of senior leadership including representatives from:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <div className="bg-white/60 py-3 px-4 rounded-lg text-center">CTO</div>
            <div className="bg-white/60 py-3 px-4 rounded-lg text-center">VP Product</div>
            <div className="bg-white/60 py-3 px-4 rounded-lg text-center">Head of AI</div>
            <div className="bg-white/60 py-3 px-4 rounded-lg text-center">Innovation Director</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JudgingCriteria;
