import React from 'react';

const AlunoComponente = ({ alunos }) => {
    return (
        <div>
            <table border='1px'>
                <thead>
                    <tr>
                        <th>Nome:</th>
                        <th>Email:</th>
                        <th>Curso:</th>
                    </tr>
                </thead>
                <tbody>
                    {alunos.map((aluno) => (
                        <tr key={aluno.id}>
                            <td>{aluno.nome}</td>
                            <td>{aluno.email}</td>
                            <td>{aluno.curso}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AlunoComponente;
