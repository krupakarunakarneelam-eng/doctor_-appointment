// ── DATA STORE ────────────────────────────────────────────────────────────────
const SEED_VERSION = 'v3';

function seed() {
    if (localStorage.getItem('seeded') === SEED_VERSION) return;
    localStorage.setItem('clients', JSON.stringify([
        { id: 1, username: 'partone', password: 'asd123456', email: 'viren@gmail.com', phone: '9876543210', blood: 'AB+', address: '3,Abc soc', dob: '2020-03-03', age: 23, allergy: 'skin' },
        { id: 2, username: 'darshan', password: '123', email: 'darsh@gmal.com', phone: '94433133', blood: 'A', address: 'makr surat', dob: '2000-05-29', age: 20, allergy: 'as' }
    ]));
    localStorage.setItem('doctors', JSON.stringify([
        { id: 2, clinicid: 3, username: 'darsh', password: '1234', email: 'doc1@gmail.com', phone: '1346789', speciality: 'Surgeon', rating: 7.5, degree: 'MBBS', experience: 8.92, age: 383, fee: 50000 },
        { id: 3, clinicid: 2, username: 'daesh', password: 'doc2123456', email: 'doc2@gmail.com', phone: '5465564', speciality: 'Dentist', rating: 5.5, degree: 'MD', experience: 6, age: 25, fee: 1000 },
        { id: 4, clinicid: 5, username: 'doc3', password: 'doc3123456', email: 'doc3@gmail.com', phone: '5454', speciality: 'Ortho', rating: 7.7, degree: 'DVD', experience: 5, age: 37, fee: 2000 },
        { id: 5, clinicid: 6, username: 'doc4', password: 'doc4123456', email: 'doc4@gmail.com', phone: '587943131', speciality: 'Skin', rating: 5.2, degree: 'MS', experience: 8, age: 42, fee: 2000 },
        { id: 8, clinicid: 2, username: 'doc5', password: 'doc5123456', email: 'doc5@gmail.com', phone: '545', speciality: 'Kidney', rating: 5.5, degree: 'MS', experience: 9, age: 33, fee: 2500 },
        { id: 9, clinicid: 2, username: 'doc6', password: '1234', email: 'doc6@gmail.com', phone: '545545', speciality: 'Gynec', rating: 8.5, degree: 'MBBS', experience: 8, age: 39, fee: 5000 },
        { id: 19, clinicid: null, username: 'dae', password: '123', email: 'ad@mail.com', phone: '3434223454', speciality: 'General', rating: null, degree: 'MBBS', experience: 45, age: 34, fee: 2434 }
    ]));
    localStorage.setItem('labs', JSON.stringify([
        { id: 1, username: 'abc', password: '123', name: 'darshan', email: 'waf@vds.com', phone: '4561313568', type: 'X-Ray', speciality: 'Radiologist' },
        { id: 9, username: 'hari', password: 'om', name: 'HealthLab', email: 'hari@lab.com', phone: '', type: '', speciality: '' },
        { id: 10, username: 'test1', password: '123', name: 'good', email: 'dsah@ff.com', phone: '55656', type: 'Non', speciality: 'General' },
        { id: 11, username: 'test', password: '1234', name: 'good', email: 'dsah@ff.com1', phone: '5565', type: 'Nonop', speciality: 'kjnjl' },
        { id: 12, username: 'new1', password: 'new', name: 'hi', email: 'asv.sf@gf.com', phone: '1213290', type: 'first', speciality: 'bfd' }
    ]));
    localStorage.setItem('clinics', JSON.stringify([
        { id: 2, name: 'clinicone', email: 'clinic@gmail.com', phone: '0', location: 'surat', address: '49,abc', owner: 'abc' },
        { id: 3, name: 'clc2', email: 'clc2@gmail.com', phone: '12369875', location: 'surat', address: '1,xccv,surat', owner: 'clc2' },
        { id: 4, name: 'clc3', email: 'clc3@gmail.com', phone: '98765453', location: 'surat', address: 'xc,hfgghf,surat', owner: 'clc3' },
        { id: 5, name: 'clc4', email: 'clc4@gmail.com', phone: '6587485', location: 'navsari', address: '5,dfg,navasri', owner: 'clc4' },
        { id: 6, name: 'clc5', email: 'clc5@gmail.com', phone: '65788748', location: 'navsari', address: '3,asd,navasari', owner: 'clc5' },
        { id: 7, name: 'clc6', email: 'clc6@gmail.com', phone: '54646878', location: 'surat', address: '6,acas,surat', owner: 'clc6' }
    ]));
    const today = new Date().toISOString().split('T')[0];
    const fut = new Date(); fut.setDate(fut.getDate() + 3);
    const futStr = fut.toISOString().split('T')[0];
    localStorage.setItem('appointments', JSON.stringify([
        { id: 7, date: '2020-04-21', timeslot: '01:20PM-06:40PM', status: 'done', prescription: 'paracitamol', report_need: 'yes', description: 'Feeling Lazy', clientid: 1, doctorid: 2 },
        { id: 8, date: '2020-04-20', timeslot: '10:40AM-12:00PM', status: 'done', prescription: '', report_need: 'yes', description: 'Fever', clientid: 1, doctorid: 2 },
        { id: 9, date: today, timeslot: '10:00AM-11:00AM', status: 'not done', prescription: '', report_need: 'no', description: 'Regular Checkup', clientid: 2, doctorid: 2 },
        { id: 10, date: futStr, timeslot: '11:00AM-12:00PM', status: 'not done', prescription: '', report_need: 'no', description: 'Follow-up', clientid: 1, doctorid: 3 }
    ]));
    localStorage.setItem('reports', JSON.stringify([
        { id: 1, appointmentid: 8, doctorid: 2, clientid: 1, labid: 1, report: 'Complete Blood Count', type: 'blood', date_requested: '2020-04-18', status: 'uploaded', upload_date: '2020-04-23', fee: 780 },
        { id: 2, appointmentid: 9, doctorid: 2, clientid: 2, labid: 10, report: null, type: 'urine', date_requested: today, status: 'pending', upload_date: null, fee: 300 }
    ]));
    localStorage.setItem('nextId', '100');
    localStorage.setItem('seeded', SEED_VERSION);
}

