class Ajax {
    constructor(){
        this.url = {
            task_list:'http://106.14.155.124/api/getOrderList',
            getBuyerList:'http://106.14.155.124/api/getBuyerList',
            orderReceiving:'http://106.14.155.124/api/orderReceiving',
            login:'http://106.14.155.124/api/login',
            register:'http://106.14.155.124/api/register',
        }
    }

    Post(url,data) {
        var requestOptional = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        };
        return new Promise((res,rej)=>{
            fetch(url, requestOptional)
                .then(response=>{
                    return response.json()
                })
                .then((data) => {
                    res(data);
                })
                .catch((error) => {
                    console.log(error)
                })
        })
    }
}

export default new Ajax();