"use strict";
(
    function () {
        window.addEventListener("load",init);
        function init() {
            
            
        }

       /* function defileImg() {
            console.log(getElementi(".container-defile ul li img")[1].src);
            for (let index = 0; index < 4; index++) {
                getElementi(".container-defile ul li img")[0].src=`../images/${index}.jpg`;
                getElementi(".container-defile ul li img")[1].src=`../images/${index+1}.jpg`;
                if(index==3) index=0;
            }
        }*/

        function getElement(e) {
            return document.querySelector(e);
        }

        function getElementi(e) {
            return document.querySelectorAll(e);
        }
    }
)();