$(document).ready(function(){n(),$("#userTable").DataTable({language:{url:"https://cdn.datatables.net/plug-ins/1.11.5/i18n/pt-BR.json"},destroy:!0,responsive:!0,columnDefs:[{orderable:!1,targets:[7]}]})});function n(){let a=$('meta[name="route-reload-datatable"]').attr("content");$.ajax({url:a,method:"GET",data:{_method:"GET",_token:$('meta[name="csrf-token"]').attr("content")},success:function(t){console.log(t);let o=l(t),e=document.getElementById("dataTableUsuarios");e.innerText=" ",e.innerHTML=o,$("#userTable").DataTable({language:{url:"https://cdn.datatables.net/plug-ins/1.11.5/i18n/pt-BR.json"},destroy:!0,responsive:!0,columnDefs:[{orderable:!1,targets:[7]}]})},error:function(t){Swal.fire("Erro","Falha ao atualizar a tabela de usuários","error")}})}function l(a){let t=`<table id="userTable" class="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        <th>EMAIL</th>
                        <th>SITUAÇÃO</th>
                        <th>DATA DE ADMISSÃO</th>
                        <th>DATA E HORA (Cadastro)</th>
                        <th>DATA E HORA (Atualização)</th>
                        <th class="actions-column">AÇÕES</th>
                    </tr>
                </thead>
                <tbody>`;return a.forEach(o=>{t+=`<tr>
            <td class="other-column">${o.id}</td>
            <td class="other-column">${o.nome}</td>
            <td class="other-column">${o.email}</td>
            <td class="other-column">${o.situacao}</td>
            <td class="other-column">${o.data_admissao}</td>
            <td class="other-column">${o.created_at}</td>
            <td class="other-column">${o.updated_at}</td>
            <td class="actions-column">
                <div class="action-buttons">
                    <button type="button" class="btn btn-sm btn-custom edit-btn">
                        <i class="bi bi-pencil-square"></i> Editar
                    </button>
                    <button type="button" class="btn btn-sm btn-custom delete-btn">
                        <i class="bi bi-trash"></i> Excluir
                    </button>
                </div>
            </td>
        </tr>`}),t+=`</tbody>
            </table>`,t}$("#addUserBtn").on("click",function(){Swal.fire({title:"Adicionar Usuário",html:`
            <input type="text" id="nome" class="swal2-input" placeholder="Nome">
                    <input type="email" id="email" class="swal2-input" placeholder="Email">
                    
                    <!-- Campo Situação com opções de Ativo e Inativo -->
                    <select id="situacao" class="swal2-input">
                        <option value="Ativo" selected>Ativo</option>
                        <option value="Inativo">Inativo</option>
                    </select>

                    <!-- Campo Data de Admissão -->
                    <input type="date" id="dataAdmissao" class="swal2-input">
        `,confirmButtonText:"Adicionar",confirmButtonColor:"#380050",showCancelButton:!0,cancelButtonText:"Cancelar",cancelButtonColor:"#FFEB3B",preConfirm:()=>{const a=Swal.getPopup().querySelector("#nome").value,t=Swal.getPopup().querySelector("#email").value,o=Swal.getPopup().querySelector("#situacao").value,e=Swal.getPopup().querySelector("#dataAdmissao").value;return(!a||!t||!o||!e)&&Swal.showValidationMessage("Por favor, preencha todos os campos"),{nome:a,email:t,situacao:o,dataAdmissao:e}}}).then(a=>{a.isConfirmed&&r(a.value)})});function r(a){$('meta[name="route-add-datatable"]').attr("content"),$.ajax({url:"/usuarios/"+userId,method:"POST",data:{_token:$('meta[name="csrf-token"]').attr("content"),nome:a.nome,email:a.email,situacao:a.situacao,data_admissao:a.dataAdmissao},success:function(t){if(t.type=="true"){Swal.fire("Sucesso!","Usuário atualizado com sucesso!","success");return}Swal.fire("Erro","Falha ao atualizar o usuário","error")},error:function(t){Swal.fire("Erro","Falha ao atualizar o usuário","error")}})}$(".edit-btn").on("click",function(){let a=$(this).data("id");$.ajax({url:"/usuarios/"+a,method:"GET",success:function(t){Swal.fire({title:"Editar Usuário",html:`
                    <input type="text" id="nome" class="swal2-input" placeholder="Nome" value="${t.nome}">
                    <input type="email" id="email" class="swal2-input" placeholder="Email" value="${t.email}">
                    
                    <!-- Campo Situação com opções de Ativo e Inativo -->
                    <select id="situacao" class="swal2-input">
                        <option value="Ativo" ${t.situacao==="Ativo"?"selected":""}>Ativo</option>
                        <option value="Inativo" ${t.situacao==="Inativo"?"selected":""}>Inativo</option>
                    </select>

                    <!-- Campo Data de Admissão -->
                    <input type="date" id="dataAdmissao" class="swal2-input" value="${t.data_admissao}">
                `,confirmButtonText:"Salvar",confirmButtonColor:"#380050",showCancelButton:!0,cancelButtonText:"Cancelar",cancelButtonColor:"#FFEB3B",preConfirm:()=>{const o=Swal.getPopup().querySelector("#nome").value,e=Swal.getPopup().querySelector("#email").value,i=Swal.getPopup().querySelector("#situacao").value,s=Swal.getPopup().querySelector("#dataAdmissao").value;return(!o||!e||!i||!s)&&Swal.showValidationMessage("Por favor, preencha todos os campos"),{nome:o,email:e,situacao:i,dataAdmissao:s}}}).then(o=>{o.isConfirmed&&u(a,o.value)})},error:function(t){Swal.fire("Erro","Falha ao buscar os dados do usuário","error")}})});function u(a,t){$.ajax({url:"/usuarios/"+a,method:"POST",data:{_method:"PUT",_token:$('meta[name="csrf-token"]').attr("content"),nome:t.nome,email:t.email,situacao:t.situacao,data_admissao:t.dataAdmissao},success:function(o){Swal.fire("Sucesso!","Usuário atualizado com sucesso!","success").then(()=>{location.reload()})},error:function(o){Swal.fire("Erro","Falha ao atualizar o usuário","error")}})}$(".delete-btn").on("click",function(){Swal.fire({title:"Tem certeza?",text:"Esta ação não pode ser desfeita!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#380050",confirmButtonText:"Sim, excluir!",cancelButtonText:"Cancelar",cancelButtonColor:"#FFEB3B"}).then(a=>{a.isConfirmed&&Swal.fire({title:"Excluído!",text:"O usuário foi excluído.",icon:"success",confirmButtonColor:"#380050"})})});