// ── SESSION ───────────────────────────────────────────────────────────────────
let session = { role: null, user: null };

// ── ROUTER ────────────────────────────────────────────────────────────────────
function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const pg = document.getElementById(id);
    if (pg) pg.classList.add('active');
    window.scrollTo(0, 0);
}

// ── HELPERS ───────────────────────────────────────────────────────────────────
const getLS = k => JSON.parse(localStorage.getItem(k) || '[]');
const setLS = (k, v) => localStorage.setItem(k, JSON.stringify(v));
function nextId() { const n = parseInt(localStorage.getItem('nextId') || '100'); localStorage.setItem('nextId', n + 1); return n; }
function today() { return new Date().toISOString().split('T')[0]; }
function fmtDate(d) { if (!d) return '-'; const p = d.split('-'); if (p.length !== 3) return d; const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; return p[2] + ' ' + months[parseInt(p[1], 10) - 1] + ' ' + p[0]; }
function getBadge(s) {
    const m = { done: 'badge-green', 'not done': 'badge-warn', pending: 'badge-warn', uploaded: 'badge-green', cancelled: 'badge-red' };
    return `<span class="badge ${m[s] || 'badge-blue'}">${s || 'N/A'}</span>`;
}
function showErr(id, msg) { const el = document.getElementById(id); if (el) { el.textContent = msg; el.style.display = 'block'; } }
function hideErr(id) { const el = document.getElementById(id); if (el) el.style.display = 'none'; }
function showSuc(id, msg) { const el = document.getElementById(id); if (el) { el.textContent = msg; el.style.display = 'block'; } }

