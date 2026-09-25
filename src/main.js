import './style.css';

const STORAGE_KEY = 'northstar-assessment-results';
const DURATION_SECONDS = 50 * 60;
const MAX_WARNINGS = 3;
const ADMIN_KEY = 'northstar-admin-auth';
 const questions = [

    // SECTION 1: AI PROBLEM DEFINITION (12)

    ["What is the first step in developing an AI solution?",
      ["Identify the problem", "Deploy the model", "Delete the data", "Create a dashboard"], 0],

    ["What does identifying a business need mean?",
      ["Understanding what problem needs to be solved", "Choosing a computer", "Writing code immediately", "Deleting old records"], 0],

    ["In an AI project, what is an input?",
      ["Information given to the system", "The final prediction", "The model's accuracy", "The output report only"], 0],

    ["What is an output in an AI system?",
      ["The result produced by the system", "The raw computer hardware", "The training budget", "The input dataset"], 0],

    ["When should AI be used?",
      ["When it is suitable for solving the problem", "For every problem", "Only when there is no data", "Whenever a spreadsheet is available"], 0],

    ["Which is a possible benefit of AI?",
      ["Automating repetitive tasks", "Guaranteeing every prediction is correct", "Removing all security risks", "Eliminating the need for data"], 0],

    ["What is a measurable success criterion?",
      ["A target that can be measured", "A general opinion", "An unrelated activity", "A random prediction"], 0],

    ["What is a domain expert?",
      ["A person with knowledge of a specific subject or industry", "A person who only installs computers", "A person who deletes datasets", "A person who only designs logos"], 0],

    ["Why is a security plan important in an AI project?",
      ["To protect data and systems", "To increase duplicate records", "To remove all features", "To avoid testing the model"], 0],

    ["What is an example of an AI security threat?",
      ["Adversarial attack", "Sorting a spreadsheet", "Formatting a cell", "Creating a chart"], 0],

    ["What is AI bias?",
      ["Unfair or systematic errors affecting certain groups", "A type of computer memory", "A method of sorting data", "A type of spreadsheet formula"], 0],

    ["Why should an AI project document its data decisions?",
      ["To explain assumptions and support transparency", "To hide the data from everyone", "To avoid checking accuracy", "To remove the need for testing"], 0],

    // SECTION 2: MACHINE LEARNING TYPES (10)

    ["What is supervised learning?",
      ["Learning from labeled data", "Learning without any data", "Learning only by playing games", "Learning without examples"], 0],

    ["Which is an example of classification?",
      ["Predicting whether an email is spam or not spam", "Predicting tomorrow's temperature as a number", "Grouping customers without labels", "Calculating the sum of sales"], 0],

    ["Which is an example of regression?",
      ["Predicting the price of a house", "Classifying an email as spam", "Grouping similar customers", "Identifying customer segments without labels"], 0],

    ["What is unsupervised learning?",
      ["Finding patterns in unlabeled data", "Learning only from labeled answers", "Learning only from rewards", "Learning from fixed rules only"], 0],

    ["Which is an example of unsupervised learning?",
      ["Grouping customers based on purchasing behavior", "Predicting a labeled student's pass or fail", "Predicting a house price", "Classifying images with known labels"], 0],

    ["What is semi-supervised learning?",
      ["Using a small amount of labeled data and a large amount of unlabeled data", "Using only labeled data", "Using no data", "Using only rewards"], 0],

    ["Which situation is suitable for semi-supervised learning?",
      ["A few labeled images and many unlabeled images", "Every image has a label and there are no unlabeled images", "No images are available", "Only numerical calculations are required"], 0],

    ["What is reinforcement learning?",
      ["Learning through actions, rewards, and penalties", "Learning only from labeled tables", "Grouping data without labels", "Learning by deleting records"], 0],

    ["In reinforcement learning, what encourages an agent to repeat a useful action?",
      ["Reward", "Missing value", "Duplicate record", "Column name"], 0],

    ["Which algorithm is commonly used for clustering?",
      ["K-Means", "Linear Regression", "Logistic Regression", "Decision Tree for labeled classification"], 0],

    // SECTION 3: TYPES OF DATA AND DATA COLLECTION (8)

    ["Which of the following is structured data?",
      ["A table containing names and ages", "An audio recording", "A video file", "An image"], 0],

    ["Which is an example of unstructured data?",
      ["A collection of videos", "A table of student marks", "A spreadsheet with fixed columns", "A relational database table"], 0],

    ["Which is an example of semi-structured data?",
      ["JSON data", "A plain photograph", "An audio recording", "A handwritten drawing"], 0],

    ["Which is an example of numerical data?",
      ["Student age", "Student photograph", "Voice recording", "Written essay"], 0],

    ["Which is an example of categorical data?",
      ["Blood group", "Temperature in degrees", "Height in centimeters", "Monthly salary"], 0],

    ["What is labeled data?",
      ["Data that includes the correct target or answer", "Data with no values", "Data containing only images", "Data that has been deleted"], 0],

    ["What is data quality checking?",
      ["Checking for missing, incorrect, or corrupt values", "Changing every value to zero", "Deleting all columns", "Increasing file size"], 0],

    ["Why should a dataset represent different user groups?",
      ["To reduce bias and improve fairness", "To make the dataset smaller at any cost", "To avoid model evaluation", "To remove all categories"], 0],

    // SECTION 4: PROCESSING, FEATURES AND TRAIN/TEST (8)

    ["What is data preprocessing?",
      ["Preparing raw data for use by a model", "Deleting the AI model", "Creating a business logo", "Installing a printer"], 0],

    ["What is a feature in machine learning?",
      ["An input variable used by a model", "The final answer only", "A type of computer screen", "A model's file name"], 0],

    ["What is feature engineering?",
      ["Creating or transforming features to help a model learn", "Deleting all input data", "Only changing the color of charts", "Installing an operating system"], 0],

    ["What is tokenization in text processing?",
      ["Breaking text into smaller units called tokens", "Converting text into a chart", "Deleting all words", "Sorting images by size"], 0],

    ["How is a digital image commonly represented for AI?",
      ["As numerical pixel values", "As handwritten paragraphs only", "As sound waves only", "As spreadsheet formulas"], 0],

    ["What is the purpose of a training dataset?",
      ["To teach the model patterns", "To display only the final report", "To store passwords", "To replace the test dataset completely"], 0],

    ["What is the purpose of a test dataset?",
      ["To evaluate the model on data not used for training", "To train the model repeatedly", "To store source code", "To remove all features"], 0],

    ["Why should data decisions be documented?",
      ["To record assumptions, constraints, and processing choices", "To hide project details", "To avoid data collection", "To guarantee 100% accuracy"], 0],

    // SECTION 5: BASIC PANDAS (12)

    ["What is Pandas in Python mainly used for?",
      ["Data manipulation and analysis", "Creating computer hardware", "Editing videos", "Building operating systems"], 0],

    ["Which command imports the Pandas library?",
      ["import pandas as pd", "import pandas as np", "include pandas", "using pandas"], 0],

    ["Which Pandas function creates a DataFrame?",
      ["pd.DataFrame()", "pd.Chart()", "pd.Image()", "pd.Model()"], 0],

    ["What is a DataFrame?",
      ["A two-dimensional labeled data structure", "A single number only", "A Python loop", "A machine learning algorithm"], 0],

    ["Which function reads a CSV file in Pandas?",
      ["pd.read_csv()", "pd.open_csv()", "pd.load_excel()", "pd.import_file()"], 0],

    ["Which command displays the first five rows of a DataFrame?",
      ["df.head()", "df.tail()", "df.delete()", "df.sort()"], 0],

    ["Which command displays the last five rows?",
      ["df.tail()", "df.head()", "df.first()", "df.start()"], 0],

    ["Which command displays the number of rows and columns?",
      ["df.shape", "df.size()", "df.columns()", "df.count_rows()"], 0],

    ["How do you select the column named Age from a DataFrame df?",
      ["df['Age']", "df(Age)", "df->Age", "df.select(Age)"], 0],

    ["Which command checks for missing values in a DataFrame?",
      ["df.isnull()", "df.remove()", "df.empty_rows()", "df.check_error()"], 0],

    ["Which Pandas function removes rows containing missing values?",
      ["df.dropna()", "df.fillna()", "df.head()", "df.describe()"], 0],

    ["Which function provides basic statistical information about numeric columns?",
      ["df.describe()", "df.read_csv()", "df.dropna()", "df.rename()"], 0]
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
  app.innerHTML = shell(`<section class="welcome-grid"><div class="intro"><p class="eyebrow">TECHNICAL SCREENING · 01</p><h1>Dhanush sir <br><em>Quiz platform</em></h1><p class="lead">A focused 50-question assessment designed to measure practical technical understanding.</p><div class="feature-row"><div><strong>50 min</strong><span>Time limit</span></div><div><strong>50</strong><span>Questions</span></div><div><strong>3</strong><span>Tab warnings</span></div></div></div><div class="entry-panel"><div class="panel-kicker">Candidate check-in</div><h2>Start your assessment</h2><p class="panel-copy">Enter your details exactly as they appear on your registration.</p><form id="candidate-form"><label>Full name<input name="name" type="text" placeholder="e.g. Aisha Rahman" required autocomplete="name"></label><label>Registration number<input name="regNo" type="text" placeholder="e.g. NS-2026-0142" required></label><label class="check"><input type="checkbox" required> <span>I understand this is a proctored assessment and agree to stay on this tab.</span></label><button class="primary-button" type="submit">Continue to instructions <span>→</span></button></form><p class="small-note">Your attempt is stored locally in this browser and can be exported after submission.</p></div></section>`);
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

async function deleteRemoteResult(id) {
  const response = await fetch(RESULTS_API, { method: 'POST', headers: { 'Content-Type': 'application/json', 'x-admin-password': getAdminPassword() }, body: JSON.stringify({ type: 'delete', id }) });
  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Result could not be deleted (${response.status}): ${details}`);
  }
}

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
  const table = document.querySelector('table');
  if (table) {
    const actionsHeader = document.createElement('th');
    actionsHeader.textContent = 'Actions';
    table.querySelector('thead tr').append(actionsHeader);
    table.querySelectorAll('tbody tr').forEach((row, index) => {
      const cell = document.createElement('td');
      const button = document.createElement('button');
      button.className = 'text-button delete-button';
      button.textContent = 'Delete';
      button.addEventListener('click', async () => {
        const result = results[results.length - 1 - index];
        if (!confirm(`Delete the result for ${result.name}? This cannot be undone.`)) return;
        button.disabled = true;
        try {
          await deleteRemoteResult(result.id);
          loadRemoteResults();
        } catch (error) {
          button.disabled = false;
          alert(error.message);
        }
      });
      cell.append(button);
      row.append(cell);
    });
  }
  document.querySelectorAll('[data-export]').forEach((button) => button.addEventListener('click', () => download(button.dataset.export, results)));
  document.querySelector('[data-action="logout"]').addEventListener('click', () => { localStorage.removeItem(ADMIN_KEY); loadRemoteResults(); });
};