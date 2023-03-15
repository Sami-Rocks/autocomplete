
import { useEffect, useId, useState } from 'react'
import './App.css'

function App() {
  const [ searchText, setSearchText ] = useState<string>('')
  const [ suggestions, setSuggestions ] = useState<Array<any>>([])
  
  const listID = useId()

  const searchQuery = async (arg:string) =>{
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'd08252c3f7mshf7f5f2391bc7d10p12be2fjsnc49acdcaecc3',
        'X-RapidAPI-Host': 'web-search-autocomplete.p.rapidapi.com'
      }
    };
    
   return await fetch(`https://web-search-autocomplete.p.rapidapi.com/autocomplete?query=${arg}`, options)
      .then(response => response.json())
      .then(response => setSuggestions(response?.data))
      .catch(err => console.error(err));
    }

    useEffect(()=>{
      if(searchText.length > 0){
        searchQuery(searchText)
      }
    },[searchText])

    
  return (
    <div className="App">
     <div className='search-box' >
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </span>
        <input 
          type="text" 
          name='searchText' 
          id='searchText'
          onChange={(event)=>setSearchText(event.target.value)}
          />
     </div>

     <div className='suggestions' >
      {
        (!!searchText && suggestions?.length > 0) ? 
        <ul>
          { suggestions.map((el:any)=>(
            <li key={el.query + listID} >{el.query}</li>
          )) }
        </ul> : null
      }
     </div>
    </div>
  )
}

export default App
