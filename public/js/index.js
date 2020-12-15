import '@babel/polyfill';
import { EWOULDBLOCK } from 'constants';
import ajax from 'jquery';
import Service from '../../models/serviceModel';
import catchAsync from '../../utils/catchAsync';

import { getService } from './getService';


import { login_customer, login_admin, logout, logoutAdmin } from './login';

//import { updateSettings } from './updateSettings';
//import { addAdmin } from './addAdmin';
/* import { 
    updatePhotoStudent,
    updateDocumentStudent,
    updateEnrollingStatus,
    updateTuition,
    updateCodeNumber
 } from './student'; */

 
//DOM ELEMENT
const loginForm = document.querySelector('.form-login');
const logOutBtn = document.querySelector('.logout');
const loginFormAdmin = document.querySelector('.from-login-admin');
const logOutBtnAdmin = document.querySelector('.logout-admin');
const getTypeService = document.querySelector('.loaiservice');
const logOutAdmin = document.querySelector('.logoutAdmin');
/*const adminDataForm = document.querySelector('.form-admin-data');
const adminPasswordForm = document.querySelector('.form-admin-password');
const addAdminForm = document.querySelector('.form-add-admin');
const editPhotoStudentForm = document.querySelector('.form-edit-photo-student');
const editDocumentStudentForm = document.querySelector('.form-edit-document-student');
const editStudyStudentForm = document.querySelector('.form-edit-study-student');
const editTuitionStudentForm = document.querySelector('.form-edit-tuition-student');
const editCodeNumberStudentForm = document.querySelector('.form-edit-codenumber-student');
 */
//Login and logout

if (loginForm) {
    loginForm.addEventListener('submit', e => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        login_customer(username, password);
    });
};

if (loginFormAdmin) {
    loginFormAdmin.addEventListener('submit', e => {
        e.preventDefault();
        const username = document.getElementById('usernameadmin').value;
        const password = document.getElementById('passwordadmin').value;
        console.log(username, username);
        login_admin(username, password);
    });
};

if(logOutBtn) {
    logOutBtn.addEventListener('click', logout);
};
if(logOutAdmin){
    logOutAdmin.addEventListener('click', logoutAdmin);
}


$(document).ready(function(){
    $('#loaiservice').change(function(){
        var id_loaiservice = $(this).val();
        $.ajax({
            type: 'GET',
            url: "http://localhost:4000/api/v1/Customers/getService/"+id_loaiservice,
            success: function(data){
                $('#id_service').find('option').remove().end();
                $('#id_service').append(`<option value="0">Chọn dịch vụ...</option>`);
                data.Services.forEach(function(element){
                    $('#id_service').append(`<option value="${element._id}"> ${element.name}</option>`);
                })
            },
            error: function(e){
                console.log(e.message);
            }

        })
    });
});

$(document).ready(function(){
    $('#id_city').change(function(){
        var id_city = $(this).val();       
        var chinhanh= "---Chọn chi nhánh---"
        $.ajax({
            type: 'GET',
            url: 'http://localhost:4000/api/v1/Customers/getDistrict/'+id_city,
            success: function(data){
                $('#id_district').find('option').remove().end();
                $('#id_district').append("<option>"+chinhanh+"</option>");
                data.Districts.forEach(function(element){
                    
                    $('#id_district').append(`<option value="${element._id}"  >  ${element.districtName}  </option>`);
                })               
            },
            error: function(e){
                console.log(e.message);
            }

        })
    });
});

