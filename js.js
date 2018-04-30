
	var accItem = document.getElementsByClassName('accordionItem');
	var accHDb = document.getElementsByClassName('accordionItemHeading-black');
    var accHD = document.getElementsByClassName('accordionItemHeading');
   // вешаем циклом обработчик событий на заголовки
   // светлые
    for (i = 0; i < accHD.length; i++) {
        accHD[i].addEventListener('click', toggleItem,false);
       
    }
    // черные
   	for (i = 0; i < accHDb.length; i++) {
        accHDb[i].addEventListener('click', toggleItem,false);
       
    }
    function toggleItem() {
        var itemClass = this.parentNode.className;
        for (i = 0; i < accItem.length; i++) {
            accItem[i].className = 'accordionItem close';
           
        }
        if (itemClass == 'accordionItem close') {
            this.parentNode.className = 'accordionItem open'; 
        }
    }
  
    