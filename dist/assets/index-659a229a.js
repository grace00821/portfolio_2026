(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(e){if(e.ep)return;e.ep=!0;const i=n(e);fetch(e.href,i)}})();const a=t=>`
        <a href="${t.link}" class="nav-cta">${t.text}}</a>
    `,c=[{id:1,title:"Machine learning based prognosis prediction of intracerebral hemorrhage outcome",institution:"The University of Hong Kong",description:"Developing ML models to predict clinical outcomes for ICH patients.",tags:["Machine Learning","Electronic Medical Data","Python"],link:"https://github.com/yourprofile/ich-project"},{id:2,title:"Automated cell counting pipeline for Danio rerio blood smear",institution:"Laboratory of Data Discovery for Health",description:"Researching the application of Artificial Intelligence in medical workflows.",tags:["YOLO","Image processing","End-to-end pipeline"],link:"#"},{id:3,title:"Binary heart sound CNN classifier",institution:"The University of Hong Kong",description:"Researching the application of Artificial Intelligence in medical workflows.",tags:["CNN","Audio Processing","R/R studio"],link:"https://github.com/grace00821/Heatmap-Classifier-CNN"}],l=t=>`
        <div class="card">
            <span class="institution">${t.institution}</span>
            <h3>${t.title}</h3>
            <p>${t.description}</p>
            <div class="tags">
                ${t.tags.map(o=>`<span class="tag">${o}</span>`).join("")}
            </div>
            <a href="${t.link}" class="btn">View Details</a>
        </div>
    `,d=()=>{const t=document.querySelector("#navigation"),o=document.querySelector("#project-grid");t.innerHTML=navigations.map(n=>a(n)).join(""),o.innerHTML=c.map(n=>l(n)).join("")};document.addEventListener("DOMContentLoaded",d);
