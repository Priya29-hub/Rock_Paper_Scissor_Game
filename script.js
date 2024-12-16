let user = prompt("Enter Stone , Paper or Scissor ")
let cpuI=Math.floor(Math.random()*3);
let cpu=["Stone", "Paper", "Scissor"][cpuI]

const match =(cpu, user )=>{
if (cpu === user){
    return "Nobody . Match is Tied"
}
else if(cpu==="Stone" && user==="Paper"){
    return"user"
}
else if(cpu==="Paper" && user==="Stone"){
    return"cpu" 
}
else if (cpu === "Paper" && user==="Scissor"){
    return"user"
}
else if (cpu === "Scissor" && user==="Paper"){
    return"cpu"
}
else if (cpu === "Scissor" && user==="Stone"){
    return"User"
}
else if (cpu === "Stone" && user==="Scissor"){
    return"cpu"
}
else if (cpu === "Stone" && user==="Stone"){
    return"No One wins "
}
else if (cpu === "Scissor" && user==="Scissor"){
    return"No One wins "
}
else if (cpu === "Paper" && user==="Paper"){
    return"No One wins "
}
}
let result = match(cpu, user)
document.write(`cpu :${cpu} <br>  user :${user} <br> The Winner is :${result}`)