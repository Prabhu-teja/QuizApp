document.querySelector("#startTab").addEventListener("click",()=>{
    document.getElementsByClassName("questionTab")[0].classList.remove("hide");
    document.getElementById("startTab").classList.add("hide");
    updateQA(document.getElementsByClassName("questionTab")[0].id);
});
document.querySelector("#startAgain").addEventListener("click",()=>{
    window.location.reload();
})
questions=["What is 2+0?","What is 2+1?","What is 2+2?","What is 2+3?","What is 2+4?"];
options=[["6","2","4","5"],["3","8","5","6"],["9","5","6","4"],["3","6","5","8"],["10","8","9","6"]]
correctOpt=[1,0,3,2,3];
function updateQA(qId){
    document.getElementById("qNo").innerText=`Question ${qId} of ${questions.length}`;
    qId-=1;
    document.getElementById("question").innerText=questions[qId];
    for(let i=1;i<=4;i++){
        let optId=document.getElementsByClassName(`opt${i}`)[0];
        optId.innerText=`${i}. ${options[qId][optId.id-1]}`;
    }
}
setInterval(updateNextButton);
function updateNextButton(){
    if(parseInt(document.getElementsByClassName("questionTab")[0].id)>=5){
        document.getElementById("next").innerText="Finish";
    }
}
document.querySelector("#next").addEventListener("click",()=>{
    if(document.querySelector("#next").innerText==="Finish"){
        document.getElementsByClassName("questionTab")[0].classList.add("hide");
        document.getElementById("startTab").classList.add("hide");
        document.getElementById("resultTab").classList.remove("hide");
        document.getElementById("finalScore").innerText=document.getElementById("score").innerText;
    }
    let qId=document.getElementsByClassName("questionTab")[0];
    qId.id=parseInt(qId.id)+1;
    if(parseInt(qId.id)<=5){
        updateQA(qId.id);
    }
    else{
        document.getElementById("next").innerText="Finish";
    }
    let progress=document.getElementsByClassName("progress-bar")[0];
    progress.style.width=parseInt(progress.style.width)+(100/questions.length)+"%";
    if(parseInt(progress.style.width)>100){
        progress.style.width="100%";
    }

})
let optionsTag=document.getElementById("options");
for(let i=1;i<=4;i++){
    optionsTag.getElementsByClassName(`opt${i}`)[0].addEventListener("click",()=>{
        let qId=document.getElementsByClassName("questionTab")[0];
        let temp=document.getElementById("options");
        if((i-1)==correctOpt[qId.id-1]){
            document.getElementById("score").innerText=parseInt(document.getElementById("score").innerText)+20;
        }
        document.getElementById("next").click();
    })
}