import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';


class ListaCategoria extends Component {
    id;
    nome;
    descicao;
    constructor(props){
        super(props);
        this.rowscat = props.lista;
    }
    useStyles = makeStyles({
        table: {
          minWidth: 650,
        },
      });
    render() { 
        return ( 
            <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="center">Nome</TableCell>
                        <TableCell align="center">Descrição</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                        <TableCell component="th" scope="row">{}
                        </TableCell>
                        <TableCell align="center">{}</TableCell>
                        <TableCell align="center">{}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
         );
        }}
export default ListaCategoria;