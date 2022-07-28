const img1 = document.getElementById("img1")
const img2 = document.getElementById("img2")
const img3 = document.getElementById("img3")
const img4 = document.getElementById("img4")
const img5 = document.getElementById("img5")
const img6 = document.getElementById("img6")


img1.addEventListener("click" , ver)
img2.addEventListener("click" , ver)
img3.addEventListener("click" , ver)
img4.addEventListener("click" , ver)
img5.addEventListener("click" , ver)
img6.addEventListener("click" , ver)

    function ver (e){
        console.log(e.target.id)
        let id = e.target.id
        if(id == "img1" ){
            setTimeout(()=>{
                const list = img1.classList;
                list.add("animate__swing");
                img1.style.animation()
               },300)
               const list = img1.classList;
                list.remove("animate__swing");

        }
        if(id == "img2" ){
            setTimeout(()=>{
                const list = img2.classList;
                list.add("animate__swing");
               },300)
               const list = img2.classList;
                list.remove("animate__swing");

        }
        if(id == "img3" ){
            setTimeout(()=>{
                const list = img3.classList;
                list.add("animate__swing");
               },300)
               const list = img3.classList;
                list.remove("animate__swing");

        }
        if(id == "img4" ){
            setTimeout(()=>{
                const list = img4.classList;
                list.add("animate__swing");
               },300)
               const list = img4.classList;
                list.remove("animate__swing");

        }
        if(id == "img5" ){
            setTimeout(()=>{
                const list = img5.classList;
                list.add("animate__swing");
               },300)
               const list = img5.classList;
                list.remove("animate__swing");

        }
        if(id == "img6" ){
            setTimeout(()=>{
                const list = img6.classList;
                list.add("animate__swing");
               },300)
               const list = img6.classList;
                list.remove("animate__swing");

        }
     }
