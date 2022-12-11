import { useReducer, useState } from "react";

const formReducer = (state, event) => {
    return{
        ...state,
        [event.name]: event.value
    }
}
const SupportPage = () => {
    const [submitting, setSubmitting] = useState([false])
    const [formData, setFormData] = useReducer(formReducer, {})

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
        }, 3000)
    }

    const handleChange = event => {
        setFormData({
            name: event.target.name,
            value: event.target.value,
        })
    }
    
    return ( 
        <div className="background">
            <div className="issues">
                <h1>What's The Problem?</h1>
                <form onSubmit={handleSubmit}>
                {submitting &&
                    <div>Submtting Form...</div>
                }
                    <fieldset>
                        <label>
                            <h3>Name</h3>
                            <input name="name" onChange={handleChange}/>
                        </label>
                    </fieldset>
                    <button type="submit">Submit</button>
                </form>
        </div>
                {/* <form className="problem">
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
                            <option value="product">Momentum 4 Wireless</option>
                            <option value="profile">HD 540BT</option>
                            <option value="profile">HD 450BT</option>
                            <option value="profile">HD 350BT</option>
                            <option value="profile">HD 250BT</option>
                            <option value="profile">HD 800 S</option>
                            <option value="profile">HD 650</option>
                            <option value="profile">HD 600</option>
                            <option value="profile">HD 560S</option>
                            <option value="profile">CX Plus SE True Wireless</option>
                            <option value="profile">Momentum True Wireless 3</option>
                            <option value="profile">CX True Wireless</option>
                            <option value="profile">Sport True Wireless</option>
                        </select>
                    </label>
                    <label>
                        <input 
                        type="text" 
                        name="name"
                        placeholder="Do You Have An Order Number?"
                        onChange={handleChange}
                        />
                    </label>
                </form> */}
            
            {/* <div className="details">
                <h1>Your Personal Details</h1>
                <fieldset className="contact">
                    <label>First Name:  
                        <input type="text" name="name" />
                    </label>
                    <label>Last Name:  
                        <input type="text" name="name" />
                    </label>
                    <label>Email:  
                        <input type="text" name="name" />
                    </label>
                    <label>Address:  
                        <input type="text" name="name" />
                    </label>
                    <label>Zip Code:  
                        <input type="text" name="name" />
                    </label>
                    <label>City:  
                        <input type="text" name="name" />
                    </label>
                    <label>State:  
                        <input type="text" name="name" />
                    </label>
                    <label>Phone Number:  
                        <input type="text" name="name" />
                    </label>
                    <label>Your Message:
                    <textarea value={textarea} onChange={handleChange} />
                    </label>
                </fieldset>
                
            </div> */}
        </div>
     );
}
 
export default SupportPage;