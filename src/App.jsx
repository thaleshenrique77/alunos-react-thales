import React, { useState, useEffect } from 'react';
import AlunoComponente from './components/AlunoComponente';
import CriarAlunoComponente from './components/CriarAlunoComponente';

const url = 'http://localhost:3001/alunos';

const App = () => {
    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            const data = await response.json();
            setAlunos(data);
        }
        fetchData();
    }, []);

    return (
        <div className="App">
            <CriarAlunoComponente setAlunos={setAlunos} />
            <AlunoComponente alunos={alunos} />
        </div>
    );
};

export default App;
