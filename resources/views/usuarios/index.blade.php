<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="route-reload-datatable" content="{{ route('reloadDatatable') }}">
    <meta name="route-store-usuario" content="{{ route('storeUsuario') }}">
    <meta name="route-show-usuario" content="{{ url('usuarios') }}">
    <meta name="route-put-usuario" content="{{ url('usuarios') }}">
    <meta name="route-delete-usuario" content="{{ url('usuarios') }}">
    <title>Cadastro de Usuários</title>
    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- DataTables CSS -->
    <link rel="stylesheet" href="https://cdn.datatables.net/1.11.5/css/jquery.dataTables.min.css">
    <!-- Bootstrap Icons -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
    <!-- SweetAlert2 CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;600&display=swap" rel="stylesheet">
        
    @vite(['resources/css/app.css', 'resources/css/users.css']);
</head>
<body>
    <div class="my-6" style="width: 90%; margin: 0 auto">
        <div class="row mb-3 custom-background">
            <div class="col">
                <img src="/images/logoUmentor.png" alt="Umentor Logo" style="height: 50px; margin-right: 20px;">
            </div>
            <div class="col text-end">
                <button type="button" class="btn btn-primary btn-lg" id="addUserBtn">
                    <i class="bi bi-person-plus"></i> Adicionar Usuário
                </button>
            </div>
        </div>
        
        <div class="table-responsive" id="dataTableUsuarios">
            
        </div>
    </div>

    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <!-- Bootstrap 5 JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    <!-- DataTables JS -->
    <script src="https://cdn.datatables.net/1.11.5/js/jquery.dataTables.min.js"></script>
    <!-- SweetAlert2 JS -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <!-- Moment Library -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/locale/pt-br.min.js"></script>

    @vite(['resources/js/app.js', 'resources/js/users.js']);
    
</body>
</html>
