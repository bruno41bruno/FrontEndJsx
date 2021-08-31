import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class ListaProdutos extends Component {

    rows = [

    ]
    cells = [

    ]
    render() { 
        return ( 
            <TableHead>
            <TableRow>
            <TableCell padding="checkbox"> 
            <Checkbox/>
            </TableCell>
            </TableRow>
            </TableHead>
         );
    }
}
export default ListaProdutos;