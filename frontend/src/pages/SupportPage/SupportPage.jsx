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
            <div className="issues">
                <h1>What's The Problem?</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        <select >
                            <option value="question">What's your question?</option>
                            <option value="online">Online Order</option>
                            <option value="product">Product Problems</option>
                            <option value="profile">Profile Problems</option>
                        </select>
                    </label>
                    <label>
                        <select >
                            <option value="product-type">What's the product type?</option>
                            <option value="headphones">Headphones</option>
                            <option value="earphones">Earphones</option>
                        </select>
                    </label>
                    <label>
                        <select >
                            <option value="product">What's the product?</option>
                            <option value="online">Online Order</option>
                            <option value="product">Product Problems</option>
                            <option value="profile">Profile Problems</option>
                            <option value="profile">Profile Problems</option>
                            <option value="profile">Profile Problems</option>
                            <option value="profile">Profile Problems</option>
                            <option value="profile">Profile Problems</option>
                            <option value="profile">Profile Problems</option>
                            <option value="profile">Profile Problems</option>
                        </select>
                    </label>
                    <label>Do You Have An Order Number?: 
                        <input 
                        type="text" 
                        name="name" 
                        value={inputs.name || ""} 
                        onChange={handleChange}
                        />
                    </label>
                </form>
            </div>
            <div className="details">
                <h1>Your Personal Details</h1>
                <form>
                    <label>
                        <input type="text" name="name" />
                    </label>
                    </form>
            </div>
        </div>
     );
}
 
export default SupportPage;