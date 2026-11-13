// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  })
);

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Quote form: validates, then posts to a form service or falls back to email
const form = document.getElementById('quote-form');
const status = form.querySelector('.form-status');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  let valid = true;
  form.querySelectorAll('[required]').forEach(field => {
    const ok = field.value.trim() !== '';
    field.classList.toggle('invalid', !ok);
    if (!ok) valid = false;
  });
  const email = form.elements.email;
  if (email.value && !email.checkValidity()) {
    email.classList.add('invalid');
    valid = false;
  }
  if (!valid) {
    status.textContent = 'Please fill in the highlighted fields.';
    return;
  }

  const data = new FormData(form);
  const endpoint = form.dataset.endpoint;

  if (endpoint) {
    status.textContent = 'Sending…';
    try {
      const res = await fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error(res.statusText);
      form.reset();
      status.textContent = 'Thanks! We’ll be in touch shortly.';
    } catch {
      status.textContent = 'Sorry, something went wrong. Please call us instead.';
    }
    return;
  }

  // No endpoint set: open the visitor's email app with the details filled in
  const body = [...data.entries()].map(([k, v]) => `${k}: ${v}`).join('\n');
  const subject = encodeURIComponent(`Quote request: ${data.get('service')}`);
  window.location.href = `mailto:${form.dataset.email}?subject=${subject}&body=${encodeURIComponent(body)}`;
  status.textContent = 'Opening your email app…';
});
