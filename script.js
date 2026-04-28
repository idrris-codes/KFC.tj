const languageScreen = document.getElementById("languageScreen")
const currentLang = document.getElementById("currentLang")

function setLanguage(lang){
  document.documentElement.lang = lang

  document.querySelectorAll("[data-ru]").forEach(el=>{
    el.innerHTML = el.dataset[lang]
  })

  localStorage.setItem("kfcFinalReadyLang", lang)
  currentLang.textContent = lang.toUpperCase()
  languageScreen.classList.add("hide")
}

function openLanguage(){
  languageScreen.classList.remove("hide")
}

const savedLang = localStorage.getItem("kfcFinalReadyLang")

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

  const photo = document.querySelector(".hero-photo")

  if(!photo) return

  const x = (e.clientX / innerWidth - .5) * 10
  const y = (e.clientY / innerHeight - .5) * 10

  photo.style.transform = `translate(${x * .35}px, ${y * .25}px)`
})
