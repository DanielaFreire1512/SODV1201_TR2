const body=document.getElementsByTagName("body")[0]

const h1=document.createElement("h1")
h1.textContent="Daniela Souza Freire"

h1.style.textAlign="center"
h1.style.color="gray"
body.append(h1)

const input1=document.createElement("input")
const input2=document.createElement("input")
input1.placeholder="Number 1"
input2.placeholder="Number 2"

body.append(input1, input2)

const button=document.createElement("button")
button.textContent="Press Here"

const answer=document.createElement("h3")

const validate = (input) => {

    if (isNaN(Number(input.value))) {
        input.style.borderColor="red"
        throw("Error: Only Numbers are Accepted")
    }
    else {
        input.style.borderColor="black"
        return Number(input.value)
    }
}


button.onclick=function(){

   try {
       const number1=validate(input1)
       const number2=validate(input2)
       const result= number1+number2
       
       answer.textContent="The result is " + result + "!"
      
   } catch (error) {
    console.log(error)
    answer.textContent="Error: Only Number are Accepted"
   }

   body.append(answer)
   
}

body.append(button)

body.style.backgroundColor="pink"
button.style.backgroundColor="Orange"
input1.style.backgroundColor="Gray"
input2.style.backgroundColor="purple"
input1.style.color="black"














