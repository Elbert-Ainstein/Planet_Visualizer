interface EndscreenProps {
  score: number;
  total: number;
  onReload: () => void;
}

export default function Endscreen({ score, total, onReload }: EndscreenProps) {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-gray-900 text-white p-8 rounded-lg max-w-lg w-full border-2 border-blue-500 shadow-2xl flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4 text-blue-400">Quiz Complete!</h2>
        <div className="text-xl mb-6">Your Score: <span className="text-green-400 font-bold">{score} / {total}</span></div>
        <button
          className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 text-lg font-bold mt-2"
          onClick={onReload}
        >
          Reload & Try Again
        </button>
        <div className="mt-4 text-gray-400 text-center">Want a higher score? Reload and try the quizzes again!</div>
      </div>
    </div>
  );
} 