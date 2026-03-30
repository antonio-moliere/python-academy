export interface Exercise {
  id: string;
  title: string;
  description: string;
  initialCode: string;
  solution: string;
  testCases: {
    input?: string;
    expected: string;
    description: string;
  }[];
  difficulty: 'fácil' | 'medio' | 'difícil';
}

export const exercises: Exercise[] = [
  {
    id: '1',
    title: 'Hola Mundo',
    description: 'Escribe un programa que imprima "Hola Mundo" en la pantalla.',
    initialCode: '# Escribe tu código aquí\n',
    solution: 'print("Hola Mundo")',
    testCases: [
      {
        expected: 'Hola Mundo\n',
        description: 'Debe imprimir "Hola Mundo"'
      }
    ],
    difficulty: 'fácil'
  },
  {
    id: '2',
    title: 'Suma de dos números',
    description: 'Crea dos variables `a` y `b`, asígnales los valores 5 y 10, e imprime su suma.',
    initialCode: 'a = 5\nb = 10\n# Calcula e imprime la suma\n',
    solution: 'a = 5\nb = 10\nprint(a + b)',
    testCases: [
      {
        expected: '15\n',
        description: 'La suma de 5 y 10 es 15'
      }
    ],
    difficulty: 'fácil'
  },
  {
    id: '3',
    title: '¿Es par o impar?',
    description: 'Escribe un código que determine si un número `n` es par o impar. Si es par, imprime "Par", si no, imprime "Impar". Prueba con n = 7.',
    initialCode: 'n = 7\n# Tu código aquí\n',
    solution: 'n = 7\nif n % 2 == 0:\n    print("Par")\nelse:\n    print("Impar")',
    testCases: [
      {
        expected: 'Impar\n',
        description: '7 es un número impar'
      }
    ],
    difficulty: 'medio'
  },
  {
    id: '4',
    title: 'Bucle for',
    description: 'Imprime los números del 1 al 5 usando un bucle `for`.',
    initialCode: '# Usa range() para el bucle\n',
    solution: 'for i in range(1, 6):\n    print(i)',
    testCases: [
      {
        expected: '1\n2\n3\n4\n5\n',
        description: 'Debe imprimir del 1 al 5'
      }
    ],
    difficulty: 'medio'
  },
  {
    id: '5',
    title: 'Acceder a una lista',
    description: 'Dada la lista `frutas = ["manzana", "banana", "cereza"]`, imprime el segundo elemento.',
    initialCode: 'frutas = ["manzana", "banana", "cereza"]\n# Tu código aquí\n',
    solution: 'frutas = ["manzana", "banana", "cereza"]\nprint(frutas[1])',
    testCases: [{ expected: 'banana\n', description: 'El segundo elemento es "banana"' }],
    difficulty: 'fácil'
  },
  {
    id: '6',
    title: 'Añadir a una lista',
    description: 'Añade "naranja" al final de la lista `colores = ["rojo", "verde"]` e imprime la lista.',
    initialCode: 'colores = ["rojo", "verde"]\n# Tu código aquí\n',
    solution: 'colores = ["rojo", "verde"]\ncolores.append("naranja")\nprint(colores)',
    testCases: [{ expected: "['rojo', 'verde', 'naranja']\n", description: 'La lista debe contener "naranja"' }],
    difficulty: 'fácil'
  },
  {
    id: '7',
    title: 'Longitud de una lista',
    description: 'Imprime cuántos elementos tiene la lista `numeros = [10, 20, 30, 40, 50]`.',
    initialCode: 'numeros = [10, 20, 30, 40, 50]\n# Tu código aquí\n',
    solution: 'numeros = [10, 20, 30, 40, 50]\nprint(len(numeros))',
    testCases: [{ expected: '5\n', description: 'La longitud es 5' }],
    difficulty: 'fácil'
  },
  {
    id: '8',
    title: 'Suma de elementos',
    description: 'Calcula e imprime la suma de todos los números en la lista `valores = [1, 2, 3, 4, 5]`.',
    initialCode: 'valores = [1, 2, 3, 4, 5]\n# Tu código aquí\n',
    solution: 'valores = [1, 2, 3, 4, 5]\nprint(sum(valores))',
    testCases: [{ expected: '15\n', description: 'La suma es 15' }],
    difficulty: 'fácil'
  },
  {
    id: '9',
    title: 'Slicing de listas',
    description: 'Dada la lista `letras = ["a", "b", "c", "d", "e"]`, imprime los tres primeros elementos.',
    initialCode: 'letras = ["a", "b", "c", "d", "e"]\n# Tu código aquí\n',
    solution: 'letras = ["a", "b", "c", "d", "e"]\nprint(letras[:3])',
    testCases: [{ expected: "['a', 'b', 'c']\n", description: 'Debe imprimir ["a", "b", "c"]' }],
    difficulty: 'medio'
  },
  {
    id: '10',
    title: 'Invertir una lista',
    description: 'Invierte el orden de la lista `items = [1, 2, 3]` e imprímela.',
    initialCode: 'items = [1, 2, 3]\n# Tu código aquí\n',
    solution: 'items = [1, 2, 3]\nitems.reverse()\nprint(items)',
    testCases: [{ expected: '[3, 2, 1]\n', description: 'La lista debe estar invertida' }],
    difficulty: 'fácil'
  },
  {
    id: '11',
    title: 'Filtrar pares',
    description: 'Dada la lista `nums = [1, 2, 3, 4, 5, 6]`, imprime solo los números pares usando un bucle.',
    initialCode: 'nums = [1, 2, 3, 4, 5, 6]\n# Tu código aquí\n',
    solution: 'nums = [1, 2, 3, 4, 5, 6]\nfor n in nums:\n    if n % 2 == 0:\n        print(n)',
    testCases: [{ expected: '2\n4\n6\n', description: 'Debe imprimir 2, 4 y 6' }],
    difficulty: 'medio'
  },
  {
    id: '12',
    title: 'Cuadrados de una lista',
    description: 'Crea una nueva lista con los cuadrados de `base = [1, 2, 3]` e imprímela.',
    initialCode: 'base = [1, 2, 3]\n# Tu código aquí\n',
    solution: 'base = [1, 2, 3]\ncuadrados = []\nfor x in base:\n    cuadrados.append(x**2)\nprint(cuadrados)',
    testCases: [{ expected: '[1, 4, 9]\n', description: 'Debe imprimir [1, 4, 9]' }],
    difficulty: 'medio'
  },
  {
    id: '13',
    title: 'Diccionario básico',
    description: 'Crea un diccionario `persona` con "nombre": "Ana" y "edad": 25. Imprime el valor de "nombre".',
    initialCode: '# Tu código aquí\n',
    solution: 'persona = {"nombre": "Ana", "edad": 25}\nprint(persona["nombre"])',
    testCases: [{ expected: 'Ana\n', description: 'Debe imprimir "Ana"' }],
    difficulty: 'fácil'
  },
  {
    id: '14',
    title: 'Actualizar diccionario',
    description: 'Añade la clave "ciudad" con el valor "Madrid" al diccionario `datos = {"nombre": "Luis"}` e imprímelo.',
    initialCode: 'datos = {"nombre": "Luis"}\n# Tu código aquí\n',
    solution: 'datos = {"nombre": "Luis"}\ndatos["ciudad"] = "Madrid"\nprint(datos)',
    testCases: [{ expected: "{'nombre': 'Luis', 'ciudad': 'Madrid'}\n", description: 'Debe incluir la ciudad' }],
    difficulty: 'fácil'
  },
  {
    id: '15',
    title: 'Claves de un diccionario',
    description: 'Imprime todas las claves del diccionario `coche = {"marca": "Ford", "modelo": "Mustang"}`.',
    initialCode: 'coche = {"marca": "Ford", "modelo": "Mustang"}\n# Tu código aquí\n',
    solution: 'coche = {"marca": "Ford", "modelo": "Mustang"}\nfor clave in coche.keys():\n    print(clave)',
    testCases: [{ expected: 'marca\nmodelo\n', description: 'Debe imprimir las claves' }],
    difficulty: 'medio'
  },
  {
    id: '16',
    title: 'Valores de un diccionario',
    description: 'Imprime todos los valores del diccionario `precios = {"pan": 1.5, "leche": 1.2}`.',
    initialCode: 'precios = {"pan": 1.5, "leche": 1.2}\n# Tu código aquí\n',
    solution: 'precios = {"pan": 1.5, "leche": 1.2}\nfor valor in precios.values():\n    print(valor)',
    testCases: [{ expected: '1.5\n1.2\n', description: 'Debe imprimir los valores' }],
    difficulty: 'medio'
  },
  {
    id: '17',
    title: 'Comprobar clave',
    description: 'Comprueba si "email" existe en `usuario = {"nombre": "Marta"}`. Si existe imprime "Si", si no "No".',
    initialCode: 'usuario = {"nombre": "Marta"}\n# Tu código aquí\n',
    solution: 'usuario = {"nombre": "Marta"}\nif "email" in usuario:\n    print("Si")\nelse:\n    print("No")',
    testCases: [{ expected: 'No\n', description: 'No existe la clave email' }],
    difficulty: 'fácil'
  },
  {
    id: '18',
    title: 'Condicionales anidados: Signo',
    description: 'Determina si `x = -5` es positivo, negativo o cero usando condicionales anidados.',
    initialCode: 'x = -5\n# Tu código aquí\n',
    solution: 'x = -5\nif x > 0:\n    print("Positivo")\nelif x < 0:\n    print("Negativo")\nelse:\n    print("Cero")',
    testCases: [{ expected: 'Negativo\n', description: '-5 es negativo' }],
    difficulty: 'medio'
  },
  {
    id: '19',
    title: 'Condicionales anidados: Edad y Carnet',
    description: 'Si `edad = 20` y `tiene_carnet = True`, imprime "Puede conducir". Si es menor de 18, "No puede conducir". Si es mayor de 18 pero no tiene carnet, "Necesita carnet".',
    initialCode: 'edad = 20\ntiene_carnet = True\n# Tu código aquí\n',
    solution: 'edad = 20\ntiene_carnet = True\nif edad >= 18:\n    if tiene_carnet:\n        print("Puede conducir")\n    else:\n        print("Necesita carnet")\nelse:\n    print("No puede conducir")',
    testCases: [{ expected: 'Puede conducir\n', description: 'Cumple ambas condiciones' }],
    difficulty: 'medio'
  },
  {
    id: '20',
    title: 'Clasificación de notas',
    description: 'Dada una `nota = 85`, imprime "A" si >= 90, "B" si >= 80, "C" si >= 70, y "F" si < 70.',
    initialCode: 'nota = 85\n# Tu código aquí\n',
    solution: 'nota = 85\nif nota >= 90:\n    print("A")\nelif nota >= 80:\n    print("B")\nelif nota >= 70:\n    print("C")\nelse:\n    print("F")',
    testCases: [{ expected: 'B\n', description: '85 es una B' }],
    difficulty: 'medio'
  },
  {
    id: '21',
    title: 'Año bisiesto',
    description: 'Determina si `año = 2024` es bisiesto. (Divisible por 4, pero no por 100, a menos que sea divisible por 400). Imprime "Bisiesto" o "No bisiesto".',
    initialCode: 'año = 2024\n# Tu código aquí\n',
    solution: 'año = 2024\nif (año % 4 == 0 and año % 100 != 0) or (año % 400 == 0):\n    print("Bisiesto")\nelse:\n    print("No bisiesto")',
    testCases: [{ expected: 'Bisiesto\n', description: '2024 es bisiesto' }],
    difficulty: 'difícil'
  },
  {
    id: '22',
    title: 'Lista de diccionarios',
    description: 'Dada una lista de usuarios, imprime el nombre de cada uno.',
    initialCode: 'usuarios = [{"nombre": "Ana"}, {"nombre": "Pedro"}]\n# Tu código aquí\n',
    solution: 'usuarios = [{"nombre": "Ana"}, {"nombre": "Pedro"}]\nfor u in usuarios:\n    print(u["nombre"])',
    testCases: [{ expected: 'Ana\nPedro\n', description: 'Debe imprimir ambos nombres' }],
    difficulty: 'medio'
  },
  {
    id: '23',
    title: 'Diccionario de listas',
    description: 'Dado `clases = {"mates": [10, 9], "lengua": [8, 7]}`, imprime la primera nota de "mates".',
    initialCode: 'clases = {"mates": [10, 9], "lengua": [8, 7]}\n# Tu código aquí\n',
    solution: 'clases = {"mates": [10, 9], "lengua": [8, 7]}\nprint(clases["mates"][0])',
    testCases: [{ expected: '10\n', description: 'La primera nota de mates es 10' }],
    difficulty: 'medio'
  },
  {
    id: '24',
    title: 'Comprensión de listas',
    description: 'Usa una comprensión de listas para crear una lista de los números del 0 al 4 e imprímela.',
    initialCode: '# Tu código aquí\n',
    solution: 'lista = [x for x in range(5)]\nprint(lista)',
    testCases: [{ expected: '[0, 1, 2, 3, 4]\n', description: 'Debe imprimir [0, 1, 2, 3, 4]' }],
    difficulty: 'medio'
  },
  {
    id: '25',
    title: 'Comprensión de diccionarios',
    description: 'Crea un diccionario donde las claves sean números del 1 al 3 y los valores sean sus cuadrados usando comprensión.',
    initialCode: '# Tu código aquí\n',
    solution: 'dicc = {x: x**2 for x in range(1, 4)}\nprint(dicc)',
    testCases: [{ expected: '{1: 1, 2: 4, 3: 9}\n', description: 'Debe imprimir el diccionario de cuadrados' }],
    difficulty: 'difícil'
  },
  {
    id: '26',
    title: 'Tabla de multiplicar',
    description: 'Imprime la tabla de multiplicar del 2 (del 2x1 al 2x3) usando un bucle.',
    initialCode: '# Tu código aquí\n',
    solution: 'for i in range(1, 4):\n    print(f"2x{i}={2*i}")',
    testCases: [{ expected: '2x1=2\n2x2=4\n2x3=6\n', description: 'Debe imprimir la tabla' }],
    difficulty: 'medio'
  },
  {
    id: '27',
    title: 'Ordenar lista',
    description: 'Ordena la lista `desordenada = [5, 1, 9, 3]` de menor a mayor e imprímela.',
    initialCode: 'desordenada = [5, 1, 9, 3]\n# Tu código aquí\n',
    solution: 'desordenada = [5, 1, 9, 3]\ndesordenada.sort()\nprint(desordenada)',
    testCases: [{ expected: '[1, 3, 5, 9]\n', description: 'Debe estar ordenada' }],
    difficulty: 'fácil'
  },
  {
    id: '28',
    title: 'Ordenar diccionario por claves',
    description: 'Imprime las claves de `d = {"c": 3, "a": 1, "b": 2}` ordenadas alfabéticamente.',
    initialCode: 'd = {"c": 3, "a": 1, "b": 2}\n# Tu código aquí\n',
    solution: 'd = {"c": 3, "a": 1, "b": 2}\nfor k in sorted(d.keys()):\n    print(k)',
    testCases: [{ expected: 'a\nb\nc\n', description: 'Claves ordenadas' }],
    difficulty: 'difícil'
  },
  {
    id: '29',
    title: 'Tipo de triángulo',
    description: 'Dados `a=5, b=5, c=5`, imprime "Equilátero" si todos son iguales, "Isósceles" si dos son iguales, o "Escaleno" si ninguno es igual.',
    initialCode: 'a, b, c = 5, 5, 5\n# Tu código aquí\n',
    solution: 'a, b, c = 5, 5, 5\nif a == b == c:\n    print("Equilátero")\nelif a == b or b == c or a == c:\n    print("Isósceles")\nelse:\n    print("Escaleno")',
    testCases: [{ expected: 'Equilátero\n', description: '5,5,5 es equilátero' }],
    difficulty: 'medio'
  },
  {
    id: '30',
    title: 'Encontrar índice',
    description: 'Encuentra e imprime el índice de "verde" en `colores = ["azul", "verde", "rojo"]`.',
    initialCode: 'colores = ["azul", "verde", "rojo"]\n# Tu código aquí\n',
    solution: 'colores = ["azul", "verde", "rojo"]\nprint(colores.index("verde"))',
    testCases: [{ expected: '1\n', description: 'El índice es 1' }],
    difficulty: 'fácil'
  },
  {
    id: '31',
    title: 'Eliminar de diccionario',
    description: 'Elimina la clave "edad" de `p = {"nombre": "Ana", "edad": 20}` e imprime el valor eliminado.',
    initialCode: 'p = {"nombre": "Ana", "edad": 20}\n# Tu código aquí\n',
    solution: 'p = {"nombre": "Ana", "edad": 20}\nvalor = p.pop("edad")\nprint(valor)',
    testCases: [{ expected: '20\n', description: 'Debe imprimir 20' }],
    difficulty: 'medio'
  },
  {
    id: '32',
    title: 'Precio de entrada',
    description: 'Si `edad = 15` y `estudiante = True`, el precio es 5. Si no es estudiante pero es menor de 18, es 7. Si es mayor de 18, es 10. Imprime el precio.',
    initialCode: 'edad = 15\nestudiante = True\n# Tu código aquí\n',
    solution: 'edad = 15\nestudiante = True\nif estudiante:\n    print(5)\nelif edad < 18:\n    print(7)\nelse:\n    print(10)',
    testCases: [{ expected: '5\n', description: 'Estudiante paga 5' }],
    difficulty: 'medio'
  },
  {
    id: '33',
    title: 'Contar elementos',
    description: 'Cuenta cuántas veces aparece el número 1 en `lista = [1, 2, 1, 3, 1]` e imprímelo.',
    initialCode: 'lista = [1, 2, 1, 3, 1]\n# Tu código aquí\n',
    solution: 'lista = [1, 2, 1, 3, 1]\nprint(lista.count(1))',
    testCases: [{ expected: '3\n', description: 'Aparece 3 veces' }],
    difficulty: 'fácil'
  },
  {
    id: '34',
    title: 'Combinar diccionarios',
    description: 'Combina `d1 = {"a": 1}` y `d2 = {"b": 2}` en un nuevo diccionario e imprímelo.',
    initialCode: 'd1 = {"a": 1}\nd2 = {"b": 2}\n# Tu código aquí\n',
    solution: 'd1 = {"a": 1}\nd2 = {"b": 2}\nd1.update(d2)\nprint(d1)',
    testCases: [{ expected: "{'a': 1, 'b': 2}\n", description: 'Diccionario combinado' }],
    difficulty: 'medio'
  }
];
