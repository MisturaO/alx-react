import React from "react";
import { StyleSheet, css } from "aphrodite";

function Login() {
    return(
        <React.Fragment>
            <div className={css(appBody.divMargin)}>
                <p>Login to access the full dashboard</p>
                <form>
                    <label htmlFor="email" style={{marginRight: "10px"}}>Email:</label> { /* 'style' property syntax in jsx(You can see it's different from the one in .css(margin-right), jsx doesn't use a dash inbetween css perperty it uses camel case) */ }
                    <input id="email" name="email" type="email"></input>
                    <label htmlFor="password" style={{marginRight: "10px", marginLeft: "10px"}}>Password:</label>
                    <input id="password" name="password" type="password"></input>
                    <button type="submit" style={{marginLeft: "10px"}}>OK</button>
                </form>
            </div>
        </React.Fragment>
    );
}

const appBody = StyleSheet.create({
    divMargin: {
        color: 'black',
        padding: '1rem',
        marginTop: '-13.5rem',
        position: 'relative',
        fontSize: '1.1rem',
    }
})

export default Login;
