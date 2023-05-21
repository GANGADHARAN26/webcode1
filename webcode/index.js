 //maindiv
 var maindiv=document.createElement("div");
 maindiv.setAttribute("class","container-fluid");
 maindiv.setAttribute("id","main");
maindiv.style.backgroundColor="#f7b733";
  
//heading1
var heading1=document.createElement("h1");
heading1.innerHTML="NYKAA";
maindiv.appendChild(heading1);

//searchbox
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","search");
input.style.width="30%";

input.setAttribute("placeholder","Enter the category ex: lipstick");

//button for search
var divm=document.createElement("div");
var btn=document.createElement("button");
btn.innerHTML="Seach";
btn.style.backgroundColor="lightblue";
btn.style.paddingLeft="10px";
btn.addEventListener("click",async function(e){
  let ap1=await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?category=${search}`);
    let api=await ap1.json();
    
   for(var i=0;i<api.length;i++){
     
    //search item
    


    //div1
    var div1=document.createElement("div");
    div1.setAttribute("class","card mb-3");
    div1.style.maxWidth="740px";
    div1.setAttribute("id","mod");
    div1.style.marginLeft="20%";
    div1.style.marginTop="10%";

    

    //div2
    var div2=document.createElement("div");
    div2.setAttribute("class","row g-0");
    //div3
    var div3=document.createElement("div");
    div3.setAttribute("class","col-md-4");
    //div4
    var div4=document.createElement("div");
    div4.setAttribute("class","col-md-8");
    //div5
    var div5=document.createElement("div");
    div5.setAttribute("class","card-body");
    //img
    var img=document.createElement("img");
    img.src="api[i].image_link";
    img.setAttribute("class","img-fluid rounded-start");
    img.setAttribute("alt","...");
    //heading
    var head=document.createElement("h5");
    head.setAttribute("class","card-titile");
    head.innerHTML=api[i].name;
    //brand
    var brand=document.createElement("h5");
    brand.setAttribute("class","card-text");
    brand.innerHTML=api[i].brand;
    //price
    var price=document.createElement("h");
    price.setAttribute("class","card-text");
    price.innerHTML=api[i].price+"$";

     //description
   var desc=document.createElement("p");
   desc.setAttribute("class","card-text");
   desc.innerHTML=api[0].description;
   //product link
   var link=document.createElement("a");
   link.href=api[0].product_link;
   link.setAttribute("role","button")
   link.setAttribute("target","_blank");
   link.innerHTML="BUY NOW";
   link.style.backgroundColor=" #af4f0f";
   link.style.border="2px solid #af4f0f";
   link.style.textDecoration="none";
    
   div3.appendChild(img);
   div5.appendChild(head);
   div5.appendChild(brand);
   div5.appendChild(price);
   div5.appendChild(desc);
   div5.appendChild(link);
   div4.append(div5);
   div2.append(div3);
   div2.append(div4);
   div1.append(div2);
   maindiv.append(div1);
   document.body.appendChild(maindiv);

   }
  
})
divm.append(input);
divm.append(btn);
maindiv.appendChild(divm);



async function data(){
    let ap1=await fetch("https://makeup-api.herokuapp.com/api/v1/products.json");
    let api=await ap1.json();
    console.log(api);




   
   for(var i=0;i<api.length;i++){
     
    //search item
    


    //div1
    var div1=document.createElement("div");
    div1.setAttribute("class","card mb-3");
    div1.style.maxWidth="740px";
    div1.setAttribute("id","mod");
    div1.style.marginLeft="20%";
    div1.style.marginTop="10%";

    

    //div2
    var div2=document.createElement("div");
    div2.setAttribute("class","row g-0");
    //div3
    var div3=document.createElement("div");
    div3.setAttribute("class","col-md-4");
    //div4
    var div4=document.createElement("div");
    div4.setAttribute("class","col-md-8");
    //div5
    var div5=document.createElement("div");
    div5.setAttribute("class","card-body");
    //img
    var img=document.createElement("img");
    img.src="api[i].image_link";
    img.setAttribute("class","img-fluid rounded-start");
    img.setAttribute("alt","...");
    //heading
    var head=document.createElement("h5");
    head.setAttribute("class","card-titile");
    head.innerHTML=api[i].name;
    //brand
    var brand=document.createElement("h5");
    brand.setAttribute("class","card-text");
    brand.innerHTML=api[i].brand;
    //price
    var price=document.createElement("h");
    price.setAttribute("class","card-text");
    price.innerHTML=api[i].price+"$";

     //description
   var desc=document.createElement("p");
   desc.setAttribute("class","card-text");
   desc.innerHTML=api[0].description;
   //product link
   var link=document.createElement("a");
   link.href=api[0].product_link;
   link.setAttribute("role","button")
   link.setAttribute("target","_blank");
   link.innerHTML="BUY NOW";
   link.style.backgroundColor=" #af4f0f";
   link.style.border="2px solid #af4f0f";
   link.style.textDecoration="none";
    
   div3.appendChild(img);
   div5.appendChild(head);
   div5.appendChild(brand);
   div5.appendChild(price);
   div5.appendChild(desc);
   div5.appendChild(link);
   div4.append(div5);
   div2.append(div3);
   div2.append(div4);
   div1.append(div2);
   maindiv.append(div1);
   document.body.appendChild(maindiv);

   }
  
}
data();