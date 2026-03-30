import { loadPyodide, PyodideInterface } from "pyodide";

let pyodideInstance: PyodideInterface | null = null;

export async function getPyodide() {
  if (pyodideInstance) return pyodideInstance;

  pyodideInstance = await loadPyodide({
    indexURL: "https://cdn.jsdelivr.net/pyodide/v0.29.3/full/",
  });
  
  return pyodideInstance;
}

export async function runPythonCode(code: string): Promise<{ output: string; error: string | null }> {
  try {
    const pyodide = await getPyodide();
    
    // Redirect stdout to capture print statements
    pyodide.runPython(`
import sys
import io
sys.stdout = io.StringIO()
    `);
    
    await pyodide.runPythonAsync(code);
    
    const output = pyodide.runPython("sys.stdout.getvalue()");
    return { output, error: null };
  } catch (err: any) {
    return { output: "", error: err.message };
  }
}
