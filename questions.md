1. What is the difference between Component and PureComponent? give an example where it might break my app.

- The difference between PureComponents and Component is PureCompenents do no rerender when its states and props passed remain the same.

2.  Context + ShouldComponentUpdate might be dangerous. Can think of why is 
that?


3.  Describe 3 ways to pass information from a component to its PARENT.
    - Using the React ContextAPI to setup global state variables that can be passed around the app. The variable can be set in a child component and the parent component can have access to it.
    - React Redux (similar to the ContextAPI) and also be used to set global variables. The child compoents can be used to manipulate the variable and any other component in the app (parent component included) will have access to the variable.
    - Using a callback function passed as a prop to the child component from the parent component can also be used. A variable can be passed as an argument to the function and used in the callback function written in the parent component.

4.  Give 2 ways to prevent components from re-rendering.
 - Export components using React.memo avoids re-rendering by comparing curent and previous props passed to the component. The component only re-renders when the props are different.
 - One other effect way is replacing useRef with useState (expercially with form inputs) if the you are not doing any check on the form value till the forn is submited. using useState re-renders when ever the value is updated, but using useRef only takes the value when the form is submited.

5.  What is a fragment and why do we need it? Give  an example where it might 
break my app.

- Fragments are a were to group elements without adding extra nodes to the Dom
if i wanted to separate table columns in my app into a child component, i can't use a parent div around the td tags

```
<div>
    <td></td>
    <td></td>
</div>
```

this will break my app because this will render (inluding the parent component)
```
<table>
    <tr>
       <div>
            <td></td>
            <td></td>
        </div>
    </tr>
</table>
```
but with fragment, i can use <></> (which is the short form)
```
<>
    <td></td>
    <td></td>
</>
```
and this will render (including the parent) ,
```
<table>
    <tr>
        <td></td>
        <td></td>
    </tr>
</table>
```

6.  Give 3 examples of the HOC pattern.
- First example is passing styles to multiple components.
```
 function withStyle(Clement){
    return props => {
        style ={ padding: '5px', margin: '10px' }
        return <Compoent style={style} {...props} />
    }
 }
 const Button = () => <button>Click me!</button>

 const styleButton = withStlye(Button)
 ```

- Authenticating a compoent (verifying a user's access to a component)
```
 function withAuthentication(Clement){

    let authentication = authenticateUser() // function to authenticate user // returns boolean

    if(authentication){
        return <Compoent style={style} {...props} /> 
    }else{
        <Navigate to="/login" replace />
    }
 }
```

- Adding a loader to multiple components
```
function withLoader(Component, makeRequest){

    const { loading, data } = makeRequest() // function to make async request. Could be react query.

    if(loading) return <div> Loading... <div> // a loading animation

    return <Compoent {...props} data={data} />
}
```

7.  what's the difference in handling exceptions in promises, callbacks and 
async...await.


8.  How many arguments does setState take and why is it async.
- setState takes 2 argument. The first is object/callback to update the state and the second is a function that runs after the setState. 
- It is async because multiple setState(s) are batched together to improve performace because each setState call will trigger a re-render. So batching and executing them togeter before re-render will reduce then number of re-renders.
9.  List the steps needed to migrate a Class to Function Component.

- Change the class to a function
- Remove the render method
- change all methods into functions
- Remove constructor and replace it with the useState hook to declare state variables
- the useState hook will also replave event bindings
- replace life cycle methods (componentDidMount, componentWillUnmount, componentDidUpdate) with useEffect hook. Empty dependency array will replace componentDidMount; the return state inside the useEffect hook will replace componentWillUnmount, and variables in dependency array will replace componentDidUpdate and also state update side effects.


10.  List a few ways styles can be used with components.
 - creating a separate css file and importing it in the component file (using className to target elements in the component) 
 import './style.css'
 - using inline css `<p style={{ margin: '5px' }} >I am a text</p>`
 - using tailwindCSS `<div className="p-4 bg-indigo-500 mx-10" ></div>`
 - using CSS in JS
 ```
 const styles = createUseStyles({
  customStyle : {
    border : '2px solid green',
  }
 })
...
 <div className={classes.customStyle}>Style me</div>
```
11.  How to render an HTML string coming from the server.

By using the dangerouslySetInnerHTML attribute.

`<div dangerouslySetInnerHTML={{__html: rawMarkupFromServer}} ></div>`


