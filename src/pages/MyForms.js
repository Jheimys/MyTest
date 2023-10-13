import { useState } from "react";


const MyForms = () => {
  const [inputs, setInputs] = useState({})

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value 

    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputs)
    alert(`Hello ${inputs.username} ${inputs.userlastname} you have ${inputs.age} years.`)
  }

  return(
    <>
      <h1>React Forms</h1>

      <form onSubmit={handleSubmit}>
        <label>Enter your name:
          <input 
            autoFocus
            type="text"
            name="username" 
            value={inputs.username || ''}
            onChange={handleChange}
          />
        </label>

        <br /> <br />

        <label>Enter your last name:
          <input 
            type="text"
            name="userlastname" 
            value={inputs.userlastname || ''}
            onChange={handleChange}
          />
        </label>

        <br /> <br />

        <label>Enter your age:
          <input 
            type="number"
            name="age" 
            value={inputs.age || ''}
            onChange={handleChange}
          />
        </label>

        <br /> <br />

        <input type="submit" />
      </form>
    </>
  )
};
  
export default MyForms