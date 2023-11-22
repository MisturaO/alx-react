import React from "react";
import { StyleSheet, css } from "aphrodite";

function Login() {
    return(
        <React.Fragment>
            <div className={css(appBody.AppBody)}>
                <p>Login to access the full dashboard</p>
                <form className={css(appBody.small)}>
                    <label htmlFor="email" className={css(appBody.labelMarginRight)}>Email:</label>
                    <input id="email" name="email" type="email" className={css(appBody.formMargin)}></input>
                    <label htmlFor="password" className={css(appBody.labelMarginRight, appBody.labelMarginLeft)}>Password:</label>
                    <input id="password" name="password" type="password" className={css(appBody.formMargin)}></input>
                    <button type="submit" className={css(appBody.labelMarginLeft, appBody.formMargin)}>OK</button>
                </form>
            </div>
        </React.Fragment>
    );
}

const appBody = StyleSheet.create({
    AppBody: {
        color: 'black',
        padding: '1rem',
        marginTop: '-13.5rem',
        position: 'relative',
        fontSize: '1.1rem',
    },
    labelMarginRight: {
        marginRight: "10px"
    },
    labelMarginLeft: {
        marginLeft: "10px"
    },
    small: {
        "@media (max-width: 900px)": {
            display: 'flex',
            flexDirection: 'column',
            padding: '0.1px',
            // marginTop: '10px',
            position: 'absolute',
            fontSize: '1.1rem',
            // marginRight: '25px'
        },
    },
    formMargin: {
        "@media (max-width: 900px)": {
            // margin: '10px',
            border: 'none',
            background: 'none',
            left: '10px',
            margin: '2px'
        }
    }

})

export default Login;
