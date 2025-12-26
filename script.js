// Simple site JS: year fill, nav toggle, form basic validation
document.addEventListener('DOMContentLoaded',function(){
  const y = new Date().getFullYear();
  const el = document.getElementById('year'); if(el) el.textContent = y;

  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');
  if(toggle && nav){
    toggle.addEventListener('click',()=>{
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('show');
    });
  }

  // Simple contact form handler (if a form exists on page)
  const form = document.querySelector('form.contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = form.querySelector('[name="name"]').value.trim();
      const email = form.querySelector('[name="email"]').value.trim();
      const message = form.querySelector('[name="message"]').value.trim();
      if(!name || !email || !message){
        alert('Please fill all fields.');
        return;
      }
      alert('Thanks '+name+' — message ready to be sent (no backend configured).');
      form.reset();
    });
  }
});
