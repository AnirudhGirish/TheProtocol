import React from 'react';
import { X, Info } from 'lucide-react';
import { Exercise } from '../types';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  exercise: Exercise | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, exercise }) => {
  if (!isOpen || !exercise) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#171717] bg-opacity-80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Content */}
      <div className="relative w-full max-w-lg bg-[#f8f9fa] rounded-none shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white">
          <h3 className="text-xl font-bold font-serif text-[#171717] leading-tight pr-4">
            {exercise.name}
          </h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} className="text-[#171717]" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          
          {/* Animation Placeholder */}
          <div className="w-full aspect-video bg-gray-200 flex items-center justify-center border border-gray-300">
            <span className="text-gray-400 font-medium text-sm uppercase tracking-widest text-center px-4">
              Animation Placeholder (GIF)
            </span>
          </div>

          {/* Form Tip */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-[#ff5e00]">
              <Info size={20} />
              <span className="text-xs font-bold uppercase tracking-widest">Biomechanical Form Tip</span>
            </div>
            <p className="text-lg leading-relaxed text-[#171717] font-medium border-l-4 border-[#ff5e00] pl-4 py-1">
              {exercise.detailedTip}
            </p>
          </div>

          {/* Protocol if cardio */}
          {exercise.isCardio && exercise.protocol && (
            <div className="bg-gray-100 p-4 border border-gray-200">
              <span className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Protocol</span>
              <p className="text-base font-semibold text-[#171717]">{exercise.protocol}</p>
            </div>
          )}
          
          {/* Sets/Reps Reminder */}
           {!exercise.isCardio && (
            <div className="bg-gray-100 p-4 border border-gray-200 flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Target</span>
              <p className="text-base font-semibold text-[#171717]">{exercise.setsReps}</p>
            </div>
           )}

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 bg-white">
          <button 
            onClick={onClose}
            className="w-full bg-[#171717] text-white py-4 text-sm font-bold uppercase tracking-widest hover:bg-black transition-colors"
          >
            Close Guide
          </button>
        </div>

      </div>
    </div>
  );
};

export default Modal;