import history from 'history/browser'


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
    localStorage.removeItem('token', 'this_is_a_demo_token')
    window.location.href = window.location.origin + '/'
}