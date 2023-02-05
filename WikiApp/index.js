let principal = document.querySelector("#principal");
let searchInput = document.querySelector("#search-input");
let serachbutton = document.querySelector("#search-button");
let resultat = document.querySelector("#resultat");
let listResultat = document.querySelector("#list-resultat");
//`https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=cr7"
document.querySelector("form").addEventListener("submit", function () {
  let url = `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=${searchInput.value}`;

  fetch(url).then((responses) => {
    responses.json().then((data) => {
      console.log(data);
      let list = "";
      console.log(data);
      for (let wiki of data.query.search) {
        const url2 = `https://en.wikipedia.org/?curid=${wiki.pageid}`;
        //console.log(wiki.pageid);
        list += `<li>  <a href="${url2}" class="link-target"> ${wiki.title}</a><br><a href="${url2}" class="link-result">${url2}</a><br> ${wiki.snippet}</li><br>`;
      }
      listResultat.innerHTML = list;
    });
  });
});
