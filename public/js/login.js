import axios from 'axios';
import { showAlert } from './alert';

export const login_customer =  (username, password) => {
    const url = 'http://localhost:4000/api/v1/Customers/login';   
    axios({ 
            method: 'POST',
            url,
            data: {
                username : username,
                password: password
            },
            
        })
        .then(res => {
            if (res.data.status === "success") {
                showAlert('success', 'Đăng nhập thành công !!!');
                window.setTimeout(() => {
                    location.assign('/')
                }, 1500);
            }
        })
        .catch(err => {
            showAlert('error','Đăng nhập thất bại !!!');
        })
}

export const login_admin =  (usernameAdmin, passwordAdmin) => {
    const url = 'http://localhost:4000/api/v1/Admins/login';   
    axios({ 
            method: 'POST',
            url,
            data: {
                usernameAdmin : usernameAdmin,
                passwordAdmin: passwordAdmin
            },
            
        })
        .then(res => {
            if (res.data.status === "success") {
                showAlert('success', 'Đăng nhập thành công !!!');
                window.setTimeout(() => {
                    location.assign('/admin/dashboard')
                }, 1500);
            }
        })
        .catch(err => {
            showAlert('error','Đăng nhập thất bại !!!');
        })
}

export const logout = async() => {
    try {
        const res = await axios({
            method: 'GET',
            url: 'http://localhost:4000/api/v1/Customers/logout',
        });
        if(res.data.status === 'success') {
            location.assign('/');
        }
    }catch(err) {
        showAlert('error', 'Error loggin out! try again')
    }
}

export const logoutAdmin = async() => {
    try {
        const res = await axios({
            method: 'GET',
            url: 'http://localhost:4000/api/v1/Admins/logout',
        });
        if(res.data.status === 'success') {
            location.assign('/admin');
        }
    }catch(err) {
        showAlert('error', 'Error loggin out! try again')
    }
}
