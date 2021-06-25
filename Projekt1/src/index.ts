class StatsApp{

    numberOfInputs:HTMLInputElement;
    inputsContainer: HTMLElement;
    dataArray: HTMLInputElement[]=[];
    number: number=0;
    dataSumInput:HTMLInputElement;
    dataAvgInput:HTMLInputElement;
    dataMinInput:HTMLInputElement;
    dataMaxInput:HTMLInputElement;

    constructor(){
        this.startApp();
    }

    startApp(){
        this.numberOfInputs = document.querySelector("#numberOfInputs");
        this.number = +this.numberOfInputs.value;
        this.getInput();
        this.watchInputValues();
    }

    createInput() {
        this.inputsContainer = document.getElementById("inputsContainer");
        const number = +this.numberOfInputs.value;

        while(this.inputsContainer?.hasChildNodes()){
                this.inputsContainer?.removeChild(this.inputsContainer?.lastChild);
                this.dataArray=[];
              }

        for (let i = 0; i < number; i++) {
            const newInputLabel = document.createElement("label");
            newInputLabel.innerHTML = "Value: ";
            newInputLabel.setAttribute("class", "data" + (i + 1));
            this.inputsContainer?.appendChild(newInputLabel);

            const newInput = document.createElement("input");
             newInput.setAttribute("type", "text");
            newInput.setAttribute("class", "data" + (i + 1));
            newInput.setAttribute("id","input"+(i+1));
            this.inputsContainer?.appendChild(newInput);

            const removeInputButton = document.createElement("button");
            removeInputButton.textContent = "Remove";
            removeInputButton.className = "data" + (i + 1);
            this.inputsContainer?.appendChild(removeInputButton);

            removeInputButton.addEventListener('click', (ev:Event)=> {












































































