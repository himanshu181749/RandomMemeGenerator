const genmemebtn=document.querySelector(".memeGen .GenerateMeme")
const memeImage=document.querySelector(".memeGen img")
const memeTitle=document.querySelector(".memeGen .memeTitle")
const memeAuthor=document.querySelector(".memeGen .memeAuthor")

const updateDetails =(url, title, author)=>{
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML=title;
    memeAuthor.innerHTML=`Meme by: ${author}`;
}


const generateMeme=()=>{
    fetch("https://meme-api.com/gimme/wholesomememes").then((response)=>response.json()).then(data=>{
        updateDetails(data.url, data.title, data.author);
    })
};


genmemebtn.addEventListener("click", generateMeme);