<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Lang;

class UsuarioController extends Controller
{
    /**
     * Lista todos os usuários
     */
    public function index()
    {
        // Obtém todos os usuários do banco de dados
        $usuarios = Usuario::all();
        return view('usuarios.index', compact('usuarios'));
    }

    /**
     * Exibe o formulário de criação de usuário
     */
    public function create()
    {
    }

    /**
     * Salva um novo usuário no banco de dados
     */
    public function store(Request $request)
    {
        // Validação dos dados
        $request->validate([
            'nome' => 'required|string|max:255',
            'email' => 'required|email|unique:usuarios,email',
            'situacao' => 'required|in:Ativo,Inativo',
            'data_admissao' => 'required|date',
        ],[
            'nome.required' => 'O campo nome é obrigatório.',
            'nome.string' => 'O nome deve ser uma cadeia de caracteres.',
            'nome.max' => 'O nome não pode ter mais do que 255 caracteres.',
            
            'email.required' => 'O campo e-mail é obrigatório.',
            'email.email' => 'O e-mail deve ser um endereço de e-mail válido.',
            'email.unique' => 'O e-mail informado já está em uso.',

            'situacao.required' => 'O campo situação é obrigatório.',
            'situacao.in' => 'A situação deve ser Ativo ou Inativo.',

            'data_admissao.required' => 'O campo data de admissão é obrigatório.',
            'data_admissao.date' => 'O campo data de admissão deve ser uma data válida.',
        ]);

        // Cria o novo usuário
        Usuario::create($request->all());

        return response()->json(["success" => true, "message" => "Usuário criado com sucesso!"]);
    }

    /**
     * Exibe os detalhes de um usuário específico
     */
    public function show(string $id)
    {
        $usuario = Usuario::findOrFail($id);
        return response()->json($usuario);
    }

    public function getAll()
    {
        return response()->json(Usuario::all());
    }

    /**
     * Exibe o formulário de edição de um usuário específico
     */
    public function edit(string $id)
    {
    }

    /**
     * Atualiza um usuário no banco de dados
     */
    public function update(Request $request, string $id)
    {
        // Validação dos dados
        $request->validate([
            'nome' => 'required|string|max:255',
            'email' => 'required|email|unique:usuarios,email,' . $id,
            'situacao' => 'required|in:Ativo,Inativo',
            'data_admissao' => 'required|date',
        ],[
            'nome.required' => 'O campo nome é obrigatório.',
            'nome.string' => 'O nome deve ser uma cadeia de caracteres.',
            'nome.max' => 'O nome não pode ter mais do que 255 caracteres.',
            
            'email.required' => 'O campo e-mail é obrigatório.',
            'email.email' => 'O e-mail deve ser um endereço de e-mail válido.',
            'email.unique' => 'O e-mail informado já está em uso.',

            'situacao.required' => 'O campo situação é obrigatório.',
            'situacao.in' => 'A situação deve ser Ativo ou Inativo.',

            'data_admissao.required' => 'O campo data de admissão é obrigatório.',
            'data_admissao.date' => 'O campo data de admissão deve ser uma data válida.',
        ]);

        // Obtém o usuário pelo ID e atualiza os dados
        $usuario = Usuario::findOrFail($id);
        $usuario->update($request->all());

        return response()->json(["success" => true, "message" => "Usuário atualizado com sucesso!"]);
    }

    /**
     * Exclui um usuário do banco de dados
     */
    public function destroy(string $id)
    {
        // Obtém o usuário pelo ID e o exclui
        $usuario = Usuario::findOrFail($id);
        $usuario->delete();

        return response()->json(["success" => true, "message" => "Usuário deletado com sucesso!"]);
    }
}
