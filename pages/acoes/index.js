import Layout from "../../components/Layout";

import { useState } from 'react';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
  table: {
    marginLeft: '200px',
    marginTop: '100px'
  },
});


function Acoes() {
    const classes = useStyles();
    return (
        <Layout title="Finance Invest Club">
            <table className={classes.table}>
                <tr>
                    <td>Nome Acao</td> <td>Preco</td>
                </tr>
            </table>
        </Layout>
    );
}

export default Acoes;