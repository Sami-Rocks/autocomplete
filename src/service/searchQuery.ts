export const query = async(searchText:string) =>{

    // Free web search autocomplete API from rapidAPI
    // Have a monthly quota of only 100 API calls

    const url = `https://web-search-autocomplete.p.rapidapi.com/autocomplete?query=${searchText}`

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1544bf27cbmsha068191ffc9a8cfp1b93b3jsn1dbe60e1c775',
            'X-RapidAPI-Host': 'web-search-autocomplete.p.rapidapi.com'
          }
      };
      
     return await fetch(url, options)
        .then(response => response.json())
        .then(response => response?.data)
        .catch(err => err.message);
}
