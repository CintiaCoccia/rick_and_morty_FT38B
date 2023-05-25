import styles from "./Form.module.css";
import { useState } from "react";
import validation from "./validation";

export default function Form(props) {
    
    const [userData, setuserData] = useState({ 
        username:"",
        password:"",
     });

    const [errors, setErrors] = useState({
        username:"",
        password:"",
    });  

                                //VER * //name o mail?
    const handleinputChange = event => { //handleChange es controlador de eventos q se llama cuando cambia el valor de un campo de entrada
        const {name, value} = event.target;
        setuserData({
            ...userData,
            [name]:value
        })
        setErrors(
            validation({
                ...userData, 
                [name]:value
        })
        )
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.login(userData);
    }

    return (
        <div className={styles.container}> 
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input 
                type="text" 
                name="username" 
                value={userData.username}
                onChange= {handleinputChange}
                />
                <p className={styles.error}>
                    {errors.username ? errors.username : null}</p>
            
                <label>Password</label>
                <input 
                type="password" 
                name="password" 
                value={userData.password}
                onChange= {handleinputChange}
                />
                <p className={styles.errors}>
                    {errors.password ? errors.password : null}</p>
                <hr />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}