import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';

function ListaProdutos({repoProd}) {
    let [lista, setLista] = useState(repoProd.list());
    repoProd.inscrever(setLista);
    return (
        <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="center">Nome</TableCell>
                        <TableCell align="center">Descrição</TableCell>
                        <TableCell align="center">Categoria</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {lista.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="center">{row.nome}</TableCell>
                            <TableCell align="center">{row.descricao}</TableCell>
                            <TableCell align="center">{row.categoria.nome}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default ListaProdutos;