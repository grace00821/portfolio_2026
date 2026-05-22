(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const c=[{id:1,title:"Intracerebral Hemorrhage Outcome Prediction",institution:"Data Discovery for Health (D24H)",description:"Developing ML models to predict clinical outcomes for ICH patients.",tags:["Machine Learning","Healthcare","Python"],link:"https://github.com/yourprofile/ich-project"},{id:2,title:"MPhil Thesis: AI in Medicine",institution:"The University of Hong Kong",description:"Researching the application of Artificial Intelligence in medical workflows.",tags:["AI","Biomedical Science","Research"],link:"#"}],a=i=>`
        <div class="card">
            <span class="institution">${i.institution}</span>
            <h3>${i.title}</h3>
            <p>${i.description}</p>
            <div class="tags">
                ${i.tags.map(r=>`<span class="tag">${r}</span>`).join("")}
            </div>
            <a href="${i.link}" class="btn">View Details</a>
        </div>
    `,l=()=>{const i=document.querySelector("#project-grid");i.innerHTML=c.map(r=>a(r)).join("")};document.addEventListener("DOMContentLoaded",l);
