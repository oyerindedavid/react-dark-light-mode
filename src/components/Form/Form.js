import { useState } from "react";

  export default function Form(){

    const [formData, setFormData] = useState({
        firstName : "",
        lastName : "",
        description : "",
        isFriendly : true,
        gender: "",
        cars: ""
    })

    
    function handleForm(event){
        const {name, value, type, checked} = event.target
        return setFormData(prevData => {
            return {
                ...prevData,
                [name] : type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event){
       event.preventDefault()
       console.log(formData);
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input name="firstName" value={formData.firstName} onChange={handleForm} />
            <input name="lastName" value={formData.lastName} onChange={handleForm} />
            <textarea name="description" value={formData.description} onChange={handleForm} /><br/><br/>
            <input type="checkbox" name="isFriendly" checked={formData.isFriendly} onChange={handleForm} />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <fieldset>
                <legend>Personalia:</legend>
                <label for="male">Male:</label>
                <input 
                type="radio" 
                id="gender" 
                onChange={handleForm} 
                value="male"
                checked={formData.gender === "male"}
                name="gender" /><br/><br/>
                <label for="female">Female:</label>
                <input type="radio" id="gender" onChange={handleForm} value="female" name="gender" /><br/><br/>
            </fieldset>
            <label for="cars">Choose a car:</label> 
            <select name="cars" id="cars" 
               value={formData.cars} 
               onChange={handleForm}
            >
                <option value="">--Choose--</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select><br/>
            <button>Submit</button>
        </form>
    );
  }