import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  ChevronLeft, 
  BookOpen, 
  Terminal, 
  Sparkles,
  RefreshCw,
  Code2,
  Info
} from 'lucide-react';
import { exercises } from './exercises';
import { runPythonCode } from './lib/pyodide';
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from 'react-markdown';

// Use a helper to get the AI instance safely
const getAiInstance = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY" || apiKey.includes("YOUR_GEMINI_API_KEY")) {
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export default function App() {
  const [aiInstance] = useState(() => getAiInstance());
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [code, setCode] = useState(exercises[0].initialCode);
  const [output, setOutput] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [aiFeedback, setAiFeedback] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [showExercises, setShowExercises] = useState(true);

  const currentExercise = exercises[currentExerciseIndex];

  useEffect(() => {
    setCode(currentExercise.initialCode);
    setOutput('');
    setError(null);
    setIsSuccess(null);
    setAiFeedback(null);
  }, [currentExerciseIndex]);

  const handleRun = async () => {
    setIsRunning(true);
    setError(null);
    setOutput('');
    setIsSuccess(null);
    setAiFeedback(null);

    const result = await runPythonCode(code);
    
    setOutput(result.output);
    setError(result.error);
    setIsRunning(false);

    if (result.error) {
      setIsSuccess(false);
      getAiFeedback(result.error, code);
    } else {
      // Basic validation against test cases
      const passed = currentExercise.testCases.every(tc => result.output === tc.expected);
      setIsSuccess(passed);
      if (!passed) {
        getAiFeedback("El código se ejecutó pero el resultado no es el esperado.", code);
      }
    }
  };

  const getAiFeedback = async (errorMessage: string, userCode: string) => {
    if (!aiInstance) {
      setAiFeedback("El tutor de IA no está configurado. Por favor, añade tu GEMINI_API_KEY en los secretos de GitHub.");
      return;
    }
    setIsAiLoading(true);
    try {
      const response = await aiInstance.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `
          Actúa como un profesor de Python para adolescentes de 15 años.
          El alumno está intentando resolver este ejercicio: "${currentExercise.title}"
          Descripción: ${currentExercise.description}
          
          Su código es:
          \`\`\`python
          ${userCode}
          \`\`\`
          
          El error o problema es: ${errorMessage}
          
          Explica de forma sencilla y motivadora qué está mal y cómo puede corregirlo. 
          No le des la solución completa directamente, dale pistas.
          Usa un tono amable y cercano. Responde en español.
        `,
      });
      setAiFeedback(response.text);
    } catch (err) {
      console.error("Error getting AI feedback:", err);
      setAiFeedback("No pude conectar con el tutor de IA en este momento, ¡pero sigue intentándolo!");
    } finally {
      setIsAiLoading(false);
    }
  };

  const nextExercise = () => {
    if (currentExerciseIndex < exercises.length - 1) {
      setCurrentExerciseIndex(prev => prev + 1);
    }
  };

  const prevExercise = () => {
    if (currentExerciseIndex > 0) {
      setCurrentExerciseIndex(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] font-sans selection:bg-blue-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-xl">
            <Code2 className="text-white w-6 h-6" />
          </div>
          <h1 className="text-xl font-bold tracking-tight">Python Academy</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full text-sm font-medium">
            <BookOpen className="w-4 h-4 text-gray-500" />
            <span>{currentExerciseIndex + 1} / {exercises.length}</span>
          </div>
        </div>
      </header>

      <main className="flex h-[calc(100vh-73px)] overflow-hidden">
        {/* Sidebar - Exercise List */}
        <AnimatePresence>
          {showExercises && (
            <motion.aside 
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              className="w-80 bg-white border-r border-gray-200 overflow-y-auto p-4 flex-shrink-0"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-bold text-lg">Ejercicios</h2>
                <button onClick={() => setShowExercises(false)} className="p-1 hover:bg-gray-100 rounded">
                  <ChevronLeft className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-2">
                {exercises.map((ex, idx) => (
                  <button
                    key={ex.id}
                    onClick={() => setCurrentExerciseIndex(idx)}
                    className={`w-full text-left p-3 rounded-xl transition-all ${
                      currentExerciseIndex === idx 
                        ? 'bg-blue-50 border-blue-200 border text-blue-700' 
                        : 'hover:bg-gray-50 border-transparent border'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-sm">{idx + 1}. {ex.title}</span>
                      <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${
                        ex.difficulty === 'fácil' ? 'bg-green-100 text-green-700' :
                        ex.difficulty === 'medio' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {ex.difficulty}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0">
          <div className="flex-1 flex overflow-hidden">
            {/* Left Column: Instructions & Editor */}
            <div className="flex-1 flex flex-col border-r border-gray-200">
              {/* Instructions */}
              <div className="p-6 bg-white border-b border-gray-100">
                {!showExercises && (
                  <button onClick={() => setShowExercises(true)} className="mb-4 flex items-center gap-2 text-blue-600 font-medium hover:underline">
                    <ChevronRight className="w-4 h-4" />
                    Ver ejercicios
                  </button>
                )}
                <h2 className="text-2xl font-bold mb-2">{currentExercise.title}</h2>
                <p className="text-gray-600 leading-relaxed">{currentExercise.description}</p>
              </div>

              {/* Editor */}
              <div className="flex-1 relative bg-[#1e1e1e]">
                <Editor
                  height="100%"
                  defaultLanguage="python"
                  theme="vs-dark"
                  value={code}
                  onChange={(val) => setCode(val || '')}
                  options={{
                    fontSize: 16,
                    minimap: { enabled: false },
                    scrollBeyondLastLine: false,
                    padding: { top: 20 },
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                />
                <div className="absolute bottom-6 right-6 z-10">
                  <button
                    onClick={handleRun}
                    disabled={isRunning}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold shadow-lg transition-all transform active:scale-95 ${
                      isRunning 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-blue-200'
                    }`}
                  >
                    {isRunning ? (
                      <RefreshCw className="w-5 h-5 animate-spin" />
                    ) : (
                      <Play className="w-5 h-5 fill-current" />
                    )}
                    {isRunning ? 'Ejecutando...' : 'Ejecutar Código'}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Console & AI Feedback */}
            <div className="w-[450px] flex flex-col bg-white overflow-y-auto">
              {/* Console Output */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center gap-2 mb-4 text-gray-500 font-bold text-xs uppercase tracking-widest">
                  <Terminal className="w-4 h-4" />
                  Consola
                </div>
                <div className={`p-4 rounded-xl font-mono text-sm min-h-[120px] ${
                  error ? 'bg-red-50 text-red-700' : 'bg-gray-900 text-green-400'
                }`}>
                  {isRunning ? (
                    <span className="animate-pulse">_</span>
                  ) : (
                    <>
                      {output && <pre className="whitespace-pre-wrap">{output}</pre>}
                      {error && <pre className="whitespace-pre-wrap text-red-600">{error}</pre>}
                      {!output && !error && <span className="text-gray-500 italic">El resultado aparecerá aquí...</span>}
                    </>
                  )}
                </div>

                {isSuccess !== null && (
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className={`mt-4 p-4 rounded-xl flex items-center gap-3 ${
                      isSuccess ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
                    }`}
                  >
                    {isSuccess ? (
                      <>
                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                        <div>
                          <p className="font-bold">¡Excelente trabajo!</p>
                          <p className="text-sm opacity-90">Has completado el ejercicio correctamente.</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-6 h-6 text-orange-600" />
                        <div>
                          <p className="font-bold">Casi lo tienes...</p>
                          <p className="text-sm opacity-90">Revisa el resultado o el error abajo.</p>
                        </div>
                      </>
                    )}
                  </motion.div>
                )}
              </div>

              {/* AI Feedback Section */}
              <div className="p-6 flex-1">
                <div className="flex items-center gap-2 mb-4 text-blue-600 font-bold text-xs uppercase tracking-widest">
                  <Sparkles className="w-4 h-4" />
                  Tutor de IA
                </div>
                
                <div className="relative">
                  {isAiLoading ? (
                    <div className="space-y-3">
                      <div className="h-4 bg-gray-100 rounded w-3/4 animate-pulse"></div>
                      <div className="h-4 bg-gray-100 rounded w-full animate-pulse"></div>
                      <div className="h-4 bg-gray-100 rounded w-5/6 animate-pulse"></div>
                    </div>
                  ) : aiFeedback ? (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="prose prose-sm prose-blue max-w-none"
                    >
                      <ReactMarkdown>{aiFeedback}</ReactMarkdown>
                    </motion.div>
                  ) : (
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-blue-800 text-sm flex gap-3">
                      <Info className="w-5 h-5 flex-shrink-0" />
                      <p>Si tienes errores, mi tutor de IA te ayudará a entender qué pasó y cómo arreglarlo.</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Footer Navigation */}
              <div className="p-6 border-t border-gray-100 flex items-center justify-between bg-gray-50">
                <button
                  onClick={prevExercise}
                  disabled={currentExerciseIndex === 0}
                  className="p-2 hover:bg-white rounded-full disabled:opacity-30 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Navegación
                </div>
                <button
                  onClick={nextExercise}
                  disabled={currentExerciseIndex === exercises.length - 1}
                  className="p-2 hover:bg-white rounded-full disabled:opacity-30 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
