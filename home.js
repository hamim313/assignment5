transactionData = []

function manageHearts(id){
    const heartAmount = parseInt(document.getElementById("heart-count").innerText);
    const newHeartAmount = heartAmount + 1;
    document.getElementById("heart-count").innerText = newHeartAmount;
    const heartContainer = document.getElementById(id)
    const div = document.createElement("div");
    div.innerHTML = `
        <img class="h-4.5" src="./assets/heart.png" alt="">
    `
    heartContainer.innerHTML = "";
    heartContainer.appendChild(div);
}

function callFeature(){
    const coinCount = document.getElementById("coin-count").innerText;
    const updatedCoin = coinCount - 20;
    return updatedCoin;
}

function historyUpdate(){
    const historyContainer = document.getElementById("history-container");
    historyContainer.innerHTML = "";
    for(const data of transactionData){
        const div = document.createElement("div");

        div.innerHTML = `
            <div class="h-[75px] bg-gray-200 rounded-md mt-2 mb-2 ml-4 mr-4 p-3 flex items-center justify-between">
                <p class="font-semibold text-md">${data.name} <br> <span class="text-gray-500">${data.number}</span></p>
                <p class="text-gray-600">${data.date}</p>
            </div>
        `
        historyContainer.appendChild(div);
    }
}

function copyManage(id1, id2){

    const copyCount = parseInt(document.getElementById("copy-count").innerText);
    document.getElementById("copy-count").innerText = copyCount + 1;

    const copiedNumber = document.getElementById(id1).innerText;
    navigator.clipboard.writeText(copiedNumber).then(() => {

        const copyBtn = document.getElementById(id2);

        const div = document.createElement("div");

        copyBtn.innerHTML = "";

        div.innerHTML = `
        <div class="flex cursor-pointer justify-center p-2 items-center border-1 border-gray-400 rounded-2xl bg-[#dfe9e1]">
            <i class="fa-solid fa-check"></i>
            <p class="pl-2 font-bold text-gray-500">Copied</p>
        </div>
        `

        copyBtn.appendChild(div);

        setTimeout(() => {
            div.innerHTML = "";
            div.innerHTML = `
            <div class="flex cursor-pointer justify-center p-2 items-center border-1 border-gray-400 rounded-2xl bg-[#dfe9e1]">
                <i class="fa-regular fa-copy"></i>
                <p class="pl-2 font-bold text-gray-500">Copy</p>
            </div>
            `
            copyBtn.appendChild(div);
        }, 3000);

    });

}

document.getElementById("heart-icon-one").addEventListener("click",
    function(){
        manageHearts("heart-container-one");
    }
)

document.getElementById("heart-icon-two").addEventListener("click",
    function(){
        manageHearts("heart-container-two");
    }
)

document.getElementById("heart-icon-three").addEventListener("click",
    function(){
        manageHearts("heart-container-three");
    }
)

document.getElementById("heart-icon-four").addEventListener("click",
    function(){
        manageHearts("heart-container-four");
    }
)

document.getElementById("heart-icon-five").addEventListener("click",
    function(){
        manageHearts("heart-container-five");
    }
)

document.getElementById("heart-icon-six").addEventListener("click",
    function(){
        manageHearts("heart-container-six");
    }
)

document.getElementById("heart-icon-seven").addEventListener("click",
    function(){
        manageHearts("heart-container-seven");
    }
)

document.getElementById("heart-icon-eight").addEventListener("click",
    function(){
        manageHearts("heart-container-eight");
    }
)

document.getElementById("heart-icon-nine").addEventListener("click",
    function(){
        manageHearts("heart-container-nine");
    }
)

document.getElementById("netEmer-call").addEventListener("click",
    function(){
        const coinVal = callFeature();
        if(coinVal < 0){
            alert("You don't have enough coin");
            return;
        }
        else{
            alert("Calling national emergency 999...");
            document.getElementById("coin-count").innerText = coinVal;

            const value = {
                name: "National Emergency Number",
                number: 999,
                date: new Date().toLocaleDateString()
            }

            transactionData.push(value);

            historyUpdate();
        }
        
    }
)

document.getElementById("police-call").addEventListener("click",
    function(){
        const coinVal = callFeature();
        if(coinVal < 0){
            alert("You don't have enough coin");
            return;
        }
        else{
            alert("Calling police 999...");
            document.getElementById("coin-count").innerText = coinVal;

            const value = {
                name: "Police Number",
                number: 999,
                date: new Date().toLocaleDateString()
            }

            transactionData.push(value);

            historyUpdate();
        }
        
    }
)

