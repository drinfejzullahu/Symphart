const articles = document.getElementById("articles");

if(articles){
    articles.addEventListener("click",(e)=>{
        e.preventDefault();
        if(e.target.className === "btn btn-danger delete-article"){
            if(confirm('Are you sure?')){
                const id = e.target.getAttribute('data-id');
                fetch("/article/delete/" + id , {
                    method:"DELETE",
                }).then(res=>window.location.reload());
            }
        }
    })
}