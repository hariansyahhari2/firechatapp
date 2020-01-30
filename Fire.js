import firebase from 'firebase'

class Fire {
    constructor(){
        this.init()
        this.checkAuth()
    }

    init = () => {
        if(!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "AIzaSyCRvvdPNSYUNIQr1OE1yZZ8d6JbOl76LQA",
                authDomain: "firechat-8f587.firebaseapp.com",
                databaseURL: "https://firechat-8f587.firebaseio.com",
                projectId: "firechat-8f587",
                storageBucket: "firechat-8f587.appspot.com",
                messagingSenderId: "51266583866",
                appId: "1:51266583866:web:d9d4fb93b26b7c15c9e403",
                measurementId: "G-17EDXXGF6Z"
            })
        }
    }

    checkAuth = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                firebase.auth().signInAnonymously();
            }
        })
    }

    send = messages => {
        messages.forEach(item => {
            const message = {
                text: item.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: item.user
            }

            this.db.push(message)
        });
    }

    parse = message => {
        const {user, text, timestamp} = message.val()
        const {key: _id} = message
        const createAt = new Date(timestamp)

        return {
            _id,
            createAt,
            text,
            user
        }
    }

    get = callback => {
        this.db.on('child_added', snapshot => callback(this.parse(snapshot)))
    }

    off(){
        this.db.off()
    }

    get db() {
        return firebase.database().ref("messages");
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid
    }
}