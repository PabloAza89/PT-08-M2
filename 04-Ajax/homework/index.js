$('#boton').click(function(){
    let getFriends = document.getElementById('lista');
    getFriends.innerHTML = "";
    $.get('http://localhost:5000/amigos/', function(data){
        let getFriends = document.getElementById('lista');
        for (let i = 0 ; i < data.length ; i++) {
            getFriends.innerHTML += `<li>${data[i].name} (ID: ${data[i].id})</li>`
        }
    });
});

$('#search').click(function(){ 
    let toSearch = document.getElementById('input').value
    let showFriend = document.getElementById('amigo')
    let friendList = document.getElementById('lista').childNodes;
    showFriend.innerHTML = "  " + friendList[--toSearch].innerHTML.split(' ')[0]
});

$('#delete').click(function(){
    let array = [];
    var arr = [];
    let toSearch = document.getElementById('inputDelete').value
   
    $.get('http://localhost:5000/amigos/', function(data){
        arr = [JSON.stringify(data[i])]
        
        // for (let i = 0 ; i < data.length ; i++) {
        //     array.push(data[i])
        // }
    });
    $.ajax("http://localhost:5000/amigos/" + toSearch++, {type:'DELETE'});
    let showMessage = document.getElementById('success');
    //showMessage.innerHTML = "  " + $.get('http://localhost:5000/amigos/3').name;
    //showMessage.innerHTML = "  " + `Amigo eliminado con éxito`;
    console.log(arr)
    showMessage.innerHTML = arr
});
