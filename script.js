(function(){
  const body = document.body;
  const toggle = document.getElementById('theme-toggle');
  const stored = localStorage.getItem('site-theme');
  if(stored === 'light') body.classList.add('light');

  function updateToggle(){
    toggle.textContent = body.classList.contains('light') ? '🌞' : '🌙';
  }
  updateToggle();

  toggle.addEventListener('click', ()=>{
    body.classList.toggle('light');
    const theme = body.classList.contains('light') ? 'light' : 'dark';
    localStorage.setItem('site-theme',theme);
    updateToggle();
  });

  // Simple form behavior (no backend)
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const btn = form.querySelector('.btn-send');
    btn.disabled = true;
    const original = btn.textContent;
    btn.textContent = 'Sending...';
    status.textContent = '';

    // Simulate async send
    setTimeout(()=>{
      btn.textContent = 'Sent ✓';
      status.textContent = "Thanks — I'll get back to you soon.";
      form.reset();
      setTimeout(()=>{
        btn.disabled = false;
        btn.textContent = original;
        status.textContent = '';
      },3000);
    },1200);
  });
})();
