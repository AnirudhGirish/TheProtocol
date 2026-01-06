import React, { useState, useEffect } from 'react';
import { TriangleAlert, ChevronRight, Droplets, Dumbbell, Activity, HeartPulse } from 'lucide-react';
import { TabId, Exercise } from './types';
import { WORKOUT_DATA } from './constants';
import Modal from './components/Modal';

const App: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<TabId>(TabId.PUSH);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activeWorkout = WORKOUT_DATA.find(d => d.id === activeTabId);

  const handleExerciseClick = (exercise: Exercise) => {
    setSelectedExercise(exercise);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedExercise(null), 200); // Clear after animation
  };

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <div className="min-h-screen bg-[#f8f9fa] pb-20 selection:bg-[#ff5e00] selection:text-white">
      
      {/* 1. Global Safety Banner */}
      <div className="sticky top-0 z-40 w-full bg-[#ff5e00] text-white px-4 py-3 shadow-md">
        <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
                <TriangleAlert className="flex-shrink-0 mt-0.5 animate-pulse" size={20} strokeWidth={2.5} />
                <div className="flex flex-col gap-1">
                    <p className="text-sm font-bold leading-tight uppercase tracking-wide">
                        CRITICAL TEMPO: 1s Explosive UP / 3s Slow DOWN.
                    </p>
                    <p className="text-xs opacity-90 font-medium">
                        (Tension prevents loose skin)
                    </p>
                </div>
            </div>
            <div className="mt-2 pt-2 border-t border-white/30 flex items-center gap-2">
                <Droplets size={14} className="opacity-90" />
                <p className="text-xs font-semibold">Hydration Rule: Drink 500ml water during this session.</p>
            </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        
        {/* 2. Header */}
        <header className="px-5 pt-8 pb-6">
            <h1 className="text-3xl font-black font-serif text-[#171717] tracking-tight mb-1">
                The Anirudh Protocol
            </h1>
            <p className="text-sm text-gray-500 font-medium tracking-wide uppercase border-l-2 border-[#ff5e00] pl-3">
                Gym Engine: Safe Mechanics / Aesthetic Hypertrophy
            </p>
        </header>

        {/* 3. Tabbed Navigation */}
        <div className="sticky top-[88px] z-30 bg-[#f8f9fa] pt-2 px-2 pb-4 shadow-[0_10px_20px_-10px_rgba(0,0,0,0.05)]">
            <div className="flex bg-white p-1 rounded-none shadow-sm border border-gray-200">
                {WORKOUT_DATA.map((tab) => {
                    const isActive = activeTabId === tab.id;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTabId(tab.id)}
                            className={`flex-1 flex flex-col items-center justify-center py-3 transition-all duration-300 ${
                                isActive 
                                ? 'bg-[#171717] text-white shadow-md transform scale-[1.02]' 
                                : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
                            }`}
                        >
                            <span className={`text-base font-bold tracking-wider ${isActive ? 'opacity-100' : 'opacity-80'}`}>
                                {tab.label}
                            </span>
                            <span className={`text-[10px] uppercase mt-0.5 ${isActive ? 'text-[#ff5e00]' : 'text-gray-300'}`}>
                                {tab.subLabel}
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>

        {/* 4. Workout List */}
        <main className="px-4 py-4 space-y-3">
            {activeWorkout?.exercises.map((exercise, index) => (
                <div 
                    key={exercise.id}
                    onClick={() => handleExerciseClick(exercise)}
                    className="group bg-white border border-gray-200 p-5 shadow-sm active:scale-[0.98] active:border-[#ff5e00] transition-all cursor-pointer relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#171717] group-hover:bg-[#ff5e00] transition-colors" />
                    
                    <div className="flex items-start justify-between">
                        <div className="flex-1 pr-4">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                    {exercise.isCardio ? 'Cardio Finisher' : `Exercise 0${index + 1}`}
                                </span>
                                {exercise.isCardio ? (
                                    <HeartPulse size={12} className="text-[#ff5e00]" />
                                ) : (
                                    <Dumbbell size={12} className="text-gray-400" />
                                )}
                            </div>
                            
                            <h3 className="text-lg font-bold text-[#171717] leading-tight font-serif mb-2">
                                {exercise.name}
                            </h3>

                            <div className="flex items-center gap-3">
                                {exercise.isCardio ? (
                                     <div className="inline-flex items-center bg-orange-50 px-2 py-1 rounded border border-orange-100">
                                        <Activity size={12} className="text-[#ff5e00] mr-1.5" />
                                        <span className="text-xs font-semibold text-[#ff5e00] font-mono">
                                            {exercise.protocol?.split('|')[0]}
                                        </span>
                                     </div>
                                ) : (
                                    <div className="inline-block bg-gray-100 px-2 py-1 rounded">
                                        <span className="text-xs font-semibold text-[#171717] font-mono">
                                            {exercise.setsReps}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                        
                        <div className="self-center opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0">
                             <div className="w-8 h-8 rounded-full bg-[#f8f9fa] flex items-center justify-center">
                                <ChevronRight size={18} className="text-[#171717]" />
                             </div>
                        </div>
                    </div>
                </div>
            ))}
        </main>

        <div className="text-center py-8 text-gray-300">
            <Activity size={24} className="mx-auto mb-2 opacity-20" />
            <p className="text-xs uppercase tracking-widest opacity-50">End of Protocol</p>
        </div>

      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        exercise={selectedExercise} 
      />
    </div>
  );
};

export default App;