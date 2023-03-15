export const query = async(searchText:string) =>{

    // Free web search autocomplete API from rapidAPI
    // Have a monthly quota of only 100 API calls

    // The freemium plan on this free api is really bad, you can only make one API request per second and its very slow
    // This will affect the how well this app performs.

    const url = `https://web-search-autocomplete.p.rapidapi.com/autocomplete?query=${searchText}`

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1544bf27cbmsha068191ffc9a8cfp1b93b3jsn1dbe60e1c775',
            'X-RapidAPI-Host': 'web-search-autocomplete.p.rapidapi.com'
          }
        // token for the request from RapidAPI
      };
      

     return await fetch(url, options)
        .then(response => response.json())
        .then(response => (response))
        .catch(err => console.log(err));

}
