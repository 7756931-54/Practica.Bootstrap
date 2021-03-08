function sendMail(params){
    var tempParams = {
        from_name: document.getElementById("name").value,
        to_name: document.getElementById("fromName").value,
        message: document.getElementById("msg").value,
    };
    emailjs.send('service_75m0fsl','template_ifdchnj',tempParams)
    .then(function(res){
        console.log("success",res.status);
    })
}