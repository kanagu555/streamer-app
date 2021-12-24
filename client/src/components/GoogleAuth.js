import React from "react";

class GoogleAuth extends React.Component{

    state = {isSignedIn: null };

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '939885714581-4hmm8t0o9miton8u9qtm26dreggkhq0d.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()})
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = () => {
        this.setState({isSignedIn: this.auth.isSignedIn.get()})
    }

    renderAuthButton() {
        if(this.state.isSignedIn === null) {
            return null
        }else if (this.state.isSignedIn) {
            return (
                <button className="ui red google button" onClick={() => this.auth.signOut()}>
                    <i className="google icon" />
                    Sign Out
                </button>
            )
        } else {
            return (
                <button className="ui green google button" onClick={() => this.auth.signIn()}>
                    <i className="google icon" />
                    Sign In with Google
                </button>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}

export default GoogleAuth