import { useReducer, useState } from "react";

const formReducer = (state, event) => {
    return{
        ...state,
        [event.name]: event.value
    }
}
const SupportPage = () => {
    const [submitting, setSubmitting] = useState(false);
    const [formData, setFormData] = useReducer(formReducer, {
        count: 100,
    });


    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
        }, 3000)
        alert("Thank you for submitting a form, we'll get back to you as soon as possible")
    }

    const handleChange = event => {
        setFormData({
            name: event.target.name,
            value: event.target.value,
        })
    }
    
    return ( 
        <div className="background">
            <div className="contact">
                <h1>Contact Us</h1>
                <form onSubmit={handleSubmit}>
                {submitting && 
                    <div>Submtting Form...</div>
                }
                    <fieldset disabled={submitting}>
                        <label>
                            <h3>What's the Problem?</h3>
                            <select name="option" onChange={handleChange} value={formData.option || ''}>
                                <option value="">--Please choose an option--</option>
                                <option value="online">Online Order</option>
                                <option value="product_problems">Product Problems</option>
                                <option value="profile">Profile Problems</option>
                            </select>
                        </label>
                        <label>
                            <select name="product" disabled={formData.question !== 'Product Problems'} onChange={handleChange} value={formData.product || ''}>
                                <option value="">--What's the product?--</option>
                                <option value="Momentum 4 Wireless">Momentum 4 Wireless</option>
                                <option value="HD 540BT">HD 540BT</option>
                                <option value="HD 450BT">HD 450BT</option>
                                <option value="HD 350BT">HD 350BT</option>
                                <option value="HD 250BT">HD 250BT</option>
                                <option value="HD 800 S">HD 800 S</option>
                                <option value="HD 650">HD 650</option>
                                <option value="HD 600">HD 600</option>
                                <option value="HD 560S">HD 560S</option>
                                <option value="CX Plus SE True Wireless">CX Plus SE True Wireless</option>
                                <option value="Momentum True Wireless 3">Momentum True Wireless 3</option>
                                <option value="CX True Wireless">CX True Wireless</option>
                                <option value="Sport True Wireless">Sport True Wireless</option>
                            </select>
                        </label>
                        <label>
                            <input name="order" disabled={formData.question !== 'online'} placeholder="Do You Have An Order Number?" onChange={handleChange} value={formData.order || ''}/>
                        </label>
                    </fieldset>
                    <fieldset disabled={submitting}>
                        <label>
                            <h3>Your Personal Information</h3>
                            <input name="first_name" placeholder="First Name" onChange={handleChange} value={formData.first_name || ''}/>
                        </label>
                        <label>
                            <input name="last_name" placeholder="First Name" onChange={handleChange} value={formData.last_name || ''}/>
                        </label>
                        <label>
                            <input name="email" placeholder="Email" onChange={handleChange} value={formData.email || ''}/>
                        </label>
                        <label>
                            <input name="address" placeholder="Address" onChange={handleChange} value={formData.address || ''}/>
                        </label>
                        <label>
                            <input name="city" placeholder="City" onChange={handleChange} value={formData.city || ''}/>
                        </label>
                        <label>
                            <input name="state" placeholder="State" onChange={handleChange} value={formData.state || ''}/>
                        </label>
                        <label>
                            <input name="zip_code" placeholder="Zip Code" onChange={handleChange} value={formData.zip_code || ''}/>
                        </label>
                        
                    </fieldset>
                    <button type="submit" disabled={submitting}>Submit</button>
                </form>
            </div>
        </div>
     );
}
 
export default SupportPage;