// ── AUTH ──────────────────────────────────────────────────────────────────────
function clientLogin(e) {
    e.preventDefault();
    hideErr('client-login-err');
    const u = document.getElementById('cl-user').value.trim();
    const p = document.getElementById('cl-pass').value;
    const clients = getLS('clients');
    const found = clients.find(c => c.username === u && c.password === p);
    if (!found) { showErr('client-login-err', 'Wrong username or password.'); return; }
    session = { role: 'client', user: found };
    loadClientDash();
    showPage('client-dash');
}
function clientRegister(e) {
    e.preventDefault();
    hideErr('client-reg-err');
    const u = document.getElementById('cr-user').value.trim();
    const p = document.getElementById('cr-pass').value;
    const em = document.getElementById('cr-email').value.trim();
    const clients = getLS('clients');
    if (clients.find(c => c.username === u)) { showErr('client-reg-err', 'Username already taken.'); return; }
    const newC = { id: nextId(), username: u, password: p, email: em, phone: '', blood: '', address: '', dob: '', age: '', allergy: '' };
    clients.push(newC);
    setLS('clients', clients);
    session = { role: 'client', user: newC };
    loadClientDash();
    showPage('client-dash');
}
function doctorLogin(e) {
    e.preventDefault();
    hideErr('doctor-login-err');
    const u = document.getElementById('dl-user').value.trim();
    const p = document.getElementById('dl-pass').value;
    const found = getLS('doctors').find(d => d.username === u && d.password === p);
    if (!found) { showErr('doctor-login-err', 'Wrong username or password.'); return; }
    session = { role: 'doctor', user: found };
    loadDoctorDash();
    showPage('doctor-dash');
}
function doctorRegister(e) {
    e.preventDefault();
    hideErr('doctor-reg-err');
    const u = document.getElementById('dr-user').value.trim();
    const p = document.getElementById('dr-pass').value;
    const em = document.getElementById('dr-email').value.trim();
    const sp = document.getElementById('dr-spec').value.trim();
    const doctors = getLS('doctors');
    if (doctors.find(d => d.username === u)) { showErr('doctor-reg-err', 'Username already taken.'); return; }
    const newD = { id: nextId(), clinicid: null, username: u, password: p, email: em, phone: '', speciality: sp || 'General', rating: null, degree: '', experience: 0, age: 0, fee: 0 };
    doctors.push(newD);
    setLS('doctors', doctors);
    session = { role: 'doctor', user: newD };
    loadDoctorDash();
    showPage('doctor-dash');
}
function labLogin(e) {
    e.preventDefault();
    hideErr('lab-login-err');
    const u = document.getElementById('ll-user').value.trim();
    const p = document.getElementById('ll-pass').value;
    const found = getLS('labs').find(l => l.username === u && l.password === p);
    if (!found) { showErr('lab-login-err', 'Wrong username or password.'); return; }
    session = { role: 'lab', user: found };
    loadLabDash();
    showPage('lab-dash');
}
function labRegister(e) {
    e.preventDefault();
    hideErr('lab-reg-err');
    const u = document.getElementById('lr-user').value.trim();
    const p = document.getElementById('lr-pass').value;
    const em = document.getElementById('lr-email').value.trim();
    const labs = getLS('labs');
    if (labs.find(l => l.username === u)) { showErr('lab-reg-err', 'Username already taken.'); return; }
    const newL = { id: nextId(), username: u, password: p, name: u, email: em, phone: '', type: '', speciality: '' };
    labs.push(newL);
    setLS('labs', labs);
    session = { role: 'lab', user: newL };
    loadLabDash();
    showPage('lab-dash');
}
function logout() { session = { role: null, user: null }; showPage('home'); }

// ── CLIENT DASHBOARD ──────────────────────────────────────────────────────────
function loadClientDash() {
    const u = session.user;
    document.querySelectorAll('.client-nav-name').forEach(el => el.textContent = 'Hey, ' + u.username + '!');
    const appts = getLS('appointments').filter(a => a.clientid === u.id);
    const td = today();
    document.getElementById('c-stat-today').textContent = appts.filter(a => a.date === td).length;
    document.getElementById('c-stat-future').textContent = appts.filter(a => a.date > td).length;
    document.getElementById('c-stat-past').textContent = appts.filter(a => a.date < td).length;
    renderClientAppts();
}
function renderClientAppts() {
    const u = session.user;
    const appts = getLS('appointments').filter(a => a.clientid === u.id);
    const doctors = getLS('doctors');
    const td = today();
    const sections = [
        { key: 'today', label: 'Today', filter: a => a.date === td },
        { key: 'future', label: 'Upcoming', filter: a => a.date > td },
        { key: 'past', label: 'Past', filter: a => a.date < td }
    ];
    sections.forEach(sec => {
        const list = appts.filter(sec.filter).sort((a, b) => b.date.localeCompare(a.date));
        const el = document.getElementById('appt-tab-' + sec.key);
        if (!el) return;
        if (!list.length) { el.innerHTML = '<div class="no-data">No ' + sec.label + ' appointments.</div>'; return; }
        el.innerHTML = '<table><thead><tr><th>Date</th><th>Time</th><th>Doctor</th><th>Description</th><th>Status</th><th>Prescription</th></tr></thead><tbody>' +
            list.map(a => { const doc = doctors.find(d => d.id === a.doctorid); return `<tr><td>${fmtDate(a.date)}</td><td>${a.timeslot || '-'}</td><td>Dr. ${doc ? doc.username : a.doctorid}</td><td>${a.description || '-'}</td><td>${getBadge(a.status)}</td><td>${a.prescription || '-'}</td></tr>` }).join('') +
            '</tbody></table>';
    });
}

