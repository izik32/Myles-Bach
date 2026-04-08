/* ============================================
   Shared JS — Bokeh particles, nav active state
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Inject bokeh container if not present
  if (!document.querySelector('.bokeh-container')) {
    const bokeh = document.createElement('div');
    bokeh.className = 'bokeh-container';
    bokeh.innerHTML = `
      <div class="bokeh-orb"></div>
      <div class="bokeh-orb"></div>
      <div class="bokeh-orb"></div>
      <div class="bokeh-orb"></div>
    `;
    document.body.prepend(bokeh);
  }
});
