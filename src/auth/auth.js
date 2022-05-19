import history from 'history/browser'
import { BroadcastChannel } from 'broadcast-channel'


const logoutChannel = new BroadcastChannel('logout')

export const login = () => {
    localStorage.setItem('token', 'this_is_a_demo_token')
    history.push('/app/dashboard')
}

export const checkToken = () => {
    const token = localStorage.getItem("token", 'this_is_a_demo_token' )
    if(!token) return alert('You are not logged in')
    return token
    
}


export const logout = () => {
    logoutChannel.postMessage('Logout')
    localStorage.removeItem('token', 'this_is_a_demo_token')
    window.location.href = window.location.origin + '/'
}

export const logoutAllTabs = () => {
    logoutChannel.onmessage = () => {
        logout();
        logoutChannel.close();
    }
}