/**
 * Created by shigaoxiang on 2018/3/16.
 */
function fetchData(url, params) {
    params = Object.assign({}, params, {
        "head": {
            "cid": "09031039211475087340",
            "ctok": "",
            "cver": "1.0",
            "lang": "01",
            "sid": "8888",
            "syscode": "09",
            "auth": null,
            "extension": [{"name": "networkstatus", "value": "None"}, {"name": "protocal", "value": "http"}]
        },
        "contentType": "json"
    });
    let mypromise = fetch(url, {
        method: 'POST',
        body: JSON.stringify(params)
    }).then(function (response) {
        if (response.status == 200) {
            return response;
        }
    }).then(function (data) {
        return data.text();
    }).then(function (text) {
        return JSON.parse(text);
    }).catch(function (err) {
        console.log("Fetch错误:" + err);
    });
    return mypromise;
}

export  {
    fetchData
}