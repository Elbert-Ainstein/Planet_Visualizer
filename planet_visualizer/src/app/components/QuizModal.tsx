import { useState } from 'react';
import { QuizQuestion } from '../data/quizData';

interface QuizModalProps {
  questions: QuizQuestion[];
  onClose: () => void;
  onScoreChange: (delta: number) => void;
}

export default function QuizModal({ questions, onClose, onScoreChange }: QuizModalProps) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [correct, setCorrect] = useState(false);

  const handleAnswer = (idx: number) => {
    setSelected(idx);
    const isCorrect = idx === questions[current].answer;
    setCorrect(isCorrect);
    setShowResult(true);
    if (isCorrect) onScoreChange(1);
  };

  const handleNext = () => {
    setSelected(null);
    setShowResult(false);
    setCorrect(false);
    setCurrent((prev) => prev + 1);
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-gray-900 text-white p-8 rounded-lg max-w-lg w-full border-2 border-blue-500 shadow-2xl">
        <h2 className="text-xl font-bold mb-4">Quiz</h2>
        <div className="mb-4">
          <div className="font-semibold mb-2">{questions[current].question}</div>
          <div className="text-xs text-gray-400 mb-2">No second chances: your first answer is final.</div>
          <div className="flex flex-col gap-2">
            {questions[current].options.map((opt, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 rounded border border-blue-500/30 transition-colors text-left ${
                  selected === idx
                    ? (idx === questions[current].answer
                        ? 'bg-green-600 text-white'
                        : 'bg-red-600 text-white')
                    : 'bg-gray-800 hover:bg-blue-700'
                }`}
                disabled={showResult}
                onClick={() => handleAnswer(idx)}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
        {showResult && (
          <div className="mb-4 flex items-center gap-2">
            {correct ? (
              <span className="text-green-400 font-bold">Correct!</span>
            ) : (
              <span className="text-red-400 font-bold flex items-center"><svg xmlns='http://www.w3.org/2000/svg' className='inline w-5 h-5 mr-1' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' /></svg>Incorrect.</span>
            )}
          </div>
        )}
        <div className="flex justify-between items-center mt-4">
          <button
            className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
            onClick={onClose}
          >
            Close
          </button>
          {showResult && current < questions.length - 1 && (
            <button
              className="px-4 py-2 bg-green-500 rounded hover:bg-green-600"
              onClick={handleNext}
            >
              Next
            </button>
          )}
          {showResult && current === questions.length - 1 && (
            <span className="text-blue-300 font-bold">Quiz Complete!</span>
          )}
        </div>
      </div>
    </div>
  );
} 