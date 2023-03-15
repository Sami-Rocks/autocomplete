export const query = async(searchText:string) =>{

    const url = `https://web-search-autocomplete.p.rapidapi.com/autocomplete?query=${searchText}`

    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'd08252c3f7mshf7f5f2391bc7d10p12be2fjsnc49acdcaecc3',
          'X-RapidAPI-Host': 'web-search-autocomplete.p.rapidapi.com'
        }
      };
      
     return await fetch(url, options)
        .then(response => response.json())
        .then(response => response?.data)
        .catch(err => err.message);
}
