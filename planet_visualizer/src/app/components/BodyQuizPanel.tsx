import { useState } from 'react';
import { QuizQuestion } from '../data/quizData';

interface BodyQuizPanelProps {
  questions: QuizQuestion[];
  onScoreChange: (delta: number) => void;
  onComplete: () => void;
}

export default function BodyQuizPanel({ questions, onScoreChange, onComplete }: BodyQuizPanelProps) {
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [correct, setCorrect] = useState(false);

  const handleAnswer = (idx: number) => {
    setSelected(idx);
    const isCorrect = idx === questions[0].answer;
    setCorrect(isCorrect);
    setAnswered(true);
    onScoreChange(isCorrect ? 1 : 0);
    onComplete();
  };

  return (
    <div className="mt-6 p-4 bg-gray-800/80 rounded-lg border border-blue-500/30">
      <div className="font-semibold mb-2">Quiz: {questions[0].question}</div>
      <div className="text-xs text-gray-400 mb-2">No second chances: your first answer is final.</div>
      <div className="flex flex-col gap-2">
        {questions[0].options.map((opt, idx) => (
          <button
            key={idx}
            className={`px-3 py-1 rounded border border-blue-500/20 transition-colors text-left ${
              selected === idx
                ? (idx === questions[0].answer
                    ? 'bg-green-600 text-white'
                    : 'bg-red-600 text-white')
                : 'bg-gray-700 hover:bg-blue-700'
            }`}
            disabled={answered}
            onClick={() => handleAnswer(idx)}
          >
            {opt}
          </button>
        ))}
      </div>
      {answered && (
        <div className="mt-2 flex items-center gap-2">
          {correct ? (
            <span className="text-green-400 font-bold">Correct!</span>
          ) : (
            <span className="text-red-400 font-bold flex items-center"><svg xmlns='http://www.w3.org/2000/svg' className='inline w-5 h-5 mr-1' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' /></svg>Incorrect.</span>
          )}
        </div>
      )}
    </div>
  );
} 