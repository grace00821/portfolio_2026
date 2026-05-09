(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:1,title:`Intracerebral Hemorrhage Outcome Prediction`,institution:`Data Discovery for Health (D24H)`,description:`Developing ML models to predict clinical outcomes for ICH patients.`,tags:[`Machine Learning`,`Healthcare`,`Python`],link:`https://github.com/yourprofile/ich-project`},{id:2,title:`MPhil Thesis: AI in Medicine`,institution:`HKU`,description:`Researching the application of Artificial Intelligence in medical workflows.`,tags:[`AI`,`Biomedical Science`,`Research`],link:`#`}],t=e=>`
        <div class="card">
            <span class="institution">${e.institution}</span>
            <h3>${e.title}</h3>
            <p>${e.description}</p>
            <div class="tags">
                ${e.tags.map(e=>`<span class="tag">${e}</span>`).join(``)}
            </div>
            <a href="${e.link}" class="btn">View Details</a>
        </div>
    `;document.addEventListener(`DOMContentLoaded`,()=>{let n=document.querySelector(`#project-grid`);n.innerHTML=e.map(e=>t(e)).join(``)});