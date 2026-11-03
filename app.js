// Plays the "misread total" trace in the FreightLens section when it scrolls into view,
// and again on request. Without JavaScript, or with reduced motion, every step is simply shown.
(function () {
  var fig = document.getElementById('loop');
  if (!fig) return;

  var doc = document.getElementById('doc');
  var steps = Array.prototype.slice.call(fig.querySelectorAll('.trace .step'));
  var btn = document.getElementById('replay');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var timers = [];
  var started = false;

  function clearTimers() {
    timers.forEach(clearTimeout);
    timers = [];
  }

  function showAll() {
    steps.forEach(function (s) { s.classList.add('on'); });
    doc.setAttribute('data-state', 'ok');
  }

  function play() {
    started = true;
    clearTimers();
    steps.forEach(function (s) { s.classList.remove('on'); });
    doc.setAttribute('data-state', 'idle');
    steps.forEach(function (s, i) {
      timers.push(setTimeout(function () {
        s.classList.add('on');
        if (s.classList.contains('bad')) doc.setAttribute('data-state', 'bad');
        if (s.classList.contains('ok')) doc.setAttribute('data-state', 'ok');
      }, 500 + i * 1300));
    });
  }

  fig.classList.add('js');

  if (reduce) {
    showAll();
    if (btn) btn.hidden = true;
    return;
  }

  if (btn) btn.addEventListener('click', play);

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting && !started) {
          play();
          io.disconnect();
        }
      });
    }, { threshold: 0.3 });
    io.observe(fig);
  } else {
    play();
  }
})();