// ── BOOKING ───────────────────────────────────────────────────────────────────
let bookState = { clinicid: null, doctorid: null };
function searchClinics(e) {
    e.preventDefault();
    const loc = document.getElementById('book-location').value.trim().toLowerCase();
    const clinics = getLS('clinics').filter(c => c.location.toLowerCase().includes(loc));
    const div = document.getElementById('clinic-results');
    if (!clinics.length) { div.innerHTML = '<div class="no-data">No clinics found for <b>' + loc + '</b>. Try: surat, navsari</div>'; return; }
    div.innerHTML = '<table><thead><tr><th></th><th>Name</th><th>Location</th><th>Address</th><th>Owner</th></tr></thead><tbody>' +
        clinics.map(c => `<tr><td><input type="radio" name="clinic" value="${c.id}" onchange="selectClinic(${c.id})"></td><td>${c.name}</td><td>${c.location}</td><td>${c.address}</td><td>${c.owner}</td></tr>`).join('') +
        '</tbody></table><div class="flex-end mt-2"><button class="btn btn-primary" onclick="goToStep2()">Next: Select Doctor →</button></div>';
}
function selectClinic(id) { bookState.clinicid = id; }
function goToStep2() {
    if (!bookState.clinicid) { alert('Please select a clinic first.'); return; }
    const doctors = getLS('doctors').filter(d => d.clinicid === bookState.clinicid);
    const div = document.getElementById('doctor-results');
    if (!doctors.length) { div.innerHTML = '<div class="no-data">No doctors at this clinic. Please try another clinic.</div>'; }
    else {
        div.innerHTML = '<table><thead><tr><th></th><th>Name</th><th>Speciality</th><th>Degree</th><th>Experience</th><th>Rating</th><th>Fee (₹)</th></tr></thead><tbody>' +
            doctors.map(d => `<tr><td><input type="radio" name="doctor" value="${d.id}" onchange="selectDoctor(${d.id})"></td><td>Dr. ${d.username}</td><td>${d.speciality}</td><td>${d.degree || '-'}</td><td>${d.experience} yrs</td><td>${d.rating || 'N/A'}</td><td>₹${d.fee || 0}</td></tr>`).join('') +
            '</tbody></table>';
    }
    div.innerHTML += '<div class="flex-end mt-2"><button class="btn btn-outline btn-sm" onclick="showBookStep(1)">← Back</button></div>';
    showBookStep(2);
}
function selectDoctor(id) { bookState.doctorid = id; }
function goToStep3() {
    if (!bookState.doctorid) { alert('Please select a doctor first.'); return; }
    const doctors = getLS('doctors');
    const doc = doctors.find(d => d.id === bookState.doctorid);
    document.getElementById('step3-docname').textContent = 'Dr. ' + doc.username + ' (' + doc.speciality + ') — ₹' + doc.fee;
    showBookStep(3);
}
const TIMESLOTS = ['09:00AM-10:00AM', '10:00AM-11:00AM', '11:00AM-12:00PM', '12:00PM-01:00PM', '02:00PM-03:00PM', '03:00PM-04:00PM', '04:00PM-05:00PM'];
function confirmBooking(e) {
    e.preventDefault();
    const date = document.getElementById('book-date').value;
    const slot = document.getElementById('book-slot').value;
    const desc = document.getElementById('book-desc').value.trim();
    if (!date || !slot) { alert('Please fill in all fields.'); return; }
    const appts = getLS('appointments');
    appts.push({ id: nextId(), date, timeslot: slot, status: 'not done', prescription: '', report_need: 'no', description: desc, clientid: session.user.id, doctorid: bookState.doctorid });
    setLS('appointments', appts);
    bookState = { clinicid: null, doctorid: null };
    loadClientDash();
    showClientSection('view-appts');
    switchTab('today', 'appt-tab-');
    alert('✅ Appointment booked successfully!');
}
function showBookStep(n) {
    [1, 2, 3].forEach(i => {
        const s = document.getElementById('book-step-' + i);
        const h = document.getElementById('book-step-header-' + i);
        if (s) s.style.display = i === n ? 'block' : 'none';
        if (h) { h.className = 'step' + (i < n ? ' done' : i === n ? ' current' : ''); }
    });
}
function showClientSection(sec) {
    ['book-appt', 'view-appts', 'update-profile'].forEach(s => {
        const el = document.getElementById('client-sec-' + s);
        if (el) el.style.display = 'none';
    });
    const target = document.getElementById('client-sec-' + sec);
    if (target) target.style.display = 'block';
    document.querySelectorAll('#client-dash .sidebar-item').forEach(el => {
        el.classList.toggle('active', el.dataset.sec === sec);
    });
    if (sec === 'book-appt') { showBookStep(1); document.getElementById('clinic-results').innerHTML = ''; document.getElementById('book-location').value = ''; }
    if (sec === 'view-appts') renderClientAppts();
    if (sec === 'update-profile') loadClientProfile();
}
function loadClientProfile() {
    const u = session.user;
    document.getElementById('up-user').textContent = u.username;
    ['email', 'phone', 'blood', 'address', 'dob', 'age', 'allergy'].forEach(f => {
        const el = document.getElementById('up-' + f); if (el) el.value = u[f] || '';
    });
}
function saveClientProfile(e) {
    e.preventDefault();
    const u = session.user;
    ['email', 'phone', 'blood', 'address', 'dob', 'age', 'allergy'].forEach(f => {
        const el = document.getElementById('up-' + f); if (el) u[f] = el.value;
    });
    const clients = getLS('clients').map(c => c.id === u.id ? u : c);
    setLS('clients', clients);
    session.user = u;
    showSuc('up-success', 'Profile updated successfully!');
    setTimeout(() => hideErr('up-success'), 3000);
}

