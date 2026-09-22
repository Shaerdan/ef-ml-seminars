/* Renders index.html from seminars.js + topics.js. No build step. */
(function () {
  'use strict';

  var S = window.SERIES || {};
  var seminars = (window.SEMINARS || []).slice();
  var topics = (window.TOPICS || []).slice();

  // ---------- helpers ----------
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function el(id) { return document.getElementById(id); }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function paras(text) {
    if (!text) return '';
    return String(text).split(/\n\s*\n/).map(function (p) {
      return '<p>' + esc(p.trim()) + '</p>';
    }).join('');
  }
  function parseDate(d) { return d ? new Date(d + 'T00:00:00') : null; }
  function fmtDate(d) {
    if (!d) return 'Date TBC';
    return parseDate(d).toLocaleDateString('en-GB',
      { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  }

  var today = new Date(); today.setHours(0, 0, 0, 0);
  function isPast(s) { var d = parseDate(s.date); return !!d && d < today; }

  var past = seminars.filter(isPast).sort(function (a, b) { return b.date.localeCompare(a.date); });
  var upcoming = seminars.filter(function (s) { return !isPast(s); }).sort(function (a, b) {
    if (a.date && b.date) return a.date.localeCompare(b.date);
    if (a.date) return -1;
    if (b.date) return 1;
    return 0;
  });

  // ---------- calendar (.ics) ----------
  function icsEsc(s) {
    return String(s == null ? '' : s)
      .replace(/\\/g, '\\\\')
      .replace(/;/g, '\\;')
      .replace(/,/g, '\\,')
      .replace(/\r?\n/g, '\\n');
  }
  function icsHref(s) {
    var m = String(s.time || '').match(/(\d{1,2})[:.](\d{2})/);
    if (!s.date || !m) return null;
    var p = s.date.split('-');
    var start = new Date(+p[0], +p[1] - 1, +p[2], +m[1], +m[2]);
    var end = new Date(start.getTime() + (s.duration_min || 60) * 60000);
    function f(dt) {
      return dt.getFullYear() + pad(dt.getMonth() + 1) + pad(dt.getDate()) + 'T' +
        pad(dt.getHours()) + pad(dt.getMinutes()) + '00';
    }
    var now = new Date();
    var stamp = now.getUTCFullYear() + pad(now.getUTCMonth() + 1) + pad(now.getUTCDate()) + 'T' +
      pad(now.getUTCHours()) + pad(now.getUTCMinutes()) + pad(now.getUTCSeconds()) + 'Z';
    var where = [s.location, s.online].filter(Boolean).join(' - ');
    var url = location.origin + location.pathname + '#' + s.id;
    var lines = [
      'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//EF ML Seminars//EN', 'BEGIN:VEVENT',
      'UID:' + s.id + '@ef-ml-seminars',
      'DTSTAMP:' + stamp,
      'DTSTART;TZID=Europe/London:' + f(start),
      'DTEND;TZID=Europe/London:' + f(end),
      'SUMMARY:' + icsEsc((S.short || 'Seminar') + ': ' + s.speaker + ' - ' + s.title),
      'LOCATION:' + icsEsc(where),
      'DESCRIPTION:' + icsEsc((s.abstract || '') + '\n\n' + url),
      'URL:' + icsEsc(url),
      'END:VEVENT', 'END:VCALENDAR'
    ];
    return 'data:text/calendar;charset=utf-8,' + encodeURIComponent(lines.join('\r\n'));
  }

  // ---------- seminar card ----------
  function card(s, open) {
    var when = [fmtDate(s.date), s.time].filter(Boolean).join(', ');
    var where = [
      s.location ? esc(s.location) : (isPast(s) ? null : 'Venue TBC'),
      s.online ? '<a href="' + esc(s.online) + '">join online</a>' : null
    ].filter(Boolean).join(' · ');
    var tags = (s.tags || []).map(function (t) {
      return '<span class="tag">' + esc(t) + '</span>';
    }).join('');
    var links = [];
    if (s.slides) links.push('<a href="' + esc(s.slides) + '">Slides</a>');
    if (s.recording) links.push('<a href="' + esc(s.recording) + '">Recording</a>');
    var ics = icsHref(s);
    if (ics) links.push('<a href="' + ics + '" download="' + esc(s.id) + '.ics">Add to calendar</a>');
    links.push('<a href="#' + esc(s.id) + '" class="permalink" title="Link to this seminar">Permalink</a>');
    var speaker = s.speaker_url
      ? '<a href="' + esc(s.speaker_url) + '">' + esc(s.speaker) + '</a>'
      : esc(s.speaker);
    var bio = s.bio ? '<h4>About the speaker</h4>' + paras(s.bio) : '';

    return '<article class="card" id="' + esc(s.id) + '">' +
      '<p class="when">' + esc(when) + (where ? ' · ' + where : '') + '</p>' +
      '<h3>' + esc(s.title) + '</h3>' +
      '<p class="speaker">' + speaker +
        (s.affiliation ? '<br><span class="affil">' + esc(s.affiliation) + '</span>' : '') +
      '</p>' +
      (s.note ? '<p class="muted note">' + esc(s.note) + '</p>' : '') +
      (tags ? '<div class="tags">' + tags + '</div>' : '') +
      (s.abstract
        ? '<details' + (open ? ' open' : '') + '><summary>Abstract</summary>' +
          paras(s.abstract) + bio + '</details>'
        : '') +
      '<p class="links">' + links.join(' · ') + '</p>' +
      '</article>';
  }

  // ---------- header / footer ----------
  document.title = (S.title || 'Seminar series') + ' — Seminar series';
  el('kicker').textContent = S.kicker || '';
  el('site-title').textContent = S.title || '';
  el('site-blurb').textContent = S.blurb || '';
  el('site-cadence').textContent = S.cadence || '';

  var repo = (S.repo || '').replace(/\/$/, '');
  el('topic-issue-link').href = repo + '/issues/new?template=topic.yml';
  el('topic-issue-link-2').href = repo + '/issues/new?template=topic.yml';
  el('speaker-issue-link').href = repo + '/issues/new?template=speaker.yml';
  el('edit-link').href = repo + '/edit/main/seminars.js';
  el('source-link').href = repo;
  if (S.organisers) {
    el('organisers').textContent = S.organisers;
    el('organisers-li').hidden = false;
  }
  if (S.contact && S.contact.email) {
    el('contact').innerHTML = '<a href="mailto:' + esc(S.contact.email) + '">' +
      esc(S.contact.name || S.contact.email) + '</a>';
  } else {
    el('contact').textContent = (S.contact && S.contact.name) || 'the organisers';
  }

  // ---------- sections ----------
  el('next-card').innerHTML = upcoming.length
    ? card(upcoming[0], true)
    : '<p class="muted">No seminar scheduled yet — <a href="' + repo +
      '/issues/new?template=speaker.yml">suggest a speaker</a>.</p>';

  el('upcoming-list').innerHTML = upcoming.length > 1
    ? upcoming.slice(1).map(function (s) { return card(s, false); }).join('')
    : '<p class="muted">More to be announced.</p>';

  el('past-list').innerHTML = past.length
    ? past.map(function (s) { return card(s, false); }).join('')
    : '<p class="muted">None yet — this is the first season.</p>';

  el('topics-list').innerHTML = topics.map(function (t) {
    var status = t.status || 'wanted';
    return '<li class="topic">' +
      '<span class="status status-' + esc(status) + '">' + esc(status) + '</span> ' +
      '<strong>' + esc(t.topic) + '</strong>' +
      (t.why ? '<br><span class="muted">' + esc(t.why) + '</span>' : '') +
      (t.proposed_by ? ' <span class="muted">— proposed by ' + esc(t.proposed_by) + '</span>' : '') +
      (t.seminar ? ' <a href="#' + esc(t.seminar) + '">see seminar</a>' : '') +
      (t.issue ? ' <a href="' + esc(t.issue) + '">discussion</a>' : '') +
      '</li>';
  }).join('') || '<li class="muted">Nothing listed yet.</li>';

  // ---------- permalinks: open the abstract of a linked seminar ----------
  function revealHash() {
    var id = decodeURIComponent(location.hash.slice(1));
    if (!id) return;
    var target = el(id);
    if (!target || !target.classList.contains('card')) return;
    var d = target.querySelector('details');
    if (d) d.open = true;
    target.scrollIntoView({ block: 'start' });
  }
  window.addEventListener('hashchange', revealHash);
  revealHash();
})();
