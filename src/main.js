import './style.css';

const STORAGE_KEY = 'northstar-assessment-results';
const DURATION_SECONDS = 50 * 60;
const MAX_WARNINGS = 3;
const ADMIN_KEY = 'northstar-admin-auth';
const questions = [
  // ============================================================
  // 1. DATA TYPES AND TYPE CONVERSION
  // ============================================================

  [
    'What is the output of the following code?\n\nx = 10\ny = 2.5\nprint(type(x), type(y))',
    ["<class 'int'> <class 'float'>", "<class 'float'> <class 'int'>", "<class 'str'> <class 'float'>", "<class 'int'> <class 'int'>"],
    0
  ],

  [
    'What is the output of the following code?\n\nx = "25"\ny = int(x)\nprint(type(y))',
    ["<class 'str'>", "<class 'float'>", "<class 'int'>", "<class 'bool'>"],
    2
  ],

  [
    'What is the output of the following code?\n\nx = 10\ny = float(x)\nprint(y)',
    ['10', '10.0', '"10"', 'Error'],
    1
  ],

  [
    'What is the output of the following code?\n\nx = 0\nprint(bool(x))',
    ['True', 'False', '0', 'None'],
    1
  ],

  [
    'What is the output of the following code?\n\nx = "0"\nprint(bool(x))',
    ['True', 'False', '0', 'Error'],
    0
  ],

  [
    'What is the output of the following code?\n\nx = 12.8\nprint(int(x))',
    ['12', '13', '12.8', 'Error'],
    0
  ],

  [
    'What is the output of the following code?\n\nx = 5\ny = 2\nprint(float(x // y))',
    ['2', '2.0', '2.5', 'Error'],
    1
  ],

  [
    'Which conversion correctly converts the string "45.6" into a floating-point value?',
    ['int("45.6")', 'float("45.6")', 'str("45.6")', 'bool("45.6")'],
    1
  ],

  // ============================================================
  // 2. INDEXING AND SLICING
  // ============================================================

  [
    'What is the output of the following code?\n\ntext = "Python"\nprint(text[2])',
    ['P', 'y', 't', 'h'],
    2
  ],

  [
    'What is the output of the following code?\n\ntext = "Python"\nprint(text[-1])',
    ['P', 'n', 'o', 'h'],
    1
  ],

  [
    'What is the output of the following code?\n\ntext = "Python"\nprint(text[1:4])',
    ['Pyt', 'yth', 'ytho', 'ython'],
    1
  ],

  [
    'What is the output of the following code?\n\ntext = "Python"\nprint(text[:3])',
    ['Pyt', 'yth', 'Python', 'Pyth'],
    0
  ],

  [
    'What is the output of the following code?\n\ntext = "Python"\nprint(text[3:])',
    ['Pyt', 'hon', 'thon', 'Python'],
    2
  ],

  [
    'What is the output of the following code?\n\ntext = "Python"\nprint(text[::-1])',
    ['Python', 'nohtyP', 'nohty', 'Error'],
    1
  ],

  [
    'What is the output of the following code?\n\nnumbers = [10, 20, 30, 40, 50]\nprint(numbers[1:4])',
    ['[10, 20, 30]', '[20, 30, 40]', '[20, 30, 40, 50]', '[10, 20, 30, 40]'],
    1
  ],

  [
    'What is the output of the following code?\n\nnumbers = [1, 2, 3, 4, 5]\nprint(numbers[::-1])',
    ['[1, 2, 3, 4, 5]', '[5, 4, 3, 2, 1]', '[2, 3, 4, 5]', 'Error'],
    1
  ],

  // ============================================================
  // 3. LIST OPERATIONS
  // ============================================================

  [
    'What is the output of the following code?\n\nnumbers = [3, 1, 4, 2]\nnumbers.sort()\nprint(numbers)',
    ['[3, 1, 4, 2]', '[1, 2, 3, 4]', '[4, 3, 2, 1]', 'Error'],
    1
  ],

  [
    'What is the output of the following code?\n\nnumbers = [1, 2, 3]\nnumbers.append(4)\nprint(numbers)',
    ['[4, 1, 2, 3]', '[1, 2, 3]', '[1, 2, 3, 4]', '[1, 2, 4, 3]'],
    2
  ],

  [
    'What is the output of the following code?\n\nnumbers = [1, 2, 4]\nnumbers.insert(2, 3)\nprint(numbers)',
    ['[1, 2, 3, 4]', '[1, 3, 2, 4]', '[3, 1, 2, 4]', '[1, 2, 4, 3]'],
    0
  ],

  [
    'What is the output of the following code?\n\nnumbers = [1, 2, 3, 2]\nnumbers.remove(2)\nprint(numbers)',
    ['[1, 3, 2]', '[1, 2, 3]', '[1, 3]', '[2, 1, 3]'],
    0
  ],

  [
    'What is the output of the following code?\n\nnumbers = [10, 20, 30]\nprint(max(numbers))',
    ['10', '20', '30', '60'],
    2
  ],

  [
    'What is the output of the following code?\n\nnumbers = [10, 20, 30]\nprint(min(numbers))',
    ['10', '20', '30', '0'],
    0
  ],

  [
    'What is the output of the following code?\n\nlist1 = [1, 2]\nlist2 = [3, 4]\nprint(list1 + list2)',
    ['[1, 2, 3, 4]', '[3, 4, 1, 2]', '[1, 2, [3, 4]]', 'Error'],
    0
  ],

  [
    'What is the output of the following code?\n\nnumbers = [1, 2, 3]\nnumbers.reverse()\nprint(numbers)',
    ['[1, 2, 3]', '[3, 2, 1]', '[2, 3, 1]', 'Error'],
    1
  ],

  [
    'What is the output of the following code?\n\nnumbers = [5, 2, 8, 1]\nnumbers.sort()\nprint(max(numbers))',
    ['1', '2', '5', '8'],
    3
  ],

  [
    'Which operation merges two lists into a single list?',
    ['list1 - list2', 'list1 + list2', 'list1 * list2', 'list1 / list2'],
    1
  ],

  // ============================================================
  // 4. ARITHMETIC OPERATORS AND PRECEDENCE
  // ============================================================

  [
    'What is the output of the following expression?\n\n10 + 5 * 2',
    ['30', '20', '25', '15'],
    1
  ],

  [
    'What is the output of the following expression?\n\n(10 + 5) * 2',
    ['20', '25', '30', '15'],
    2
  ],

  [
    'What is the output of the following expression?\n\n20 - 6 / 2',
    ['7.0', '17.0', '14', '10'],
    1
  ],

  [
    'What is the output of the following expression?\n\n2 ** 3 ** 2',
    ['64', '512', '36', '256'],
    1
  ],

  [
    'What is the output of the following expression?\n\n-5 + 3',
    ['-8', '-2', '2', '8'],
    1
  ],

  [
    'What is the output of the following expression?\n\n17 // 5',
    ['2', '3', '3.4', '4'],
    1
  ],

  [
    'What is the output of the following expression?\n\n17 % 5',
    ['0', '1', '2', '3'],
    2
  ],

  // ============================================================
  // 5. ASSIGNMENT OPERATORS
  // ============================================================

  [
    'What is the output of the following code?\n\nx = 10\nx += 5\nprint(x)',
    ['5', '10', '15', '50'],
    2
  ],

  [
    'What is the output of the following code?\n\nx = 20\nx -= 7\nprint(x)',
    ['13', '14', '27', '7'],
    0
  ],

  [
    'What is the output of the following code?\n\nx = 20\nx //= 3\nprint(x)',
    ['6', '6.66', '7', '3'],
    0
  ],

  [
    'What is the output of the following code?\n\nx = 2\nx **= 3\nprint(x)',
    ['5', '6', '8', '9'],
    2
  ],

  [
    'What is the output of the following code?\n\nx = 15\nx %= 4\nprint(x)',
    ['2', '3', '4', '15'],
    1
  ],

  // ============================================================
  // 6. COMPARISON, LOGICAL, IDENTITY AND CONTAINMENT
  // ============================================================

  [
    'What is the output of the following expression?\n\n10 >= 10',
    ['True', 'False', '10', 'Error'],
    0
  ],

  [
    'What is the output of the following expression?\n\n10 != 10',
    ['True', 'False', '10', 'None'],
    1
  ],

  [
    'What is the output of the following expression?\n\n10 > 5 and 3 < 2',
    ['True', 'False', '10', 'Error'],
    1
  ],

  [
    'What is the output of the following expression?\n\n10 > 5 or 3 < 2',
    ['True', 'False', '10', 'Error'],
    0
  ],

  [
    'What is the output of the following expression?\n\nnot (10 > 5)',
    ['True', 'False', '10', 'Error'],
    1
  ],

  [
    'What is the output of the following code?\n\nnumbers = [10, 20, 30]\nprint(20 in numbers)',
    ['True', 'False', '20', 'Error'],
    0
  ],

  [
    'What is the output of the following code?\n\nnumbers = [10, 20, 30]\nprint(40 not in numbers)',
    ['True', 'False', '40', 'Error'],
    0
  ],

  [
    'Which operator checks whether two variables refer to the same object?',
    ['==', 'is', 'in', '=', '!='],
    1
  ],

  // ============================================================
  // 7. IF, ELIF, ELSE AND COMPOUND CONDITIONS
  // ============================================================

  [
    'What is the output of the following code?\n\nx = 15\nif x > 10:\n    print("A")\nelse:\n    print("B")',
    ['A', 'B', '15', 'Error'],
    0
  ],

  [
    'What is the output of the following code?\n\nx = 15\nif x > 20:\n    print("A")\nelif x > 10:\n    print("B")\nelse:\n    print("C")',
    ['A', 'B', 'C', 'Error'],
    1
  ],

  [
    'What is the output of the following code?\n\nx = 8\nif x > 5 and x < 10:\n    print("Valid")\nelse:\n    print("Invalid")',
    ['Valid', 'Invalid', 'True', 'Error'],
    0
  ],

  [
    'What is the output of the following code?\n\nx = 12\nif x < 5 or x > 10:\n    print("Yes")\nelse:\n    print("No")',
    ['Yes', 'No', '12', 'Error'],
    0
  ],

  [
    'What is the output of the following code?\n\nx = 7\nif x >= 5 and x <= 7:\n    print("A")\nelse:\n    print("B")',
    ['A', 'B', 'True', 'Error'],
    0
  ],

  // ============================================================
  // 8. LOOPS
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
    'What is the output of the following code?\n\nx = 0\nfor i in range(1, 5):\n    x += i\nprint(x)',
    ['5', '10', '15', '20'],
    1
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
    'What is the output of the following code?\n\nx = 1\nwhile x < 5:\n    print(x, end=" ")\n    x += 1',
    ['1 2 3 4', '1 2 3 4 5', '0 1 2 3', 'Infinite loop'],
    0
  ],

  [
    'What is the output of the following code?\n\nx = 2\nwhile x <= 8:\n    print(x, end=" ")\n    x += 2',
    ['2 4 6 8', '2 4 6', '1 2 3 4', '2 3 4 5 6 7 8'],
    0
  ],

  [
    'What happens when the pass statement is executed inside a loop?',
    [
      'The loop terminates',
      'The current iteration is skipped',
      'Nothing happens and execution continues',
      'The program stops'
    ],
    2
  ],

  // ============================================================
  // 9. NESTED LOOPS AND CONDITIONAL LOOPS
  // ============================================================

  [
    'How many times will the inner print statement execute?\n\nfor i in range(3):\n    for j in range(2):\n        print("*")',
    ['2', '3', '5', '6'],
    3
  ],

  [
    'What is the output of the following code?\n\nfor i in range(3):\n    for j in range(2):\n        print(i, j)',
    [
      '0 0\\n0 1\\n1 0\\n1 1\\n2 0\\n2 1',
      '0 0\\n1 1\\n2 2',
      '0 1\\n1 2\\n2 3',
      '0 0\\n0 1\\n1 1'
    ],
    0
  ],

  [
    'What is the output of the following code?\n\nfor i in range(1, 5):\n    if i % 2 == 0:\n        print(i, end=" ")',
    ['1 3', '2 4', '1 2 3 4', '0 2 4'],
    1
  ],

  [
    'What is the output of the following code?\n\nfor i in range(1, 6):\n    if i > 2 and i < 5:\n        print(i, end=" ")',
    ['1 2', '2 3 4', '3 4', '3 4 5'],
    2
  ],

  [
    'What is the output of the following code?\n\nfor i in range(5):\n    if i == 2:\n        pass\n    print(i, end=" ")',
    ['0 1 3 4', '0 1 2 3 4', '2', '0 1'],
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