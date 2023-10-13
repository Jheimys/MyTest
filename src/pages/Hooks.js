import { useReducer } from "react";

const Hooks = () => {

  function reduce(state, action){
   switch (action.type) {
    case 'incremented_age':{
      return{
        name: state.name,
        age: state.age + 1
      }
    }

    case 'changed_name':{
      return{
        name: action.nextName,
        age: state.age
      }
    }
      default:
        break;
    }
  }

  const [state, dispatch] = useReducer(reduce, {name:'Taylor', age: 42})

  function handleButtonClick() {
    dispatch({type: 'incremented_age'})
  }

  function handleInputChange(e) {
    dispatch({
      type:'changed_name',
      nextName: e.target.value
    })
  }

    return(
      <>
        <h1>Hook: useReduce</h1>

        <input 
          type="text"
          value={state.name}
          onChange={handleInputChange}
        />

        <button onClick={() => handleButtonClick()}> 
          Increment age 
        </button>
        <p>Hello, {state.name}. You are {state.age}.</p>
      </>
    )
  };
  
export default Hooks;