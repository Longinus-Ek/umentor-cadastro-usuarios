// Inicialização do DataTables
$(document).ready(function () {
    refreshDataTableUsuarios()
});

function refreshDataTableUsuarios(){
    let url = $('meta[name="route-reload-datatable"]').attr('content');
    $.ajax({
        url: url,
        method: 'GET',
        data: {
            _method: 'GET', 
            _token: $('meta[name="csrf-token"]').attr('content')
        },
        success: function(response) {
            console.log(response)
            let table = adicionaRowsDataTable(response)
            let divTable = document.getElementById("dataTableUsuarios")
            divTable.innerText = ' '
            divTable.innerHTML = table
            $('#userTable').DataTable({
                "language": {
                    "url": "https://cdn.datatables.net/plug-ins/1.11.5/i18n/pt-BR.json",
                },
                "destroy": true,
                "responsive": true,
                "columnDefs": [
                    { "orderable": false, "targets": [7] },
                    {
                        "targets": [4], // As colunas de data e hora
                        "render": function (data, type, row) {
                            if (data) {
                                return moment(data).format('DD/MM/YYYY'); 
                            }
                            return data;
                        }
                    },
                    {
                        "targets": [5, 6], // As colunas de data e hora
                        "render": function (data, type, row) {
                            if (data) {
                                return moment(data).format('DD/MM/YYYY HH:mm:ss');
                            }
                            return data;
                        }
                    }
                ]
            });
        },
        error: function(error) {
            Swal.fire('Erro', 'Falha ao atualizar a tabela de usuários', 'error');
        }
    });
}

function adicionaRowsDataTable(dados){
    let table = `<table id="userTable" class="table table-striped table-bordered">
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
                <tbody>`;
    dados.forEach(element => {
        table += `<tr>
            <td class="other-column">${element.id}</td>
            <td class="other-column">${element.nome}</td>
            <td class="other-column">${element.email}</td>
            <td class="other-column">${element.situacao}</td>
            <td class="other-column">${element.data_admissao}</td>
            <td class="other-column">${element.created_at}</td>
            <td class="other-column">${element.updated_at}</td>
            <td class="actions-column">
                <div class="action-buttons">
                    <button type="button" class="btn btn-sm btn-custom edit-btn" data-id="${element.id}">
                        <i class="bi bi-pencil-square"></i> Editar
                    </button>
                    <button type="button" class="btn btn-sm btn-custom delete-btn" data-id="${element.id}">
                        <i class="bi bi-trash"></i> Excluir
                    </button>
                </div>
            </td>
        </tr>`
    });
    table += `</tbody>
            </table>`

    return table;
}

// Evento para adicionar usuário
$('#addUserBtn').on('click', function () {
    Swal.fire({
        title: 'Adicionar Usuário',
        html: `
            <input type="text" id="nome" class="swal2-input" placeholder="Nome">
                    <input type="email" id="email" class="swal2-input" placeholder="Email">
                    
                    <!-- Campo Situação com opções de Ativo e Inativo -->
                    <select id="situacao" class="swal2-input">
                        <option value="Ativo" selected>Ativo</option>
                        <option value="Inativo">Inativo</option>
                    </select>

                    <!-- Campo Data de Admissão -->
                    <input type="date" id="dataAdmissao" class="swal2-input">
        `,
        confirmButtonText: 'Adicionar',
        confirmButtonColor: '#380050',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#FFEB3B',
        preConfirm: () => {
            const nome = Swal.getPopup().querySelector('#nome').value;
            const email = Swal.getPopup().querySelector('#email').value;
            const situacao = Swal.getPopup().querySelector('#situacao').value;
            const dataAdmissao = Swal.getPopup().querySelector('#dataAdmissao').value;
            if (!nome || !email || !situacao || !dataAdmissao) {
                Swal.showValidationMessage(`Por favor, preencha todos os campos`);
            }
            return { nome: nome, email: email, situacao: situacao, dataAdmissao: dataAdmissao };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            adicionarUsuario(result.value);
        }
    });
});

function adicionarUsuario(userData) {
    let url = $('meta[name="route-store-usuario"]').attr('content');
    $.ajax({
        url: url, // URL para enviar a atualização
        method: 'POST',
        data: {
            _token: $('meta[name="csrf-token"]').attr('content'), // Token CSRF do Laravel
            nome: userData.nome,
            email: userData.email,
            situacao: userData.situacao,
            data_admissao: userData.dataAdmissao
        },
        success: function(response) {
            refreshDataTableUsuarios()
            Swal.fire({
                title: response.success ? "Sucesso" : "Opss",
                text: response.message,
                icon: response.success ? "success" : "error"
            })
        },
        error: function(error) {
            let response = error.responseJSON; // Pega o JSON retornado pelo servidor
            let message = response.message;
            Swal.fire('Erro', 'Falha ao atualizar o usuário: ' + message, 'error');
        }
    });
}

