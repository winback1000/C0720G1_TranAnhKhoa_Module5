interface ISingleRepo {
    name: string;
}
interface IRepos {
    items: Array<ISingleRepo>;
}
//Parse Json
function parseResponse(value: string) {
    try {
        return JSON.parse(value);
    } catch (_) {
        return value;
    }
}

//Khai báo phương thức get data
function httpGet(url: string): Promise<Array<ISingleRepo>> {
    return new Promise(function (resolve, reject) {
        // let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
        const request = new XMLHttpRequest();
        request.open("GET", url);
        request.send();
        request.onload = function () {
            if (this.status === 200) {
                // Success
                resolve(this.response);
            } else {
                // Something went wrong (404 etc.)
                reject(new Error(this.statusText));
            }
        };
        request.onerror = function () {
            reject(new Error("XMLHttpRequest Error: " + this.statusText));
        };
    });
}

httpGet("https://api.github.com/search/repositories?q=angular")
    .then(function (value) {
        document.getElementById("content").innerText = value.toString();
    })
    .catch(function (reason) {
        console.error("Something went wrong", reason);
    });
