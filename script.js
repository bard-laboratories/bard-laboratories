
// simple loader that injects JSON content if present
(async function(){
  try{
    const res = await fetch('content.json', {cache:'no-store'});
    if(!res.ok) return;
    const data = await res.json();
    const titleEl = document.querySelector('[data-bind="siteTitle"]');
    const tagEl = document.querySelector('[data-bind="tagline"]');
    const heroTitle = document.querySelector('[data-bind="hero.title"]');
    const heroBody = document.querySelector('[data-bind="hero.body"]');
    const cta = document.querySelector('[data-bind="hero.cta"]');
    if(titleEl) titleEl.textContent = data.siteTitle || titleEl.textContent;
    if(tagEl) tagEl.textContent = data.tagline || tagEl.textContent;
    if(heroTitle) heroTitle.textContent = data.hero?.title || heroTitle.textContent;
    if(heroBody) heroBody.textContent = data.hero?.body || heroBody.textContent;
    if(cta){ cta.textContent = data.hero?.ctaText || cta.textContent; if(data.hero?.ctaHref) cta.setAttribute('href', data.hero.ctaHref); }
  }catch(e){ /* ignore */ }
})();
