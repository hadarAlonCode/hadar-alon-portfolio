export const ScrollToTop =()=>{
    let root = document.getElementById("app");

    console.log(root);
    

    if(root){
        root.scrollTo({top: 0, behavior: 'smooth'});

    }
}