$(document).ready(function(){
    $('#id_district').change(function(){
        var id_district = $(this).val();
        var diachi ="---Chọn địa chỉ---"
        $.ajax({
            type: 'GET',
            url: 'http://localhost:4000/api/v1/Customers/getAgency/'+id_district,   
            success: function(data){
                $('#id_agency').find('option').remove().end();
                $('#id_agency').append("<option>"+diachi+"</option>");
                
                data.Agencys.forEach(function(element){
                    $('#id_agency').append("<option value=" + element._id + ">" + element.address + "</option>");
                    //$('#id_agency').append(`<option value="${element._id}"  >  ${element.address}  </option>`);
                })
            },
            error: function(e){
                console.log(e.message);
            }

        })
    });
});
/*
if (adminDataForm) {
    adminDataForm.addEventListener('submit', e => {
        e.preventDefault();
        const form = new FormData();
        form.append('username', document.getElementById('username').value);
        form.append('email', document.getElementById('email').value);
        form.append('photo', document.getElementById('photo').files[0]);
        updateSettings(form, 'data');
    });
};

if (adminPasswordForm) {
    adminPasswordForm.addEventListener('submit', async e => {
        e.preventDefault();
        document.querySelector('.btn-save-password').textContent = 'Updating...';
        const passwordCurrent = document.getElementById('passwordCurrent').value;
        const password = document.getElementById('password').value;
        const passwordConfirm = document.getElementById('passwordConfirm').value;
        await updateSettings(
            {passwordCurrent, password, passwordConfirm},
             'password'
        );
        document.querySelector('.btn-save-password').textContent = 'Save password';
        document.getElementById('passwordCurrent').value = '';
        document.getElementById('password').value = '';
        document.getElementById('passwordConfirm').value = '';
    });
};

if(addAdminForm) {
    addAdminForm.addEventListener('submit', e => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const passwordConfirm = document.getElementById('passwordConfirm').value;
        const role = document.getElementById('role').value;
        addAdmin({username, email, password, passwordConfirm, role});
    });
}

//edit photo student 
if(editPhotoStudentForm) {
    editPhotoStudentForm.addEventListener('submit', e => {
        e.preventDefault();
        const form = new FormData();
        form.append('username', document.getElementById('username').value);
        form.append('idStu', document.getElementById('idStu').value);
        console.log( document.getElementById('idStu').value);
        form.append('photoStu', document.getElementById('photoStu').files[0]);
        updatePhotoStudent(form);
    })
}

//edit document student

if(editDocumentStudentForm) {
    editDocumentStudentForm.addEventListener('submit', e => {
        e.preventDefault();
        const form = new FormData();
        form.append('username', document.getElementById('username').value);
        form.append('idStu', document.getElementById('idStu').value);
        for(var i=0;i<filesLength;i++){
            form.append("documents", document.getElementById('documents').files[i]);
        }
        updateDocumentStudent(form);
    })
}
//edit study student
if(editStudyStudentForm) {
    editStudyStudentForm.addEventListener('submit', e => {
        e.preventDefault();
        const id = document.getElementById('idStu').value;
        const enrollingStatus = document.getElementById('enrollingStatus').value;
        updateEnrollingStatus({id, enrollingStatus});
    })
}

//edit tuition student
if(editTuitionStudentForm) {
    editTuitionStudentForm.addEventListener('submit', e => {
        e.preventDefault();
        const id = document.getElementById('idStu').value;
        const tuition = document.getElementById('tuition').value;
        updateTuition({id, tuition});
    })
}
//edit odenumber student

if(editCodeNumberStudentForm) {
    editCodeNumberStudentForm.addEventListener('submit', e => {
        e.preventDefault();
        const id = document.getElementById('idStu').value;
        const codeNumber = document.getElementById('codeNumber').value;
        updateCodeNumber({id, codeNumber});
    })
}
 */

//Page Admin
/* jQuery(function ($) {
    $(".sidebar-dropdown > a").click(function() {
        $(".sidebar-submenu").slideUp(200);
        if (
            $(this)
                .parent()
                .hasClass("active")
        ) {
            $(".sidebar-dropdown").removeClass("active");
            $(this)
                .parent()
                .removeClass("active");
        } else {
            $(".sidebar-dropdown").removeClass("active");
            $(this)
                .next(".sidebar-submenu")
                .slideDown(200);
            $(this)
                .parent()
                .addClass("active");
        }
    });

    $("#close-sidebar").click(function() {
        $(".page-wrapper").removeClass("toggled");
    });
    $("#show-sidebar").click(function() {
        $(".page-wrapper").addClass("toggled");
    });
});
 */


