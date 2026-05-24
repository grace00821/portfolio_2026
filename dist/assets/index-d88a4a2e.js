(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();const c=[{id:1,title:"Machine learning based prognosis prediction of intracerebral hemorrhage outcome",institution:"The University of Hong Kong",description:"Developing ML models to predict clinical outcomes for ICH patients.",tags:["Machine Learning","Electronic Medical Data","Python"],link:"https://github.com/yourprofile/ich-project"},{id:2,title:"Automated cell counting pipeline for Danio rerio blood smear",institution:"Laboratory of Data Discovery for Health",description:"Researching the application of Artificial Intelligence in medical workflows.",tags:["YOLO","Image processing","End-to-end pipeline"],link:"#"},{id:3,title:"Binary heart sound CNN classifier",institution:"The University of Hong Kong",description:"Researching the application of Artificial Intelligence in medical workflows.",tags:["CNN","Audio Processing","R/R studio"],link:"#"}],a=t=>`
        <div class="card">
            <span class="institution">${t.institution}</span>
            <h3>${t.title}</h3>
            <p>${t.description}</p>
            <div class="tags">
                ${t.tags.map(o=>`<span class="tag">${o}</span>`).join("")}
            </div>
            <a href="${t.link}" class="btn">View Details</a>
        </div>
    `,l=()=>{const t=document.querySelector("#project-grid");t.innerHTML=c.map(o=>a(o)).join("")};document.addEventListener("DOMContentLoaded",l);
