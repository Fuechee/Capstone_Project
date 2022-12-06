import { useState } from "react";

const SupportPage = () => {
    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }

    return ( 
        <div className="background">
            <div className="contact">
                <h1>Contact Us</h1>
                <form onSubmit={handleSubmit}>
                    <label>What's your question?:
                        <select >
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </label>
                    <label>Do You Have An Order Number?: 
                        <input 
                        type="number" 
                        name="age" 
                        value={inputs.age || ""} 
                        onChange={handleChange}
                        />
                        </label>
                    <input type="submit" />
                </form>
            </div>
        </div>
     );
}
 
export default SupportPage;