// ── DOCTOR DASHBOARD ──────────────────────────────────────────────────────────
function loadDoctorDash() {
    const u = session.user;
    document.querySelectorAll('.doctor-nav-name').forEach(el => el.textContent = 'Dr. ' + u.username);
    const appts = getLS('appointments').filter(a => a.doctorid === u.id);
    const td = today();
    document.getElementById('d-stat-today').textContent = appts.filter(a => a.date === td).length;
    document.getElementById('d-stat-total').textContent = appts.length;
    document.getElementById('d-stat-done').textContent = appts.filter(a => a.status === 'done').length;
    showDoctorSection('d-appointments');
}
function renderDoctorAppts() {
    const u = session.user;
    const appts = getLS('appointments').filter(a => a.doctorid === u.id).sort((a, b) => b.date.localeCompare(a.date));
    const clients = getLS('clients');
    const td = today();
    const div = document.getElementById('d-appt-list');
    if (!appts.length) { div.innerHTML = '<div class="no-data">No appointments yet.</div>'; return; }
    div.innerHTML = '<table><thead><tr><th>Date</th><th>Patient</th><th>Time</th><th>Description</th><th>Status</th><th>Action</th></tr></thead><tbody>' +
        appts.map(a => { const cl = clients.find(c => c.id === a.clientid); return `<tr><td>${fmtDate(a.date)}</td><td>${cl ? cl.username : 'ID:' + a.clientid}</td><td>${a.timeslot || '-'}</td><td>${a.description || '-'}</td><td>${getBadge(a.status)}</td><td>${a.date === td ? `<button class="btn btn-success btn-sm" onclick="markDone(${a.id})">Mark Done</button>` : '—'}</td></tr>` }).join('') +
        '</tbody></table>';
}
function markDone(id) {
    const appts = getLS('appointments').map(a => a.id === id ? { ...a, status: 'done' } : a);
    setLS('appointments', appts);
    renderDoctorAppts();
    loadDoctorDash();
}
function showDoctorSection(sec) {
    ['d-appointments', 'd-profile'].forEach(s => {
        const el = document.getElementById('doctor-sec-' + s); if (el) el.style.display = 'none';
    });
    const target = document.getElementById('doctor-sec-' + sec); if (target) target.style.display = 'block';
    document.querySelectorAll('#doctor-dash .sidebar-item').forEach(el => { el.classList.toggle('active', el.dataset.sec === sec); });
    if (sec === 'd-appointments') renderDoctorAppts();
    if (sec === 'd-profile') loadDoctorProfile();
}
function loadDoctorProfile() {
    const u = session.user;
    document.getElementById('dp-username').textContent = 'Dr. ' + u.username;
    ['email', 'phone', 'speciality', 'degree', 'experience', 'age', 'fee'].forEach(f => {
        const el = document.getElementById('dp-' + f); if (el) el.value = u[f] || '';
    });
}
function saveDoctorProfile(e) {
    e.preventDefault();
    const u = session.user;
    ['email', 'phone', 'speciality', 'degree', 'experience', 'age', 'fee'].forEach(f => {
        const el = document.getElementById('dp-' + f); if (el) u[f] = el.value;
    });
    const doctors = getLS('doctors').map(d => d.id === u.id ? u : d);
    setLS('doctors', doctors);
    session.user = u;
    showSuc('dp-success', 'Profile updated!');
    setTimeout(() => hideErr('dp-success'), 3000);
}

