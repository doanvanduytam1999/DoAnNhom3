const taskList = document.querySelector('.collection');


function addService() {
  const tbl =  document.querySelector('.tbody');
  const tr = document.createElement('tr');
  const th = document.createElement('th');
  const td = document.createElement('td');
  const td1 = document.createElement('td');
  const td2 = document.createElement('td');
  const td3= document.createElement('td');
  const input = document.createElement('input');
  const input1 = document.createElement('input');
  const input2 = document.createElement('input');
  const input3 = document.createElement('input');
  const link = document.createElement('a');

  th.setAttribute("scope","row")
  input.className='input_data';
  input1.className='input_data';
  input2.className='input_data';
  input3.className='input_data';
 
  input.name='themdichvu';
  input1.name='themdonvi';
  input2.name='themgia';
  input3.name='thembaohanh';
  link.className='delete-item2 secondary-content remove';
  link.innerHTML = '<i class="fas fa-trash-alt"></i>';
  tr.className='collection-item';
  th.appendChild(input)
  td.appendChild(input1);
  td1.appendChild(input2);
  td2.appendChild(input3);
  td3.appendChild(link);
  tr.appendChild(th);
  tr.appendChild(td);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tbl.appendChild(tr);

  /* const add =document.querySelector(".collection-item").lastChild;
  const cln =add.cloneNode(true);
  document.querySelector(".collection-item").appendChild(cln); */
}

function deleteService(){
  const listTr = document.querySelectorAll("tr");
  if(listTr.length > 2){
    listTr[listTr.length - 1].remove();
  }
  else
  {
    alert("Không được xoá hết dịch vụ");
  }
}




loadEventListeners();


function loadEventListeners() {
  taskList.addEventListener('click', removeTask );
  taskList.addEventListener('click', removeTaskThem );
} 


function removeTask(e) {
  const listTr = document.querySelectorAll("tr");

  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Bạn thật sự muốn xoá ?')) {
      e.target.parentElement.parentElement.parentElement.remove();
      const index = e.target.id;
      const input = document.getElementById(index);
      input.setAttribute('name','xoaid');
    }
  }
}

function removeTaskThem(e) {
  if(e.target.parentElement.classList.contains('delete-item2')) {
    if(confirm('Bạn thật sự muốn xoá ?')) {
      e.target.parentElement.parentElement.parentElement.remove();
    }
  }
  
}