document.getElementById("FS-call").addEventListener("click",
    function(){
        const coinVal = callFeature();
        if(coinVal < 0){
            alert("You don't have enough coin");
            return;
        }
        else{
            alert("Calling fire service 999...");
            document.getElementById("coin-count").innerText = coinVal;

            const value = {
                name: "Fire Service Number",
                number: 999,
                date: new Date().toLocaleDateString()
            }

            transactionData.push(value);

            historyUpdate();
        }
        
    }
)

document.getElementById("ambu-call").addEventListener("click",
    function(){
        const coinVal = callFeature();
        if(coinVal < 0){
            alert("You don't have enough coin");
            return;
        }
        else{
            alert("Calling ambulance service 1994-999999...");
            document.getElementById("coin-count").innerText = coinVal;

            const value = {
                name: "Ambulance Service Number",
                number: 1994999999,
                date: new Date().toLocaleDateString()
            }

            transactionData.push(value);

            historyUpdate();
        }
        
    }
)

document.getElementById("help-call").addEventListener("click",
    function(){
        const coinVal = callFeature();
        if(coinVal < 0){
            alert("You don't have enough coin");
            return;
        }
        else{
            alert("Calling women & child helpline 109...");
            document.getElementById("coin-count").innerText = coinVal;

            const value = {
                name: "Women & Child Helpline Number",
                number: 109,
                date: new Date().toLocaleDateString()
            }

            transactionData.push(value);

            historyUpdate();
        }
        
    }
)

document.getElementById("govt-call").addEventListener("click",
    function(){
        const coinVal = callFeature();
        if(coinVal < 0){
            alert("You don't have enough coin");
            return;
        }
        else{
            alert("Calling anti-corruption helpline 106...");
            document.getElementById("coin-count").innerText = coinVal;
            const value = {
                name: "Anti-corruption Helpline Number",
                number: 106,
                date: new Date().toLocaleDateString()
            }

            transactionData.push(value);

            historyUpdate();
        }
        
    }
)

document.getElementById("EH-call").addEventListener("click",
    function(){
        const coinVal = callFeature();
        if(coinVal < 0){
            alert("You don't have enough coin");
            return;
        }
        else{
            alert("Calling Electricity helpline 16216...");
            document.getElementById("coin-count").innerText = coinVal;

            const value = {
                name: "Electricity Helpline Number",
                number: 16216,
                date: new Date().toLocaleDateString()
            }

            transactionData.push(value);

            historyUpdate();
        }
        
    }
)

document.getElementById("NGO-call").addEventListener("click",
    function(){
        const coinVal = callFeature();
        if(coinVal < 0){
            alert("You don't have enough coin");
            return;
        }
        else{
            alert("Calling Brac helpline 16445...");
            document.getElementById("coin-count").innerText = coinVal;

            const value = {
                name: "Brac Helpline Number",
                number: 16445,
                date: new Date().toLocaleDateString()
            }

            transactionData.push(value);

            historyUpdate();
        }
        
    }
)

document.getElementById("BR-call").addEventListener("click",
    function(){
        const coinVal = callFeature();
        if(coinVal < 0){
            alert("You don't have enough coin");
            return;
        }
        else{
            alert("Calling Bangladesh Railway helpline 163...");
            document.getElementById("coin-count").innerText = coinVal;

            const value = {
                name: "Bangladesh Railway Number",
                number: 163,
                date: new Date().toLocaleDateString()
            }

            transactionData.push(value);

            historyUpdate();
        }
        
    }
)

document.getElementById("clear-button").addEventListener("click",
    function(){
        document.getElementById("history-container").innerHTML = "";
        transactionData = [];
    }
)

document.getElementById("netEmer-copy").addEventListener("click",
    function(){
        copyManage("callNumber-one", "netEmer-copy");
    }
)

document.getElementById("police-copy").addEventListener("click",
    function(){
        copyManage("callNumber-two", "police-copy");
    }
)

document.getElementById("FS-copy").addEventListener("click",
    function(){
        copyManage("callNumber-three", "FS-copy");
    }
)

document.getElementById("ambu-copy").addEventListener("click",
    function(){
        copyManage("callNumber-four", "ambu-copy");
    }
)

document.getElementById("help-copy").addEventListener("click",
    function(){
        copyManage("callNumber-five", "help-copy");
    }
)

document.getElementById("govt-copy").addEventListener("click",
    function(){
        copyManage("callNumber-six", "govt-copy");
    }
)

document.getElementById("EH-copy").addEventListener("click",
    function(){
        copyManage("callNumber-seven", "EH-copy");
    }
)

document.getElementById("NGO-copy").addEventListener("click",
    function(){
        copyManage("callNumber-eight", "NGO-copy");
    }
)

document.getElementById("BR-copy").addEventListener("click",
    function(){
        copyManage("callNumber-nine", "BR-copy");
    }
)


