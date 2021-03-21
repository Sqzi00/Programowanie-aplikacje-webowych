var CalculateApp = /** @class */ (function () {
    function CalculateApp() {
        this.startApp();
    }
    CalculateApp.prototype.startApp = function () {
        this.getInputs();
        this.watchInputValues();
    };
    CalculateApp.prototype.getInputs = function () {
        var _this = this;
        this.userInput1 = document.querySelector('#input1');
        this.userInput2 = document.querySelector('#input2');
        this.userInput3 = document.querySelector('#input3');
        this.userInput4 = document.querySelector('#input4');
        this.sumOutput = document.querySelector('#sum');
        this.avgOutput = document.querySelector('#avg');
        this.minOutput = document.querySelector('#min');
        this.maxOutPut = document.querySelector('#max');
        watchInputValues();
        {
            this.userInput1.addEventListener('input', function () { return _this.computeData(); });
            this.userInput2.addEventListener('input', function () { return _this.computeData(); });
            this.userInput3.addEventListener('input', function () { return _this.computeData(); });
            this.userInput4.addEventListener('input', function () { return _this.computeData(); });
        }
        computeData();
        {
            var value1 = +this.userInput1.value;
            var value2 = +this.userInput2.value;
            var value3 = +this.userInput3.value;
            var value4 = +this.userInput4.value;
            var sum = value1 + value2 + value3 + value4;
            var avg = sum / 4;
            var min = Math.min(value1, value2, value3, value4);
            var max = Math.max(value1, value2, value3, value4);
            this.showValues(sum, avg, min, max);
        }
        showValues(sum, number, avg, number, min, number, max, number);
        {
            this.sumOutput.value = sum.toString();
            this.avgOutput.value = avg.toString();
            this.minOutput.value = min.toString();
            this.maxOutPut.value = max.toString();
        }
        var CalculateApp = new CalculateApp();
    };
    return CalculateApp;
}());