// ── LAB DASHBOARD ─────────────────────────────────────────────────────────────
function loadLabDash() {
    const u = session.user;
    document.querySelectorAll('.lab-nav-name').forEach(el => el.textContent = u.name || u.username);
    const reports = getLS('reports').filter(r => r.labid === u.id);
    document.getElementById('l-stat-total').textContent = reports.length;
    document.getElementById('l-stat-pending').textContent = reports.filter(r => r.status === 'pending').length;
    document.getElementById('l-stat-done').textContent = reports.filter(r => r.status === 'uploaded').length;
    renderLabReports();
}
function renderLabReports() {
    const u = session.user;
    const reports = getLS('reports').filter(r => r.labid === u.id);
    const clients = getLS('clients');
    const div = document.getElementById('l-report-list');
    if (!reports.length) { div.innerHTML = '<div class="no-data">No reports assigned to this lab.</div>'; return; }
    div.innerHTML = '<table><thead><tr><th>ID</th><th>Patient</th><th>Type</th><th>Requested</th><th>Status</th><th>Fee</th><th>Action</th></tr></thead><tbody>' +
        reports.map(r => { const cl = clients.find(c => c.id === r.clientid); return `<tr><td>#${r.id}</td><td>${cl ? cl.username : 'ID:' + r.clientid}</td><td>${r.type || '-'}</td><td>${fmtDate(r.date_requested)}</td><td>${getBadge(r.status)}</td><td>${r.fee ? '₹' + r.fee : '-'}</td><td>${r.status === 'pending' ? `<button class="btn btn-success btn-sm" onclick="uploadReport(${r.id})">Mark Uploaded</button>` : '✅ Done'}</td></tr>` }).join('') +
        '</tbody></table>';
}
function uploadReport(id) {
    const reports = getLS('reports').map(r => r.id === id ? { ...r, status: 'uploaded', upload_date: today() } : r);
    setLS('reports', reports);
    loadLabDash();
}

// ── TABS ──────────────────────────────────────────────────────────────────────
function switchTab(key, prefix) {
    document.querySelectorAll('[data-tab]').forEach(t => { t.classList.toggle('active', t.dataset.tab === key); });
    document.querySelectorAll('[id^="' + prefix + '"]').forEach(t => { t.classList.toggle('active', t.id === prefix + key); });
}

// ── INIT ──────────────────────────────────────────────────────────────────────
window.onload = function () {
    seed();
    // populate timeslot options 
    const sl = document.getElementById('book-slot');
    if (sl) TIMESLOTS.forEach(t => { const o = document.createElement('option'); o.value = t; o.textContent = t; sl.appendChild(o); });
    // set min date for booking to today
    const bd = document.getElementById('book-date');
    if (bd) bd.min = today();
    showPage('home');
};
