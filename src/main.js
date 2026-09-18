import './style.css';

const STORAGE_KEY = 'northstar-assessment-results';
const DURATION_SECONDS = 50 * 60;
const MAX_WARNINGS = 3;
const ADMIN_KEY = 'northstar-admin-auth';

const questions = [
  // ============================================================
  // 1. DATA TYPES, TYPE CONVERSION AND OPERATORS
  // ============================================================

  [
    'What is the output of the following code?\n\nx = 10\ny = 3\nprint(x / y)',
    ['3', '3.0', '3.3333333333333335', 'Error'],
    2
  ],

  [
    'What is the output of the following code?\n\nx = 10\ny = 3\nprint(x // y)',
    ['3', '3.33', '1', '4'],
    0
  ],

  [
    'What is the output of the following code?\n\nx = 2 ** 3\nprint(x)',
    ['5', '6', '8', '9'],
    2
  ],

  [
    'What is the output of the following code?\n\nx = 10\nprint(x % 4)',
    ['1', '2', '2.5', '4'],
    1
  ],

  [
    'What is the output of the following code?\n\nx = "10"\ny = 5\nprint(int(x) + y)',
    ['105', '15', '"105"', 'Error'],
    1
  ],

  [
    'What is the output of the following code?\n\nx = 5\ny = 2.0\nprint(type(x + y))',
    ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'bool'>"],
    1
  ],

  [
    'What is the result of bool(0) in Python?',
    ['True', 'False', '0', 'None'],
    1
  ],

  [
    'What is the result of bool("False") in Python?',
    ['True', 'False', 'None', 'Error'],
    0
  ],

  [
    'What is the output of the following code?\n\nx = 7\nx *= 2\nx -= 3\nprint(x)',
    ['8', '11', '14', '17'],
    1
  ],

  [
    'What is the output of the following code?\n\nprint(5 > 3 == 3)',
    ['True', 'False', '3', 'Error'],
    0
  ],


  // ============================================================
  // 2. STRINGS
  // ============================================================

  [
    'What is the output of the following code?\n\ntext = "Python"\nprint(text[-1])',
    ['P', 'n', 'o', 'Error'],
    1
  ],

  [
    'What is the output of the following code?\n\ntext = "Python"\nprint(text[1:5])',
    ['Pyth', 'ytho', 'yth', 'ython'],
    1
  ],

  [
    'What is the output of the following code?\n\ntext = "Python"\nprint(text[::2])',
    ['Pto', 'yhn', 'Ptoh', 'Python'],
    0
  ],

  [
    'What is the output of the following code?\n\ntext = "hello"\nprint(text.upper())',
    ['hello', 'HELLO', 'Hello', 'Error'],
    1
  ],

  [
    'Which method removes whitespace from both ends of a string?',
    ['strip()', 'remove()', 'trim()', 'clean()'],
    0
  ],

  [
    'What is the output of the following code?\n\ntext = "Python Programming"\nprint(text.find("Pro"))',
    ['6', '7', '8', '-1'],
    1
  ],

  [
    'What is the output of the following code?\n\ntext = "Python"\nprint("Py" in text)',
    ['True', 'False', 'Py', 'Error'],
    0
  ],

  [
    'What is the output of the following code?\n\ntext = "Python"\nprint(text.replace("P", "J"))',
    ['Python', 'Jython', 'Pjthon', 'Error'],
    1
  ],


  // ============================================================
  // 3. LISTS AND LIST OPERATIONS
  // ============================================================

  [
    'What is the output of the following code?\n\nnumbers = [10, 20, 30, 40]\nprint(numbers[1:3])',
    ['[10, 20]', '[20, 30]', '[20, 30, 40]', '[10, 20, 30]'],
    1
  ],

  [
    'What is the output of the following code?\n\nnumbers = [1, 2, 3]\nnumbers.extend([4, 5])\nprint(numbers)',
    ['[1, 2, 3, [4, 5]]', '[1, 2, 3, 4, 5]', '[4, 5, 1, 2, 3]', 'Error'],
    1
  ],

  [
    'What is the output of the following code?\n\nnumbers = [1, 2, 3]\nnumbers.insert(1, 10)\nprint(numbers)',
    ['[10, 1, 2, 3]', '[1, 10, 2, 3]', '[1, 2, 10, 3]', '[1, 2, 3, 10]'],
    1
  ],

  [
    'What is the output of the following code?\n\nnumbers = [1, 2, 3, 2]\nnumbers.remove(2)\nprint(numbers)',
    ['[1, 3, 2]', '[1, 2, 3]', '[1, 3]', '[2, 1, 3]'],
    0
  ],

  [
    'What is the output of the following code?\n\nnumbers = [10, 20, 30]\nprint(numbers.pop())',
    ['10', '20', '30', '[10, 20]'],
    2
  ],

  [
    'What is the output of the following code?\n\nnumbers = [3, 1, 2]\nresult = sorted(numbers)\nprint(numbers)',
    ['[1, 2, 3]', '[3, 1, 2]', 'None', 'Error'],
    1
  ],

  [
    'What is the output of the following code?\n\nnumbers = [1, 2, 3]\nnumbers.reverse()\nprint(numbers)',
    ['[1, 2, 3]', '[3, 2, 1]', '[2, 3, 1]', 'None'],
    1
  ],

  [
    'What is the output of the following code?\n\nnumbers = [1, 2, 3, 4, 5]\nprint(numbers[-3:])',
    ['[1, 2, 3]', '[3, 4, 5]', '[2, 3, 4]', '[4, 5]'],
    1
  ],

  [
    'Which method returns the number of occurrences of a value in a list?',
    ['count()', 'find()', 'occurrences()', 'index()'],
    0
  ],

  [
    'What is the output of the following code?\n\nnumbers = [10, 20, 30]\nprint(len(numbers))',
    ['2', '3', '30', 'Error'],
    1
  ],


  // ============================================================
  // 4. TUPLES, SETS AND DICTIONARIES
  // ============================================================

  [
    'Which of the following is immutable?',
    ['List', 'Set', 'Dictionary', 'Tuple'],
    3
  ],

  [
    'What is the output of the following code?\n\nx = (10, 20, 30)\nprint(x[1])',
    ['10', '20', '30', 'Error'],
    1
  ],

  [
    'What is the output of the following code?\n\nnumbers = {1, 2, 2, 3, 3}\nprint(len(numbers))',
    ['3', '5', '4', 'Error'],
    0
  ],

  [
    'Which collection automatically removes duplicate values?',
    ['List', 'Tuple', 'Set', 'Dictionary'],
    2
  ],

  [
    'What is the output of the following code?\n\ndata = {"name": "John", "age": 25}\nprint(data["age"])',
    ['name', 'John', '25', 'Error'],
    2
  ],

  [
    'What is the output of the following code?\n\ndata = {"a": 10, "b": 20}\ndata["c"] = 30\nprint(len(data))',
    ['2', '3', '30', 'Error'],
    1
  ],

  [
    'Which dictionary method returns all keys?',
    ['keys()', 'values()', 'items()', 'getkeys()'],
    0
  ],

  [
    'What is the output of the following code?\n\ndata = {"a": 10}\nprint(data.get("b", 0))',
    ['10', 'b', '0', 'None'],
    2
  ],


  // ============================================================
  // 5. CONDITIONAL STATEMENTS
  // ============================================================

  [
    'What is the output of the following code?\n\nx = 12\nif x % 2 == 0:\n    print("Even")\nelse:\n    print("Odd")',
    ['Even', 'Odd', '12', 'Error'],
    0
  ],

  [
    'What is the output of the following code?\n\nx = 25\nif x > 10:\n    if x > 20:\n        print("A")\n    else:\n        print("B")\nelse:\n    print("C")',
    ['A', 'B', 'C', 'Error'],
    0
  ],

  [
    'What is the output of the following code?\n\nx = 5\nif x > 2 and x < 10:\n    print("Yes")\nelse:\n    print("No")',
    ['Yes', 'No', 'True', 'Error'],
    0
  ],

  [
    'What is the output of the following code?\n\nx = 8\nif x < 5 or x > 7:\n    print("Valid")\nelse:\n    print("Invalid")',
    ['Valid', 'Invalid', '8', 'Error'],
    0
  ],

  [
    'What is the output of the following code?\n\nx = 10\nresult = "Even" if x % 2 == 0 else "Odd"\nprint(result)',
    ['Even', 'Odd', 'True', 'Error'],
    0
  ],

  [
    'What is the output of the following code?\n\nx = 15\nif x > 20:\n    print("A")\nelif x > 10:\n    print("B")\nelif x > 5:\n    print("C")\nelse:\n    print("D")',
    ['A', 'B', 'C', 'D'],
    1
  ],


  // ============================================================
  // 6. LOOPS
  // ============================================================

  [
    'What is the output of the following code?\n\nfor i in range(2, 6):\n    print(i, end=" ")',
    ['1 2 3 4 5', '2 3 4 5', '2 3 4 5 6', '1 2 3 4'],
    1
  ],

  [
    'What is the output of the following code?\n\nfor i in range(1, 6, 2):\n    print(i, end=" ")',
    ['1 2 3 4 5', '1 3 5', '2 4 6', '1 3 4'],
    1
  ],

  [
    'What is the output of the following code?\n\nx = 0\nfor i in range(3):\n    x += i\nprint(x)',
    ['3', '6', '2', '0'],
    0
  ],

  [
    'What is the output of the following code?\n\nfor i in range(5):\n    if i == 3:\n        break\n    print(i, end=" ")',
    ['0 1 2', '0 1 2 3', '1 2 3', '0 1 2 4'],
    0
  ],

  [
    'What is the output of the following code?\n\nfor i in range(5):\n    if i == 2:\n        continue\n    print(i, end=" ")',
    ['0 1 2 3 4', '0 1 3 4', '1 2 3 4', '0 1'],
    1
  ],

  [
    'What is the output of the following code?\n\nx = 1\nwhile x < 4:\n    print(x, end=" ")\n    x += 1',
    ['1 2 3', '1 2 3 4', '0 1 2', 'Infinite loop'],
    0
  ],

  [
    'How many times does this loop execute?\n\nfor i in range(2, 10, 2):\n    print(i)',
    ['3', '4', '5', '6'],
    1
  ],

  [
    'What is the output of the following code?\n\nfor i in range(3):\n    for j in range(2):\n        print(i, j)',
    ['6 lines', '5 lines', '3 lines', '2 lines'],
    0
  ],


  // ============================================================
  // 7. NESTED LOOPS AND PATTERNS
  // ============================================================

  [
    'What is the output of the following code?\n\nfor i in range(3):\n    for j in range(3):\n        print("*", end="")\n    print()',
    ['***\\n***\\n***', '***', '**\\n**\\n**', 'Error'],
    0
  ],

  [
    'How many times does the inner loop execute in total?\n\nfor i in range(4):\n    for j in range(3):\n        print(j)',
    ['3', '4', '7', '12'],
    3
  ],

  [
    'What is the output of the following code?\n\nfor i in range(1, 4):\n    print(i * 2, end=" ")',
    ['1 2 3', '2 4 6', '0 2 4', '2 3 4'],
    1
  ],


  // ============================================================
  // 8. FUNCTIONS
  // ============================================================

  [
    'Which keyword is used to define a function in Python?',
    ['function', 'define', 'def', 'fun'],
    2
  ],

  [
    'What is the output of the following code?\n\ndef add(a, b):\n    return a + b\n\nprint(add(3, 4))',
    ['3', '4', '7', '34'],
    2
  ],

  [
    'What is the output of the following code?\n\ndef greet(name="User"):\n    print("Hello", name)\n\ngreet()',
    ['Hello', 'Hello User', 'User', 'Error'],
    1
  ],

  [
    'What is the output of the following code?\n\ndef square(x):\n    return x * x\n\nresult = square(5)\nprint(result)',
    ['10', '20', '25', 'Error'],
    2
  ],

  [
    'What happens if a function does not explicitly use a return statement?',
    ['It returns 0', 'It returns False', 'It returns None', 'It causes an error'],
    2
  ],

  [
    'What is the output of the following code?\n\ndef test(x):\n    x += 5\n    return x\n\nx = 10\nprint(test(x))',
    ['10', '15', '5', 'Error'],
    1
  ],

  [
    'Which type of argument is passed using the parameter name?',
    ['Positional argument', 'Keyword argument', 'Default argument', 'Loop argument'],
    1
  ],


  // ============================================================
  // 9. LIST COMPREHENSION
  // ============================================================

  [
    'What is the output of the following code?\n\nnumbers = [1, 2, 3, 4]\nresult = [x * 2 for x in numbers]\nprint(result)',
    ['[1, 2, 3, 4]', '[2, 4, 6, 8]', '[1, 4, 9, 16]', 'Error'],
    1
  ],

  [
    'What is the output of the following code?\n\nnumbers = [1, 2, 3, 4, 5]\nresult = [x for x in numbers if x % 2 == 0]\nprint(result)',
    ['[1, 3, 5]', '[2, 4]', '[1, 2, 3, 4, 5]', 'Error'],
    1
  ],

  [
    'Which of the following creates a list containing squares from 1 to 5?',
    ['[x for x in range(1, 6)]',
     '[x * x for x in range(1, 6)]',
     '[x + x for x in range(1, 5)]',
     '[x ** 2 for x in range(5)]'],
    1
  ],


  // ============================================================
  // 10. SCOPE AND VARIABLES
  // ============================================================

  [
    'What is the output of the following code?\n\nx = 10\n\ndef test():\n    x = 20\n    print(x)\n\ntest()\nprint(x)',
    ['20 20', '10 10', '20 10', '10 20'],
    2
  ],

  [
    'Which variable is accessible throughout the entire function where it is defined?',
    ['Global variable', 'Local variable', 'Class variable', 'External variable'],
    1
  ],

  [
    'What is the output of the following code?\n\nx = 10\n\ndef test():\n    global x\n    x = 20\n\ntest()\nprint(x)',
    ['10', '20', 'None', 'Error'],
    1
  ],


  // ============================================================
  // 11. EXCEPTIONS
  // ============================================================

  [
    'Which block is used to handle exceptions in Python?',
    ['try-except', 'if-else', 'for-except', 'error-handle'],
    0
  ],

  [
    'What type of error occurs when dividing a number by zero?',
    ['ValueError', 'TypeError', 'ZeroDivisionError', 'NameError'],
    2
  ],

  [
    'What is the output of the following code?\n\ntry:\n    x = 10 / 0\nexcept ZeroDivisionError:\n    print("Cannot divide")',
    ['10', '0', 'Cannot divide', 'Error'],
    2
  ],

  [
    'Which block executes whether an exception occurs or not?',
    ['except', 'else', 'finally', 'error'],
    2
  ],

  [
    'What exception occurs when trying to access a list index that does not exist?',
    ['IndexError', 'KeyError', 'ValueError', 'TypeError'],
    0
  ],


  // ============================================================
  // 12. MODULES AND BUILT-IN FUNCTIONS
  // ============================================================

  [
    'Which keyword is used to import a module?',
    ['include', 'import', 'using', 'require'],
    1
  ],

  [
    'What is the output of the following code?\n\nimport math\nprint(math.sqrt(25))',
    ['5', '5.0', '25', 'Error'],
    1
  ],

  [
    'Which built-in function returns the absolute value of a number?',
    ['absolute()', 'abs()', 'absolute_value()', 'value()'],
    1
  ],

  [
    'What is the output of the following code?\n\nprint(abs(-15))',
    ['-15', '15', '0', 'Error'],
    1
  ],

  [
    'What does the len() function return?',
    ['The largest value', 'The data type', 'The number of items', 'The memory address'],
    2
  ],


  // ============================================================
  // 13. IDENTITY, MEMBERSHIP AND COMPARISON
  // ============================================================

  [
    'Which operator checks whether two variables refer to the same object?',
    ['==', '=', 'is', 'in'],
    2
  ],

  [
    'Which operator checks whether a value exists inside a collection?',
    ['is', 'in', '==', 'contains'],
    1
  ],

  [
    'What is the output of the following code?\n\nnumbers = [1, 2, 3]\nprint(4 not in numbers)',
    ['True', 'False', '4', 'Error'],
    0
  ],

  [
    'What is the output of the following code?\n\nx = 10\ny = 10\nprint(x == y)',
    ['True', 'False', '10', 'Error'],
    0
  ],


  // ============================================================
  // 14. ADVANCED OUTPUT-BASED QUESTIONS
  // ============================================================

  [
    'What is the output of the following code?\n\nx = [1, 2, 3]\ny = x\ny.append(4)\nprint(x)',
    ['[1, 2, 3]', '[1, 2, 3, 4]', '[4, 1, 2, 3]', 'Error'],
    1
  ],

  [
    'What is the output of the following code?\n\nx = [1, 2, 3]\ny = x.copy()\ny.append(4)\nprint(x)',
    ['[1, 2, 3]', '[1, 2, 3, 4]', '[4, 1, 2, 3]', 'Error'],
    0
  ],

  [
    'What is the output of the following code?\n\nnumbers = [1, 2, 3, 4]\nprint(sum(numbers))',
    ['8', '9', '10', '11'],
    2
  ],

  [
    'What is the output of the following code?\n\nnumbers = [5, 10, 15]\nprint(max(numbers) - min(numbers))',
    ['5', '10', '15', '20'],
    1
  ],

  [
    'What is the output of the following code?\n\nx = 10\nif x:\n    print("A")\nelse:\n    print("B")',
    ['A', 'B', '10', 'Error'],
    0
  ],

  [
    'What is the output of the following code?\n\nx = []\nif x:\n    print("A")\nelse:\n    print("B")',
    ['A', 'B', '[]', 'Error'],
    1
  ],

  [
    'What is the output of the following code?\n\nresult = 0\nfor i in range(1, 5):\n    result += i\nprint(result)',
    ['5', '10', '15', '20'],
    1
  ],

  [
    'What is the output of the following code?\n\nnumbers = [2, 4, 6, 8]\nprint(numbers[::2])',
    ['[2, 4]', '[4, 8]', '[2, 6]', '[6, 8]'],
    2
  ],

  [
    'What is the output of the following code?\n\nx = "Python"\nprint(len(x) + 2)',
    ['6', '7', '8', '9'],
    2
  ],

  [
    'What is the output of the following code?\n\nnumbers = [1, 2, 3]\nresult = numbers + [4, 5]\nprint(result)',
    ['[1, 2, 3, 4, 5]', '[5, 4, 1, 2, 3]', '[1, 2, 3, [4, 5]]', 'Error'],
    0
  ],


  // ============================================================
  // 15. PVM AND PYTHON EXECUTION
  // ============================================================

  [
    'What is the primary role of the Python Virtual Machine (PVM)?',
    [
      'To write Python programs',
      'To execute Python bytecode',
      'To convert Python into HTML',
      'To manage database connections'
    ],
    1
  ],

  [
    'What is Python source code generally compiled into before execution by the PVM?',
    ['Machine code', 'Bytecode', 'HTML', 'Assembly only'],
    1
  ],

  [
    'Which file extension is commonly associated with Python bytecode files?',
    ['.py', '.exe', '.pyc', '.pvm'],
    2
  ],

  [
    'What happens when Python encounters an exception that is not handled?',
    [
      'Python ignores it',
      'Python automatically fixes it',
      'Program execution stops and an error traceback is displayed',
      'Python restarts the program'
    ],
    2
  ],


  // ============================================================
  // 16. MIXED MEDIUM-LEVEL QUESTIONS
  // ============================================================

  [
    'What is the output of the following code?\n\nx = 5\ny = 10\nprint(x < y and y > 5)',
    ['True', 'False', '5', 'Error'],
    0
  ],

  [
    'What is the output of the following code?\n\nx = 5\ny = 10\nprint(x > y or y == 10)',
    ['True', 'False', '10', 'Error'],
    0
  ],

  [
    'What is the output of the following code?\n\nnumbers = [1, 2, 3, 4, 5]\nresult = [x for x in numbers if x > 2]\nprint(result)',
    ['[1, 2]', '[3, 4, 5]', '[2, 3, 4]', '[1, 2, 3, 4, 5]'],
    1
  ],

  [
    'What is the output of the following code?\n\ndata = {"a": 1, "b": 2}\nprint("a" in data)',
    ['True', 'False', '1', 'Error'],
    0
  ],

  [
    'What is the output of the following code?\n\nx = 10\nfor i in range(2):\n    x += 5\nprint(x)',
    ['10', '15', '20', '25'],
    2
  ],

  [
    'What is the output of the following code?\n\nx = [1, 2, 3]\nprint(x * 2)',
    ['[2, 4, 6]', '[1, 2, 3, 1, 2, 3]', '[1, 2, 6]', 'Error'],
    1
  ],

  [
    'What is the output of the following code?\n\nx = "abc"\nprint(x * 3)',
    ['abc3', 'abcabcabc', '3abc', 'Error'],
    1
  ],

  [
    'What is the output of the following code?\n\nx = 10\nprint("Even" if x % 2 == 0 else "Odd")',
    ['Even', 'Odd', 'True', 'Error'],
    0
  ],

  [
    'What is the output of the following code?\n\nnumbers = [10, 20, 30]\nfor n in numbers:\n    if n == 20:\n        continue\n    print(n, end=" ")',
    ['10 20 30', '10 30', '20', '30'],
    1
  ],

  [
    'What is the output of the following code?\n\nx = 1\nwhile x <= 5:\n    x += 2\nprint(x)',
    ['5', '6', '7', '8'],
    2
  ]

];
const state = { screen: 'welcome', candidate: null, answers: {}, question: 0, remaining: DURATION_SECONDS, warnings: 0, timer: null, submitted: false };
const app = document.querySelector('#app');
const esc = (value) => String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[character]));
const getResults = () => JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
const formatTime = (seconds) => `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
function formatQuestion(question) {
  const parts = String(question).split(/\n\s*\n/);
  const prompt = parts.shift().trim();
  const code = parts.join('\n\n').trim();
  return `<h1>${esc(prompt)}</h1>${code ? `<pre class="question-code"><code>${esc(code)}</code></pre>` : ''}`;
}

function render() {
  if (state.screen === 'welcome') renderWelcome();
  if (state.screen === 'exam') renderExam();
  if (state.screen === 'complete') renderComplete();
  if (state.screen === 'results') renderResults();
}

function shell(content, active = 'assessment') {
  return `<div class="app-shell"><header class="topbar"><a class="brand" href="#" data-action="home"><span class="brand-mark">N</span><span>Northstar <b>Assessments</b></span></a><div class="topbar-meta"><span class="status-dot"></span>Secure assessment portal <button class="text-button" data-action="results">Results</button></div></header><main class="page ${active}">${content}</main><footer class="footer"><span>Northstar Assessments</span><span>Proctored session · Local mode</span></footer></div>`;
}

function renderWelcome() {
  app.innerHTML = shell(`<section class="welcome-grid"><div class="intro"><p class="eyebrow">TECHNICAL SCREENING · 01</p><h1>Show us how<br><em>you think.</em></h1><p class="lead">A focused 50-question assessment designed to measure practical technical understanding.</p><div class="feature-row"><div><strong>50 min</strong><span>Time limit</span></div><div><strong>50</strong><span>Questions</span></div><div><strong>3</strong><span>Tab warnings</span></div></div></div><div class="entry-panel"><div class="panel-kicker">Candidate check-in</div><h2>Start your assessment</h2><p class="panel-copy">Enter your details exactly as they appear on your registration.</p><form id="candidate-form"><label>Full name<input name="name" type="text" placeholder="e.g. Aisha Rahman" required autocomplete="name"></label><label>Registration number<input name="regNo" type="text" placeholder="e.g. NS-2026-0142" required></label><label class="check"><input type="checkbox" required> <span>I understand this is a proctored assessment and agree to stay on this tab.</span></label><button class="primary-button" type="submit">Continue to instructions <span>→</span></button></form><p class="small-note">Your attempt is stored locally in this browser and can be exported after submission.</p></div></section>`);
  document.querySelector('#candidate-form').addEventListener('submit', (event) => { event.preventDefault(); const data = new FormData(event.target); state.candidate = { name: data.get('name').trim(), regNo: data.get('regNo').trim() }; renderInstructions(); });
}

function renderInstructions() {
  app.innerHTML = shell(`<section class="instructions"><div class="section-heading"><p class="eyebrow">BEFORE YOU BEGIN</p><h1>Assessment protocol</h1><p>Take a breath, clear your desk, and make sure you are ready for one uninterrupted session.</p></div><div class="rules-grid"><article><span class="rule-icon">01</span><h3>One sitting</h3><p>You have 50 minutes to complete all 50 questions. The clock begins when you enter the assessment.</p></article><article><span class="rule-icon">02</span><h3>Stay present</h3><p>Switching tabs or windows is monitored. Three warnings will submit your attempt automatically.</p></article><article><span class="rule-icon">03</span><h3>Review freely</h3><p>Move between questions, change answers, and review your progress before submitting.</p></article></div><div class="ready-bar"><div><span class="status-dot"></span><b>Ready when you are, ${esc(state.candidate.name.split(' ')[0])}.</b><span>Your registration: ${esc(state.candidate.regNo)}</span></div><button class="primary-button" data-action="begin">Begin assessment <span>→</span></button></div></section>`);
  document.querySelector('[data-action="begin"]').addEventListener('click', startExam);
}

function startExam() { state.screen = 'exam'; state.remaining = DURATION_SECONDS; state.question = 0; state.answers = {}; state.warnings = 0; state.submitted = false; render(); state.timer = setInterval(() => { state.remaining -= 1; const timer = document.querySelector('#timer'); if (timer) timer.textContent = formatTime(state.remaining); if (state.remaining <= 0) submitExam('Time expired'); }, 1000); }

function renderExam() {
  const current = questions[state.question];
  const answered = Object.keys(state.answers).length;
     app.innerHTML = shell(`<div class="exam-head"><div><p class="eyebrow">NORTHSTAR TECHNICAL SCREENING</p><h2>Assessment in progress</h2></div><div class="exam-status"><div class="timer"><span class="timer-icon">◷</span><span id="timer">${formatTime(state.remaining)}</span></div><div class="warning-pill ${state.warnings ? 'warning' : ''}">⚠ ${state.warnings}/${MAX_WARNINGS} warnings</div></div></div><div class="progress-track"><span style="width: ${((state.question + 1) / questions.length) * 100}%"></span></div><div class="exam-layout"><aside class="question-nav"><div class="nav-title"><span>Questions</span><b>${answered}/${questions.length}</b></div><div class="question-dots">${questions.map((_, index) => `<button class="dot ${index === state.question ? 'active' : ''} ${state.answers[index] !== undefined ? 'answered' : ''}" data-question="${index}">${String(index + 1).padStart(2, '0')}</button>`).join('')}</div><div class="legend"><span><i class="legend-current"></i>Current</span><span><i class="legend-done"></i>Answered</span></div></aside><section class="question-card"><div class="question-meta"><span>Question ${String(state.question + 1).padStart(2, '0')} <small>/ ${questions.length}</small></span><span>Single choice</span></div>${formatQuestion(current[0])}<div class="answers">${current[1].map((answer, index) => `<button class="answer ${state.answers[state.question] === index ? 'selected' : ''}" data-answer="${index}"><span class="answer-letter">${String.fromCharCode(65 + index)}</span><span>${esc(answer)}</span><span class="answer-check">✓</span></button>`).join('')}</div><div class="question-actions"><button class="secondary-button" data-action="prev" ${state.question === 0 ? 'disabled' : ''}>← Previous</button>${state.question === questions.length - 1 ? '<button class="submit-button" data-action="submit">Submit assessment <span>→</span></button>' : '<button class="primary-button" data-action="next">Next question <span>→</span></button>'}</div></section></div>`);
  document.querySelectorAll('[data-answer]').forEach((button) => button.addEventListener('click', () => { state.answers[state.question] = Number(button.dataset.answer); renderExam(); }));
  document.querySelectorAll('[data-question]').forEach((button) => button.addEventListener('click', () => { state.question = Number(button.dataset.question); renderExam(); }));
  document.querySelector('[data-action="prev"]')?.addEventListener('click', () => { state.question -= 1; renderExam(); });
  document.querySelector('[data-action="next"]')?.addEventListener('click', () => { state.question += 1; renderExam(); });
  document.querySelector('[data-action="submit"]')?.addEventListener('click', () => { if (confirm('Submit your assessment now? You will not be able to change your answers.')) submitExam('Manual submission'); });
}

function submitExam(reason) { if (state.submitted || !state.candidate) return; state.submitted = true; clearInterval(state.timer); const correct = questions.reduce((total, question, index) => total + (state.answers[index] === question[2] ? 1 : 0), 0); const result = { id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()), name: state.candidate.name, regNo: state.candidate.regNo, score: correct, total: questions.length, percentage: Math.round((correct / questions.length) * 100), answered: Object.keys(state.answers).length, warnings: state.warnings, reason, submittedAt: new Date().toISOString() }; localStorage.setItem(STORAGE_KEY, JSON.stringify([...getResults(), result])); state.result = result; state.screen = 'complete'; render(); }

function renderComplete() { const result = state.result; app.innerHTML = shell(`<section class="complete"><div class="complete-mark">✓</div><p class="eyebrow">SUBMISSION RECEIVED</p><h1>Assessment complete.</h1><p class="lead">Thanks, ${esc(result.name.split(' ')[0])}. Your response has been recorded securely on this device.</p><div class="result-summary"><div><span>Registration</span><strong>${esc(result.regNo)}</strong></div><div><span>Questions answered</span><strong>${result.answered} / ${result.total}</strong></div><div><span>Submitted</span><strong>${new Date(result.submittedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</strong></div></div><p class="small-note">Your score is available in the results dashboard. Close this window when you are ready.</p><button class="secondary-button" data-action="home">Return to start</button></section>`); document.querySelector('[data-action="home"]').addEventListener('click', (event) => { event.preventDefault(); state.screen = 'welcome'; render(); }); }

function renderResults() { if (localStorage.getItem(ADMIN_KEY) !== 'true') { app.innerHTML = shell(`<section class="auth-panel"><p class="eyebrow">ADMIN ACCESS</p><h1>Results dashboard</h1><p>Enter the local administrator passcode to view stored submissions.</p><form id="admin-form"><input name="passcode" type="password" placeholder="Passcode" required><button class="primary-button">Open results <span>→</span></button><small>Demo passcode: <b>northstar</b></small></form><button class="text-button" data-action="home">← Back to candidate check-in</button></section>`, 'results'); document.querySelector('#admin-form').addEventListener('submit', (event) => { event.preventDefault(); if (new FormData(event.target).get('passcode') === 'northstar') { localStorage.setItem(ADMIN_KEY, 'true'); renderResults(); } else { event.target.classList.add('invalid'); } }); document.querySelector('[data-action="home"]').addEventListener('click', (event) => { event.preventDefault(); state.screen = 'welcome'; render(); }); return; } const results = getResults(); app.innerHTML = shell(`<section class="results-head"><div><p class="eyebrow">ADMINISTRATION · LOCAL RECORDS</p><h1>Results dashboard</h1><p>Review and export completed assessment attempts from this browser.</p></div><div class="export-actions"><button class="secondary-button" data-export="json">↓ JSON</button><button class="primary-button" data-export="csv">↓ CSV</button></div></section><div class="stats-row"><div><span>Total attempts</span><strong>${results.length}</strong></div><div><span>Average score</span><strong>${results.length ? Math.round(results.reduce((sum, result) => sum + result.percentage, 0) / results.length) : 0}%</strong></div><div><span>Latest submission</span><strong>${results.length ? new Date(results[results.length - 1].submittedAt).toLocaleDateString() : '—'}</strong></div></div><div class="table-wrap">${results.length ? `<table><thead><tr><th>Candidate</th><th>Registration</th><th>Score</th><th>Answered</th><th>Warnings</th><th>Submitted</th></tr></thead><tbody>${results.slice().reverse().map((result) => `<tr><td><b>${esc(result.name)}</b></td><td>${esc(result.regNo)}</td><td><span class="score">${result.percentage}%</span> <small>${result.score}/${result.total}</small></td><td>${result.answered}/${result.total}</td><td>${result.warnings}</td><td>${new Date(result.submittedAt).toLocaleString()}</td></tr>`).join('')}</tbody></table>` : '<div class="empty-state"><span>○</span><h3>No attempts yet</h3><p>Completed submissions will appear here.</p></div>'}</div><button class="text-button" data-action="logout">Sign out of results</button>`, 'results'); document.querySelectorAll('[data-export]').forEach((button) => button.addEventListener('click', () => download(button.dataset.export, results))); document.querySelector('[data-action="logout"]').addEventListener('click', () => { localStorage.removeItem(ADMIN_KEY); renderResults(); }); }

function download(type, results) { const headers = ['name', 'regNo', 'score', 'total', 'percentage', 'answered', 'warnings', 'reason', 'submittedAt']; const rows = results.map((result) => headers.map((header) => String(result[header] ?? '').replaceAll('"', '""'))); const content = type === 'json' ? JSON.stringify(results, null, 2) : [headers.join(','), ...rows.map((row) => row.map((value) => `"${value}"`).join(','))].join('\n'); const blob = new Blob([content], { type: type === 'json' ? 'application/json' : 'text/csv' }); const link = document.createElement('a'); link.href = URL.createObjectURL(blob); link.download = `northstar-results-${new Date().toISOString().slice(0, 10)}.${type}`; link.click(); URL.revokeObjectURL(link.href); }

document.addEventListener('visibilitychange', () => { if (state.screen === 'exam' && document.hidden && !state.submitted) { state.warnings += 1; if (state.warnings >= MAX_WARNINGS) submitExam('Auto-submitted after 3 tab warnings'); else { renderExam(); alert(`Warning ${state.warnings} of ${MAX_WARNINGS}: please stay on the assessment tab.`); } } });
document.addEventListener('click', (event) => { if (event.target.matches('[data-action="results"]')) { event.preventDefault(); state.screen = 'results'; render(); } });
render();

const RESULTS_API = import.meta.env.DEV ? 'http://localhost:8888/.netlify/functions/results' : '/.netlify/functions/results';
const getAdminPassword = () => localStorage.getItem(ADMIN_KEY) || '';

async function saveRemoteResult(result) {
  const response = await fetch(RESULTS_API, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ type: 'submission', result }) });
  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Submission could not be saved (${response.status}): ${details}`);
  }
}

