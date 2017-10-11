var getJSON = function (url) {
    var promise = new Promise(function (resolve, reject) {
        function handler() {
            if (this.readyState != 4) {
                return;
            }
            if (this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        }

        function GetXmlHttpObject() {
            var objXMLHttp = null;
            if (window.XMLHttpRequest) {
                objXMLHttp = new XMLHttpRequest();
            }
            else if (window.ActiveXObject) {
                objXMLHttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            return objXMLHttp;
        };
        console.log("1∂")
        var client = GetXmlHttpObject();
        console.log("2∂")
        client.open("GET", url);
        client.onreadystatechange = handler;
        client.responseType = "json";
        client.setRequestHeader("Accept", "application/json");
        client.send();
    });
    return promise;
};

getJSON("/posts.json").then(function (json) {
    console.log("Contents: " + json);
}).catch(function (err) {
    console.error("出错了：" + err);
});