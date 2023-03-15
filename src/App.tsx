
import { useEffect, useId, useState } from 'react'
import './App.css'

function App() {
  const [ searchText, setSearchText ] = useState<string>('')
  const [ suggestions, setSuggestions ] = useState<Array<any>>([])
  const [ loading, setLoading ] = useState<boolean>(false)
  const listID = useId()

  const findDifference = (firstString:string, subString:string) => {
    const diff = (diffMe:string, diffBy:string) => diffMe.split(diffBy).join('')
    return diff(firstString, subString)
  }

  const searchQuery = async (arg:string) =>{
    setLoading(true)
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'd08252c3f7mshf7f5f2391bc7d10p12be2fjsnc49acdcaecc3',
        'X-RapidAPI-Host': 'web-search-autocomplete.p.rapidapi.com'
      }
    };
    
   return await fetch(`https://web-search-autocomplete.p.rapidapi.com/autocomplete?query=${arg}`, options)
      .then(response => {
        setLoading(false)
        return response.json()
      })
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
          { !!loading ? 
            <svg version="1.1"  width="50" height="50" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 100 100" enable-background="new 0 0 0 0" xmlSpace="preserve">
                <path fill="red" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                  <animateTransform 
                    attributeName="transform" 
                    attributeType="XML" 
                    type="rotate"
                    dur="1s" 
                    from="0 50 50"
                    to="360 50 50" 
                    repeatCount="indefinite" />
              </path>
            </svg> : <div className='loader-placeholder'></div>}
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
          { suggestions.map((el:any)=>{
            return <li key={el.query + listID} ><span className='highlight' >{searchText}</span>  {findDifference(el.query, searchText)}</li>
          }
          ) }
        </ul> : null
      }
     </div>
    </div>
  )
}

export default App