submitExam = async function saveSubmission(reason) {
  if (state.submitted || !state.candidate) return;
  state.submitted = true;
  clearInterval(state.timer);
  const correct = questions.reduce((total, question, index) => total + (state.answers[index] === question[2] ? 1 : 0), 0);
  const result = { id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()), name: state.candidate.name, regNo: state.candidate.regNo, score: correct, total: questions.length, percentage: Math.round((correct / questions.length) * 100), answered: Object.keys(state.answers).length, warnings: state.warnings, reason, submittedAt: new Date().toISOString() };
  try {
    await saveRemoteResult(result);
    state.result = result;
    state.screen = 'complete';
    render();
  } catch (error) {
    state.submitted = false;
    alert(`${error.message}\n\nFor local testing, run the app with "netlify dev" instead of "npm run dev".`);
  }
};

renderResults = async function loadRemoteResults() {
  const password = getAdminPassword();
  if (!password) {
    app.innerHTML = shell(`<section class="auth-panel"><p class="eyebrow">ADMIN ACCESS</p><h1>Results dashboard</h1><p>Enter the administrator password to view shared submissions.</p><form id="admin-form"><input name="passcode" type="password" placeholder="Password" required><button class="primary-button">Open results <span>→</span></button></form><button class="text-button" data-action="home">← Back to candidate check-in</button></section>`, 'results');
    document.querySelector('#admin-form').addEventListener('submit', async (event) => {
      event.preventDefault();
      const entered = String(new FormData(event.target).get('passcode'));
      const response = await fetch(RESULTS_API, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ type: 'login', password: entered }) });
      if (!response.ok) { event.target.classList.add('invalid'); return; }
      localStorage.setItem(ADMIN_KEY, entered);
      loadRemoteResults();
    });
    document.querySelector('[data-action="home"]').addEventListener('click', (event) => { event.preventDefault(); state.screen = 'welcome'; render(); });
    return;
  }
  const response = await fetch(RESULTS_API, { headers: { 'x-admin-password': password } });
  if (response.status === 401) { localStorage.removeItem(ADMIN_KEY); loadRemoteResults(); return; }
  const results = await response.json();
  app.innerHTML = shell(`<section class="results-head"><div><p class="eyebrow">ADMINISTRATION · SHARED RECORDS</p><h1>Results dashboard</h1><p>Review and export completed assessment attempts from all candidates.</p></div><div class="export-actions"><button class="secondary-button" data-export="json">↓ JSON</button><button class="primary-button" data-export="csv">↓ CSV</button></div></section><div class="stats-row"><div><span>Total attempts</span><strong>${results.length}</strong></div><div><span>Average score</span><strong>${results.length ? Math.round(results.reduce((sum, result) => sum + result.percentage, 0) / results.length) : 0}%</strong></div><div><span>Latest submission</span><strong>${results.length ? new Date(results[results.length - 1].submittedAt).toLocaleDateString() : '—'}</strong></div></div><div class="table-wrap">${results.length ? `<table><thead><tr><th>Candidate</th><th>Registration</th><th>Score</th><th>Answered</th><th>Warnings</th><th>Submitted</th></tr></thead><tbody>${results.slice().reverse().map((result) => `<tr><td><b>${esc(result.name)}</b></td><td>${esc(result.regNo)}</td><td><span class="score">${result.percentage}%</span> <small>${result.score}/${result.total}</small></td><td>${result.answered}/${result.total}</td><td>${result.warnings}</td><td>${new Date(result.submittedAt).toLocaleString()}</td></tr>`).join('')}</tbody></table>` : '<div class="empty-state"><span>○</span><h3>No attempts yet</h3><p>Completed submissions will appear here.</p></div>'}</div><button class="text-button" data-action="logout">Sign out of results</button>`, 'results');
  document.querySelectorAll('[data-export]').forEach((button) => button.addEventListener('click', () => download(button.dataset.export, results)));
  document.querySelector('[data-action="logout"]').addEventListener('click', () => { localStorage.removeItem(ADMIN_KEY); loadRemoteResults(); });
};