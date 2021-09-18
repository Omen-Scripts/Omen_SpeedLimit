$(function(){
    window.onload = (e) => {
        window.addEventListener("message", (event) => {
            var item = event.data;
            if(item !== undefined && item.type == "ui") {
                if (item.display === true) {
                    $('#container').show();
                    document.getElementById('speed').innerHTML = event.data.speed;
                } else {
                    $('#container').hide();
                }
            }
        });
    };
});
