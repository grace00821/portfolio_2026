(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const c=[{id:1,title:"Machine learning based prognosis prediction of intracerebral hemorrhage outcome",institution:"The University of Hong Kong",description:"Developing ML models to predict clinical outcomes for ICH patients.",tags:["Machine Learning","Electronic Medical Data","Python"],link:"https://github.com/yourprofile/ich-project"},{id:2,title:"Automated cell counting pipeline for Danio rerio blood smear",institution:"Laboratory of Data Discovery for Health",description:"Researching the application of Artificial Intelligence in medical workflows.",tags:["YOLO","Image processing","End-to-end pipeline"],link:"#"},{id:3,title:"Binary heart sound CNN classifier",institution:"The University of Hong Kong",description:"Researching the application of Artificial Intelligence in medical workflows.",tags:["CNN","Audio Processing","R/R studio"],link:"https://github.com/grace00821/Heatmap-Classifier-CNN"}],a=i=>`
        <div class="card">
            <span class="institution">${i.institution}</span>
            <h3>${i.title}</h3>
            <p>${i.description}</p>
            <div class="tags">
                ${i.tags.map(o=>`<span class="tag">${o}</span>`).join("")}
            </div>
            <a href="${i.link}" class="btn">View Details</a>
        </div>
    `,l=()=>{const i=document.querySelector("#project-grid");i.innerHTML=c.map(o=>a(o)).join("")};document.addEventListener("DOMContentLoaded",l);
