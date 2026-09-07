import './style.css';

const STORAGE_KEY = 'northstar-assessment-results';
const DURATION_SECONDS = 50 * 60;
const MAX_WARNINGS = 3;
const ADMIN_KEY = 'northstar-admin-auth';

const questions = [
  ['Which principle ensures a class has only one reason to change?', ['Open/closed principle', 'Single responsibility principle', 'Liskov substitution principle', 'Dependency inversion principle'], 1],
  ['What does HTTP status code 404 indicate?', ['The request succeeded', 'The server is unavailable', 'The requested resource was not found', 'The request is unauthorized'], 2],
  ['Which data structure follows FIFO ordering?', ['Stack', 'Queue', 'Tree', 'Graph'], 1],
  ['What is the binary representation of decimal 10?', ['1001', '1010', '1100', '1110'], 1],
  ['Which SQL clause filters grouped results?', ['WHERE', 'ORDER BY', 'HAVING', 'LIMIT'], 2],
  ['What is the primary purpose of an index in a database?', ['Encrypt records', 'Speed up lookups', 'Create backups', 'Validate passwords'], 1],
  ['Which protocol is used to securely browse websites?', ['FTP', 'HTTP', 'SSH', 'HTTPS'], 3],
  ['What does CSS stand for?', ['Computer Style Sheets', 'Cascading Style Sheets', 'Creative Styling System', 'Coded Style Syntax'], 1],
  ['Which JavaScript keyword declares a block-scoped constant?', ['var', 'let', 'const', 'static'], 2],
  ['What is the average time complexity of binary search?', ['O(n)', 'O(log n)', 'O(n log n)', 'O(1)'], 1],
  ['Which Git command creates a new branch?', ['git fork', 'git branch', 'git split', 'git checkout --new'], 1],
  ['What is the default port for HTTPS?', ['80', '21', '443', '3000'], 2],
  ['Which component manages state in a React application?', ['The browser', 'Application logic', 'Only the database', 'DNS'], 1],
  ['What does API stand for?', ['Application Programming Interface', 'Applied Program Instruction', 'Application Process Index', 'Automated Programming Input'], 0],
  ['Which of these is not a programming paradigm?', ['Object-oriented', 'Functional', 'Procedural', 'Relational database'], 3],
  ['What is normalization in databases used to reduce?', ['Data redundancy', 'Network latency', 'CPU speed', 'File permissions'], 0],
  ['Which layer of the OSI model handles routing?', ['Physical', 'Data link', 'Network', 'Application'], 2],
  ['What is JSON primarily used for?', ['Styling pages', 'Data interchange', 'Compiling code', 'Managing hardware'], 1],
  ['Which test checks a small isolated unit of code?', ['Unit test', 'Load test', 'Acceptance test', 'Smoke test'], 0],
  ['What does responsive web design adapt to?', ['Only printers', 'Different screen sizes', 'Database schemas', 'Compiler versions'], 1],
  ['Which memory is volatile?', ['SSD', 'Hard disk', 'RAM', 'ROM'], 2],
  ['What does DNS translate?', ['Domain names to IP addresses', 'HTML to CSS', 'Source to binary', 'Files to folders'], 0],
  ['Which keyword handles errors in JavaScript?', ['try/catch', 'error/handle', 'rescue', 'guard'], 0],
  ['What is an algorithm?', ['A hardware device', 'A step-by-step procedure', 'A database table', 'A user interface'], 1],
  ['Which cloud model provides virtual machines?', ['SaaS', 'PaaS', 'IaaS', 'DaaS'], 2],
  ['What does CRUD stand for?', ['Create, Read, Update, Delete', 'Compile, Run, Use, Deploy', 'Copy, Replace, Upload, Download', 'Create, Render, Use, Design'], 0],
  ['Which value is a Boolean?', ['"true"', '1', 'true', 'yes'], 2],
  ['What is an endpoint in an API?', ['A physical cable', 'A URL that exposes a service', 'A database password', 'A CSS selector'], 1],
  ['Which attack attempts to inject database commands?', ['Phishing', 'SQL injection', 'DDoS', 'Brute force'], 1],
  ['What is version control used for?', ['Tracking code changes', 'Rendering images', 'Hosting email', 'Compressing videos'], 0],
  ['Which HTML element creates a hyperlink?', ['<link>', '<a>', '<href>', '<url>'], 1],
  ['Which HTTP method is generally used to retrieve data?', ['POST', 'PUT', 'GET', 'PATCH'], 2],
  ['What is encapsulation?', ['Bundling data and methods together', 'Deleting old data', 'Copying a repository', 'Splitting a network'], 0],
  ['Which format is commonly used for tabular export?', ['CSV', 'PNG', 'MP3', 'WAV'], 0],
  ['What does latency measure?', ['Delay before data transfer', 'Total disk size', 'Number of users', 'Screen brightness'], 0],
  ['Which tool commonly installs JavaScript packages?', ['npm', 'pip', 'maven', 'cargo'], 0],
  ['What is a primary key?', ['A unique row identifier', 'A password', 'A backup file', 'A view template'], 0],
  ['Which CSS property changes text color?', ['font-style', 'background', 'color', 'text-fill'], 2],
  ['What is the purpose of a cache?', ['Store frequently used data for faster access', 'Delete logs', 'Encrypt traffic', 'Compile HTML'], 0],
  ['Which status code represents a successful HTTP response?', ['200', '301', '403', '500'], 0],
  ['What does an event listener do?', ['Responds to an event', 'Creates a database', 'Compresses CSS', 'Sets a DNS record'], 0],
  ['Which is an example of authentication?', ['Checking a username and password', 'Assigning a color', 'Sorting a list', 'Opening a file'], 0],
  ['What does CI commonly stand for?', ['Continuous Integration', 'Code Inspection', 'Central Interface', 'Compiled Input'], 0],
  ['Which data type stores an ordered collection in JavaScript?', ['Array', 'Boolean', 'Symbol', 'RegExp'], 0],
  ['What is a CDN used for?', ['Delivering content from distributed locations', 'Designing databases', 'Writing unit tests', 'Managing passwords'], 0],
  ['Which practice makes code easier to maintain?', ['Clear naming', 'Duplicating logic', 'Ignoring tests', 'Hardcoding secrets'], 0],
  ['What does SSL/TLS primarily protect?', ['Data in transit', 'Screen resolution', 'Disk capacity', 'Keyboard input'], 0],
  ['Which operator checks strict equality in JavaScript?', ['=', '==', '===', '!='], 2],
  ['What is a function parameter?', ['A value accepted by a function', 'A return value only', 'A file extension', 'A CSS rule'], 0],
  ['Which principle recommends keeping interfaces focused?', ['Interface segregation', 'Inheritance only', 'Global state', 'Premature optimization'], 0],
  ['What does UX focus on?', ['The user experience', 'Server hardware', 'Data encryption only', 'Compiler output'], 0],
  ['Which command shows the current Git working tree state?', ['git status', 'git inspect', 'git now', 'git view'], 0],
];

