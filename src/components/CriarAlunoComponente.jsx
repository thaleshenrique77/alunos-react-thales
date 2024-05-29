import React, { useState } from 'react';

const url = 'http://localhost:3001/alunos';

const CriarAlunoComponente = ({ setAlunos }) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [curso, setCurso] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const aluno = { nome, email, curso };
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(aluno)
        });

        const addAluno = await response.json();
        setAlunos((prevAlunos) => [...prevAlunos, addAluno]);

        setNome('');
        setEmail('');
        setCurso('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Nome:</label>
                <input type='text' value={nome} onChange={(e) => setNome(e.target.value)} /><br />
                <label>Email:</label>
                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                <label>Curso:</label>
                <input type='text' value={curso} onChange={(e) => setCurso(e.target.value)} /><br />
                <button type='submit'>Adicionar Aluno</button>
            </form>
        </div>
    );
};

export default CriarAlunoComponente;
