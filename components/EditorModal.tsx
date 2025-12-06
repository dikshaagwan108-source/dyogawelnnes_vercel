import React, { useState, useEffect } from 'react';
import { X, Sparkles, Loader2, Save } from 'lucide-react';
import { EditorProps } from '../types';
import Button from './Button';
import { generateContentSuggestion } from '../services/gemini';

const EditorModal: React.FC<EditorProps> = ({ 
  isOpen, 
  onClose, 
  field, 
  currentValue, 
  onSave,
  sectionTitle 
}) => {
  const [value, setValue] = useState(currentValue);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    setValue(currentValue);
  }, [currentValue, isOpen]);

  if (!isOpen) return null;

  const handleGenerate = async () => {
    setIsGenerating(true);
    const suggestion = await generateContentSuggestion(sectionTitle, value);
    setValue(suggestion);
    setIsGenerating(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h3 className="text-xl font-serif font-semibold text-gray-900">
            Edit {sectionTitle}
          </h3>
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Content
            </label>
            <textarea
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full h-48 p-4 text-gray-800 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none bg-gray-50"
              placeholder={`Enter your ${sectionTitle.toLowerCase()}...`}
            />
            
            {/* AI Action */}
            <div className="absolute bottom-4 right-4">
              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-brand-700 bg-brand-100 hover:bg-brand-200 rounded-full transition-colors disabled:opacity-50"
                title="Generate with AI"
              >
                {isGenerating ? (
                  <Loader2 size={14} className="animate-spin" />
                ) : (
                  <Sparkles size={14} />
                )}
                {isGenerating ? 'Thinking...' : 'AI Enhance'}
              </button>
            </div>
          </div>
          
          <p className="text-xs text-gray-500">
            Tip: Use the AI Enhance button to polish your text or generate new ideas tailored for corporate wellness.
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-6 bg-gray-50 border-t border-gray-100">
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button 
            variant="primary" 
            onClick={() => {
              onSave(field, value);
              onClose();
            }}
            className="flex items-center gap-2"
          >
            <Save size={18} />
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditorModal;