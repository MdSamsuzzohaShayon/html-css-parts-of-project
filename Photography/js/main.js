const image = document.querySelectorAll('.image');
const image_output = document.getElementById('image-output');
const img_contain = document.getElementById('img-container');
const bg_cover = document.getElementById('bg-cvr');
console.log(image_output.src);
// let image_output_src = image_output.src;


// SEARCH ON GOOGLE
// how to know image position and size by using javascript







image.forEach(img => {
    img.addEventListener('click', e =>{
        // e.preventDefault();
        console.log(e.target.attributes);
        console.log(e.target.src);       
        // const image_src = e.target.src;
        
        // image_output_src = e.target.src;
        // b.setAttribute("name", "helloButton");
        image_output.setAttribute('src', e.target.src);
        img_contain.style.display = 'block';
        bg_cover.style.background = 'rgb(0, 59, 45)';




        // console.log(image_output_src);
        // let out = document.getElementById('output');
        // out.innerHTML = image_output_src;
        

        // image_output.innerText.src = image_src ;
        // let img = document.createElement("img").classList.add("ui" , "large", "image")
        // image_output.appendChild(img);

        // image_output.childNodes

        



        // document.addEventListener('click', (f)=>{
        //   // f.preventDefault();
        //   img_contain.style.display = 'none';
        // });
        
    }) ;
});