const state = { screen: 'welcome', candidate: null, answers: {}, question: 0, remaining: DURATION_SECONDS, warnings: 0, timer: null, submitted: false };
const app = document.querySelector('#app');
const esc = (value) => String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[character]));
const getResults = () => JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
const formatTime = (seconds) => `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;

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
  app.innerHTML = shell(`<div class="exam-head"><div><p class="eyebrow">NORTHSTAR TECHNICAL SCREENING</p><h2>Assessment in progress</h2></div><div class="exam-status"><div class="timer"><span class="timer-icon">◷</span><span id="timer">${formatTime(state.remaining)}</span></div><div class="warning-pill ${state.warnings ? 'warning' : ''}">⚠ ${state.warnings}/${MAX_WARNINGS} warnings</div></div></div><div class="progress-track"><span style="width: ${((state.question + 1) / questions.length) * 100}%"></span></div><div class="exam-layout"><aside class="question-nav"><div class="nav-title"><span>Questions</span><b>${answered}/${questions.length}</b></div><div class="question-dots">${questions.map((_, index) => `<button class="dot ${index === state.question ? 'active' : ''} ${state.answers[index] !== undefined ? 'answered' : ''}" data-question="${index}">${String(index + 1).padStart(2, '0')}</button>`).join('')}</div><div class="legend"><span><i class="legend-current"></i>Current</span><span><i class="legend-done"></i>Answered</span></div></aside><section class="question-card"><div class="question-meta"><span>Question ${String(state.question + 1).padStart(2, '0')} <small>/ ${questions.length}</small></span><span>Single choice</span></div><h1>${esc(current[0])}</h1><div class="answers">${current[1].map((answer, index) => `<button class="answer ${state.answers[state.question] === index ? 'selected' : ''}" data-answer="${index}"><span class="answer-letter">${String.fromCharCode(65 + index)}</span><span>${esc(answer)}</span><span class="answer-check">✓</span></button>`).join('')}</div><div class="question-actions"><button class="secondary-button" data-action="prev" ${state.question === 0 ? 'disabled' : ''}>← Previous</button>${state.question === questions.length - 1 ? '<button class="submit-button" data-action="submit">Submit assessment <span>→</span></button>' : '<button class="primary-button" data-action="next">Next question <span>→</span></button>'}</div></section></div>`);
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