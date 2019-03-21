import $ from 'jquery'

export class ApiCall(){
  newDataCall(user){
    let promise = new Promise(function(resolve,reject){
      let request = nee XMLHttpRequest();
      let url = //url
      request.onload = function(){
        if (this.status == 200){
          resolve(request.response)
        } else{
          reject(Error(request.statutText));
        }
      }
      request.open("GET", url, true);
      request.send();
    })
  }
}
