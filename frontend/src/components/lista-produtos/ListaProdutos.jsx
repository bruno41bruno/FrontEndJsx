import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';


class ListaProdutos extends Component {
    repo;
    constructor(props){
        super(props);
        this.state = {
            list: []
        };  
    }
    componentDidMount(){
        this.repo = this.props.repo;
        this.setState({
            list : this.repo.list()
        })
        this.repo.inscrever(this.getProdutos.bind(this))
    }
    componentWillUnmount(){
        this.repo.desinscrever(this.getProdutos.bind(this))
    }
    getProdutos(list){
        this.setState({
            list : list
        })
    }
    render() { 
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
                        {this.state.list.map((row)=>(
                        <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                        {row.id}
                        </TableCell>
                        <TableCell align="center">{row.nome}</TableCell>
                        <TableCell align="center">{row.descricao}</TableCell>
                        <TableCell align="center">{row.categoria}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
         );
        }}
export default ListaProdutos;