// Evento para editar usuário
$(document).on('click', '.edit-btn', function () {
    let userId = $(this).data('id'); // Pega o ID do botão clicado
    let url = $('meta[name="route-show-usuario"]').attr('content') + '/' + userId;

    $.ajax({
        url: url,
        method: 'GET',
        success: function(response) {
            Swal.fire({
                title: 'Editar Usuário',
                html: `
                    <input type="text" id="nome" class="swal2-input" placeholder="Nome" value="${response.nome}">
                    <input type="email" id="email" class="swal2-input" placeholder="Email" value="${response.email}">
                    
                    <!-- Campo Situação com opções de Ativo e Inativo -->
                    <select id="situacao" class="swal2-input">
                        <option value="Ativo" ${response.situacao === 'Ativo' ? 'selected' : ''}>Ativo</option>
                        <option value="Inativo" ${response.situacao === 'Inativo' ? 'selected' : ''}>Inativo</option>
                    </select>

                    <!-- Campo Data de Admissão -->
                    <input type="date" id="dataAdmissao" class="swal2-input" value="${moment(response.data_admissao).format('YYYY-MM-DD')}">
                `,
                confirmButtonText: 'Salvar',
                confirmButtonColor: '#380050',
                showCancelButton: true,
                cancelButtonText: 'Cancelar',
                cancelButtonColor: '#FFEB3B',
                preConfirm: () => {
                    const nome = Swal.getPopup().querySelector('#nome').value;
                    const email = Swal.getPopup().querySelector('#email').value;
                    const situacao = Swal.getPopup().querySelector('#situacao').value;
                    const dataAdmissao = Swal.getPopup().querySelector('#dataAdmissao').value;

                    if (!nome || !email || !situacao || !dataAdmissao) {
                        Swal.showValidationMessage(`Por favor, preencha todos os campos`);
                    }

                    return { nome: nome, email: email, situacao: situacao, dataAdmissao: dataAdmissao };
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    atualizarUsuario(userId, result.value);
                }
            });
        },
        error: function(error) {
            Swal.fire('Erro', 'Falha ao buscar os dados do usuário', 'error');
        }
    });
});

function atualizarUsuario(userId, userData) {
    let url = $('meta[name="route-put-usuario"]').attr('content') + '/put/' + userId;
    $.ajax({
        url: url, 
        method: 'POST',
        data: {
            _method: 'PUT', 
            _token: $('meta[name="csrf-token"]').attr('content'), 
            nome: userData.nome,
            email: userData.email,
            situacao: userData.situacao,
            data_admissao: userData.dataAdmissao
        },
        success: function(response) {
            refreshDataTableUsuarios()
            Swal.fire({
                title: response.success ? "Sucesso" : "Opss",
                text: response.message,
                icon: response.success ? "success" : "error"
            })
        },
        error: function(error) {
            let response = error.responseJSON;
            let message = response.message;
            Swal.fire('Erro', 'Falha ao atualizar o usuário: ' + message, 'error');
        }
    });
}

$(document).on('click', '.delete-btn', function () {
    let userId = $(this).data('id'); 
    Swal.fire({
        title: 'Tem certeza?',
        text: "Esta ação não pode ser desfeita!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#380050',
        confirmButtonText: 'Sim, excluir!',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#FFEB3B',
    }).then((result) => {
        if (result.isConfirmed) {
            deletarUsuario(userId)
        }
    });
});

function deletarUsuario(userId)
{
    let url = $('meta[name="route-delete-usuario"]').attr('content') + '/delete/' + userId;
    $.ajax({
        url: url,
        method: 'POST',
        data: {
            _method: 'DELETE', 
            _token: $('meta[name="csrf-token"]').attr('content'), 
        },
        success: function(response) {
            refreshDataTableUsuarios()
            Swal.fire({
                title: response.success ? "Sucesso" : "Opss",
                text: response.message,
                icon: response.success ? "success" : "error"
            })
        },
        error: function(error) {
            let response = error.responseJSON; // Pega o JSON retornado pelo servidor
            let message = response.message;
            Swal.fire('Erro', 'Falha ao deletar o usuário: ' + message, 'error');
        }
    });
}