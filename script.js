var widthPopUp = 1200;
var heightPopUp = 1700;
var widthDocument = 1100;
var heightDocument = 800;
function toTranslate(language){
  if(language == "e"){
    document.getElementById("buttonToTranslateToSpanish").style.display = 'block'
    document.getElementById("buttonToTranslateToEnglish").style.display = 'none'
    document.getElementById("spanishTitle").style.display = 'none';
    document.getElementById("englishTitle").style.display = 'block';
    document.getElementById("explanationSpanish").style.display = 'none';
    document.getElementById("explanationEnglish").style.display = 'flex'
    // document.getElementById("buttonPitchSpanish").style.display = 'none'
    // document.getElementById("buttonPitchEnglish").style.display = 'block'
    document.getElementById("challengesTitleSpanish").style.display = 'none'
    document.getElementById("challengesTitleEnglish").style.display = 'flex'
    document.getElementById("challengesExplanationSpanish").style.display = 'none'
    document.getElementById("challengesExplanationEnglish").style.display = 'flex'
    document.getElementById("registerSpanish").style.display = 'none'
    document.getElementById("registerEnglish").style.display = 'flex'
    document.getElementById("titleOrganizersSpanish").style.display = 'none'
    document.getElementById("titleOrganizersEnglish").style.display = 'flex'
  }
  else{
    document.getElementById("buttonToTranslateToSpanish").style.display = 'none'
    document.getElementById("buttonToTranslateToEnglish").style.display = 'block'
    document.getElementById("spanishTitle").style.display = 'block';
    document.getElementById("englishTitle").style.display = 'none';
    document.getElementById("explanationSpanish").style.display = 'flex';
    document.getElementById("explanationEnglish").style.display = 'none'
    // document.getElementById("buttonPitchSpanish").style.display = 'block'
    // document.getElementById("buttonPitchEnglish").style.display = 'none'
    document.getElementById("challengesTitleSpanish").style.display = 'flex'
    document.getElementById("challengesTitleEnglish").style.display = 'none'
    document.getElementById("challengesExplanationSpanish").style.display = 'flex'
    document.getElementById("challengesExplanationEnglish").style.display = 'none'
    document.getElementById("registerSpanish").style.display = 'flex'
    document.getElementById("registerEnglish").style.display = 'none'
    document.getElementById("titleOrganizersSpanish").style.display = 'flex'
    document.getElementById("titleOrganizersEnglish").style.display = 'none'
  } 
}

function scrollToSectionRegister(){
  const element = document.getElementById("sectionRegister");
  element.scrollIntoView();
}

function moreInfoChallengesSpanish1(){
  Swal.fire({
    html: `<iframe src="https://drive.google.com/file/d/1TqP6cZsZIopKPJ1W_qmEB1rU8JjYbHb3/preview" width="${widthDocument}" height="${heightDocument}" allow="autoplay"></iframe>`,
    width: `${widthPopUp}px`,
    height: `${heightPopUp}px`,
    imageAlt: 'A tall image'
  })
}
function moreInfoChallengesSpanish2(){
  Swal.fire({
    html: `<iframe src="https://drive.google.com/file/d/17Q1AvP0D-5pLbDd1wGXhXstW1_hbK-IA/preview" width="${widthDocument}" height="${heightDocument}" allow="autoplay"></iframe>`,
    width: `${widthPopUp}px`,
    height: `${heightPopUp}px`,
    imageAlt: 'A tall image'
  })
}
function moreInfoChallengesEnglish1(){
  Swal.fire({
    html: `<iframe src="https://drive.google.com/file/d/1AOiT0332bnIvHtTushr3HT6uxBjCx7Cu/preview" width="${widthDocument}" height="${heightDocument}" allow="autoplay"></iframe>`,
    width: `${widthPopUp}px`,
    height: `${heightPopUp}px`,
    imageAlt: 'A tall image'
  })
}
function moreInfoChallengesEnglish2(){
  Swal.fire({
    html: `<iframe src="https://drive.google.com/file/d/1lUF49QQBWi-f4ewyimW-Py_TJRliOTz6/preview" width="${widthDocument}" height="${heightDocument}" allow="autoplay"></iframe>`,
    width: `${widthPopUp}px`,
    height: `${heightPopUp}px`,
    imageAlt: 'A tall image'
  })
}
function checkTheRulesSpanish(){
  Swal.fire({
    html: `<iframe src="https://drive.google.com/file/d/1jZh6WWAKFzbnRjyUPumCsfBMANCXVlqJ/preview" width="${widthDocument}" height="${heightDocument}" allow="autoplay"></iframe>`,
    width: `${widthPopUp}px`,
    height: `${heightPopUp}px`,
    imageAlt: 'A tall image'
  })
}

function checkTheRulesEnglish(){
  Swal.fire({
    html: `<iframe src="https://drive.google.com/file/d/1S9hlV8lvk25_0ERURjUtJl7I7eje6caN/preview" width="${widthDocument}" height="${heightDocument}" allow="autoplay"></iframe>`,
    width: `${widthPopUp}px`,
    height: `${heightPopUp}px`,
    imageAlt: 'A tall image'
  })
}