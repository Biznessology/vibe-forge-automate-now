
import React from 'react';

const Timeline = () => {
  const timelineItems = [
    {
      id: 1,
      title: "Announcement & Registration Opens",
      description: "Official announcement of Vibe-A-Thon and registration begins",
      date: "Week 1",
      icon: "🚀",
    },
    {
      id: 2,
      title: "One-Pager Submissions Due",
      description: "Teams submit their one-page proposal outlining problem statement, approach, and architecture",
      date: "Week 2",
      icon: "📝",
    },
    {
      id: 3,
      title: "Proposal Review Period",
      description: "Review panel evaluates one-pagers and selects teams to participate",
      date: "Week 2-3",
      icon: "🔍",
    },
    {
      id: 4,
      title: "Team Announcement",
      description: "Selected teams are announced and provided with resources",
      date: "Week 3",
      icon: "📢",
    },
    {
      id: 5,
      title: "Hackathon Day",
      description: "24-hour development sprint at WonderBotz Ahmedabad HQ",
      date: "Week 4",
      icon: "⚡",
    },
    {
      id: 6,
      title: "Post-Event Showcase",
      description: "Winning teams present at company all-hands meeting",
      date: "Week 5",
      icon: "🏆",
    },
  ];

  return (
    <section id="timeline" className="scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-purple-900">Event Timeline</h2>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-200"></div>
          
          {timelineItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`flex flex-col md:flex-row items-center justify-between mb-8 relative ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center z-10">
                <span>{item.icon}</span>
              </div>
              
              {/* Content box */}
              <div className={`md:w-5/12 bg-white p-6 rounded-lg shadow-md border border-purple-100 ${
                index % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto'
              }`}>
                <h3 className="text-xl font-bold text-purple-900">{item.title}</h3>
                <div className="text-sm text-purple-700 font-semibold mb-2">{item.date}</div>
                <p className="text-gray-600">{item.description}</p>
              </div>
              
              <div className="md:w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
