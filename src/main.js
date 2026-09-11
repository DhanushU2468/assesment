import './style.css';

const STORAGE_KEY = 'northstar-assessment-results';
const DURATION_SECONDS = 50 * 60;
const MAX_WARNINGS = 3;
const ADMIN_KEY = 'northstar-admin-auth';

const questions = [
  // ============================================================
  // 1. DATA TYPES AND OPERATORS
  // ============================================================

  [
    'What is the data type of the value 25 in Python?',
    ['str', 'int', 'float', 'bool'],
    1
  ],

  [
    'What is the data type of 12.5?',
    ['int', 'str', 'float', 'bool'],
    2
  ],

  [
    'Which of the following is a Boolean value in Python?',
    ['"True"', '1', 'True', '"False"'],
    2
  ],

  [
    'What is the output of type("Python")?',
    ["<class 'int'>", "<class 'str'>", "<class 'float'>", "<class 'bool'>"],
    1
  ],

  [
    'What is the result of 15 + 5?',
    ['10', '20', '25', '15'],
    1
  ],

  [
    'What is the result of 10 / 2?',
    ['5', '5.0', '2', '2.0'],
    1
  ],

  [
    'What is the result of 10 // 3?',
    ['3', '3.33', '1', '4'],
    0
  ],

  [
    'What is the result of 10 % 3?',
    ['0', '1', '2', '3'],
    1
  ],



  [
    'Which function converts a value into an integer?',
    ['str()', 'float()', 'int()', 'bool()'],
    2
  ],

  [
    'What is the result of int("50")?',
    ['"50"', '50', '50.0', 'Error'],
    1
  ],

  [
    'What is the result of float(10)?',
    ['10', '10.0', '"10"', 'Error'],
    1
  ],

  [
    'What is the output of the following code?\n\nx = "Python"\nprint(x[0])',
    ['P', 'y', 'Python', 'Error'],
    0
  ],

  [
    'What is the output of the following code?\n\nx = "Python"\nprint(x[1:4])',
    ['Pyt', 'yth', 'tho', 'ython'],
    1
  ],

  [
    'What is the output of the following code?\n\nnumbers = [1, 2]\nnumbers.append(3)\nprint(numbers)',
    ['[1, 2]', '[3, 1, 2]', '[1, 2, 3]', '[1, 3, 2]'],
    2
  ],

  [
    'Which list method inserts an element at a specific position?',
    ['append()', 'insert()', 'add()', 'push()'],
    1
  ],

  [
    'What is the output of the following code?\n\nnumbers = [10, 20, 30]\nnumbers.remove(20)\nprint(numbers)',
    ['[10, 30]', '[20, 30]', '[10, 20]', '[10, 20, 30]'],
    0
  ],

  [
    'Which function returns the largest value in a list?',
    ['maximum()', 'largest()', 'max()', 'high()'],
    2
  ],

  [
    'What is the output of the following code?\n\nnumbers = [3, 1, 2]\nnumbers.sort()\nprint(numbers)',
    ['[3, 1, 2]', '[1, 2, 3]', '[2, 1, 3]', 'Error'],
    1
  ],


  // ============================================================
  // 2. OPERATOR PRECEDENCE AND OPERATORS
  // ============================================================

  [
    'What is the output of 2 + 3 * 4?',
    ['20', '14', '24', '9'],
    1
  ],

  [
    'What is the output of (2 + 3) * 4?',
    ['14', '20', '24', '9'],
    1
  ],


  [
    'What is the output of 10 > 5 and 3 < 2?',
    ['True', 'False', '10', 'Error'],
    1
  ],

  [
    'What is the output of True or False?',
    ['True', 'False', 'None', 'Error'],
    0
  ],

  [
    'What is the output of not True?',
    ['True', 'False', 'None', 'Error'],
    1
  ],

  [
    'Which operator checks whether a value exists in a collection?',
    ['is', 'in', '==', '='],
    1
  ],

  [
    'What is the output of the following code?\n\nnumbers = [1, 2, 3]\nprint(2 in numbers)',
    ['True', 'False', '2', 'Error'],
    0
  ],

  [
    'Which operator checks object identity in Python?',
    ['==', 'is', 'in', '='],
    1
  ],

  [
    'What is the difference between == and is?',
    [
      '== checks identity and is checks value',
      '== checks value and is checks identity',
      'Both always check identity',
      'Both always check type'
    ],
    1
  ],

  [
    'What is the output of 5 == 5.0?',
    ['True', 'False', 'Error', 'None'],
    0
  ],


  // ============================================================
  // 3. ASSIGNMENT AND LIST OPERATIONS
  // ============================================================

  [
    'What is the output of the following code?\n\nx = 10\nx += 5\nprint(x)',
    ['10', '15', '5', '105'],
    1
  ],

  [
    'What is the output of the following code?\n\nx = 20\nx //= 3\nprint(x)',
    ['6', '6.66', '7', '20'],
    0
  ],

  [
    'What is the output of the following code?\n\nx = 10\nx %= 3\nprint(x)',
    ['0', '1', '2', '3'],
    1
  ],

  [
    'What is the output of the following code?\n\nx = 2\nx **= 3\nprint(x)',
    ['6', '8', '9', '12'],
    1
  ],

  [
    'Which operator is used for floor division?',
    ['/', '//', '%', '**'],
    1
  ],

  [
    'Which operator is used to check that two values are NOT equal?',
    ['=', '==', '!=', 'is'],
    2
  ],

  [
    'What is the output of the following code?\n\nnumbers = [5, 2, 8, 1]\nprint(max(numbers))',
    ['1', '2', '5', '8'],
    3
  ],

  [
    'What is the output of the following code?\n\nnumbers = [5, 2, 8, 1]\nprint(min(numbers))',
    ['1', '2', '5', '8'],
    0
  ],

  [
    'What is the output of the following code?\n\nnumbers = [1, 2, 3]\nprint(numbers[::-1])',
    ['[1, 2, 3]', '[3, 2, 1]', '[2, 3, 1]', 'Error'],
    1
  ],

  [
    'What is the output of the following code?\n\nx = [1, 2]\ny = [3, 4]\nprint(x + y)',
    ['[1, 2, 3, 4]', '[4, 6]', '[1, 2]', 'Error'],
    0
  ],


  // ============================================================
  // 4. IF, ELIF, ELSE AND CONDITIONAL EXPRESSIONS
  // ============================================================

  [
    'Which keyword is used to make a decision in Python?',
    ['for', 'if', 'when', 'switch'],
    1
  ],

  [
    'Which keyword is used to check another condition after if?',
    ['else if', 'elif', 'elseif', 'another'],
    1
  ],

  [
    'Which keyword executes when all previous conditions are False?',
    ['default', 'otherwise', 'else', 'final'],
    2
  ],

  [
    'What is the output of the following code?\n\nx = 10\nif x > 5:\n    print("Yes")\nelse:\n    print("No")',
    ['Yes', 'No', '10', 'Error'],
    0
  ],

  [
    'What is the output of the following code?\n\nx = 15\nif x > 20:\n    print("A")\nelif x > 10:\n    print("B")\nelse:\n    print("C")',
    ['A', 'B', 'C', 'Error'],
    1
  ],

  [
    'What is the output of the following code?\n\nx = 8\nif x > 5 and x < 10:\n    print("Valid")\nelse:\n    print("Invalid")',
    ['Valid', 'Invalid', '8', 'Error'],
    0
  ],

  [
    'What is the output of the following code?\n\nx = 10\nresult = "Positive" if x > 0 else "Negative"\nprint(result)',
    ['Positive', 'Negative', 'True', 'Error'],
    0
  ],

  [
    'What is the output of the following code?\n\nx = 15\nif x > 10:\n    if x < 20:\n        print("A")\n    else:\n        print("B")\nelse:\n    print("C")',
    ['A', 'B', 'C', 'Error'],
    0
  ],


  // ============================================================
  // 5. LOOPS
  // ============================================================

  [
    'Which loop is commonly used to iterate over a sequence?',
    ['if', 'for', 'while', 'switch'],
    1
  ],

  [
    'Which loop is generally used when a condition controls repetition?',
    ['for', 'while', 'if', 'elif'],
    1
  ],

  [
    'What does range(5) generate?',
    ['1, 2, 3, 4, 5', '0, 1, 2, 3, 4', '0, 1, 2, 3, 4, 5', '5 only'],
    1
  ],

  [
    'What is the output of the following code?\n\nfor i in range(3):\n    print(i)',
    ['1 2 3', '0 1 2', '0 1 2 3', '3 2 1'],
    1
  ],

  [
    'What is the output of the following code?\n\ni = 1\nwhile i <= 3:\n    print(i)\n    i += 1',
    ['1 2', '1 2 3', '0 1 2', '1 2 3 4'],
    1
  ],

  [
    'Which keyword immediately terminates a loop?',
    ['stop', 'break', 'exit', 'terminate'],
    1
  ],

  [
    'Which keyword skips the current iteration and continues with the next one?',
    ['skip', 'continue', 'pass', 'next'],
    1
  ],

  [
    'Which keyword is used as a placeholder that performs no operation?',
    ['skip', 'continue', 'pass', 'empty'],
    2
  ],

  [
    'What is the output of the following code?\n\nfor i in range(5):\n    if i == 3:\n        break\n    print(i)',
    ['0 1 2', '0 1 2 3', '1 2 3', '0 1 2 3 4'],
    0
  ],

  [
    'What is the output of the following code?\n\nfor i in range(5):\n   \t\t\t if i == 2:\n  \t\t\t\t\t\t      continue\n   \t\t print(i)',
    ['0 1 2 3 4', '0 1 3 4', '1 2 3 4', '0 2 4'],
    1
  ],


  // ============================================================
  // 6. NESTED LOOPS, CONDITIONAL LOOPS AND PVM
  // ============================================================

 

  

  [
    'What happens if the condition of a while loop never becomes False?',
    ['The loop runs once', 'The loop becomes infinite', 'Python skips the loop', 'Python automatically stops it'],
    1
  ],

  [
    'What does PVM stand for in Python?',
    ['Python Virtual Machine', 'Python Variable Manager', 'Program Virtual Machine', 'Python Version Manager'],
    0
  ],

  [
    'What is the main role of the Python Virtual Machine?',
    ['Write Python programs', 'Execute Python bytecode', 'Create databases', 'Convert HTML to CSS'],
    1
  ],

  [
    'What is Python source code generally compiled into before execution?',
    ['Machine code', 'HTML', 'Bytecode', 'SQL'],
    2
  ],



  [
    'Which sequence best represents the basic Python execution process?',
    [
      'Source code → Bytecode → PVM execution',
      'Source code → HTML → Browser',
      'Bytecode → Source code → Browser',
      'Source code → SQL → Database'
    ],
    0
  ],

  [
    'Is Python bytecode the same as native machine code for a CPU?',
    ['Yes, always', 'No, it is an intermediate form', 'Only on Windows', 'Only on Linux'],
    1
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