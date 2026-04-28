const languageScreen = document.getElementById("languageScreen")
const currentLang = document.getElementById("currentLang")

function setLanguage(lang){
  document.documentElement.lang = lang
  document.querySelectorAll("[data-ru]").forEach(el=>{
    el.innerHTML = el.dataset[lang]
  })
  localStorage.setItem("kfcPhotoStyleLang", lang)
  currentLang.textContent = lang.toUpperCase()
  languageScreen.classList.add("hide")
}

function openLanguage(){
  languageScreen.classList.remove("hide")
}

const savedLang = localStorage.getItem("kfcPhotoStyleLang")
if(savedLang){
  setLanguage(savedLang)
}

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("active")
    }
  })
},{threshold:.15})

document.querySelectorAll(".reveal").forEach(el=>observer.observe(el))

document.addEventListener("mousemove", e=>{
  if(innerWidth < 900) return
  const img = document.querySelector(".hero-right img")
  if(!img) return
  const x = (e.clientX / innerWidth - .5) * 18
  const y = (e.clientY / innerHeight - .5) * 18
  img.style.transform = `translate(${x*.45}px, ${y*.35}px) rotate(${1 + x*.05}deg)`
})
