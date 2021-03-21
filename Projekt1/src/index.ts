class CalculateApp {
    data1Input: HTMLInputElement;
    data2Input: HTMLInputElement;
    data3Input: HTMLInputElement;
    data4Input: HTMLInputElement;

    sumOutput: HTMLInputElement;
    avgOutput: HTMLInputElement;
    minOutput: HTMLInputElement;
    maxOutPut: HTMLInputElement;

    constructor() {
        this.startApp();
    }
    startApp() {
        this.getInputs()
        this.watchInputValues();
    }
    getInputs() {
        this.userInput1 = document.querySelector('#input1');
        this.userInput2 = document.querySelector('#input2');
        this.userInput3 = document.querySelector('#input3');
        this.userInput4 = document.querySelector('#input4');
        this.sumOutput = document.querySelector('#sum');
        this.avgOutput = document.querySelector('#avg');
        this.minOutput = document.querySelector('#min');
        this.maxOutPut = document.querySelector('#max');

        watchInputValues()
        {
            this.userInput1.addEventListener('input', () => this.computeData());
            this.userInput2.addEventListener('input', () => this.computeData());
            this.userInput3.addEventListener('input', () => this.computeData());
            this.userInput4.addEventListener('input', () => this.computeData());
        }

        computeData()
        {
            const value1 = +this.userInput1.value;
            const value2 = +this.userInput2.value;
            const value3 = +this.userInput3.value;
            const value4 = +this.userInput4.value;

            const sum = value1 + value2 + value3 + value4;
            const avg = sum / 4;
            const min = Math.min(value1, value2, value3, value4);
            const max = Math.max(value1, value2, value3, value4);

            this.showValues(sum, avg, min, max);

        }
        showValues(sum: number, avg: number, min: number, max: number) {

            this.sumOutput.value = sum.toString();
            this.avgOutput.value = avg.toString();
            this.minOutput.value = min.toString();
            this.maxOutPut.value = max.toString();
        }

        const CalculateApp = new CalculateApp();
