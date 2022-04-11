import Head from 'next/head'
import { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Layout from '../components/Layout';


const useStyles = makeStyles({
  table: {
    marginLeft: '200px',
    marginTop: '100px'
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <Layout title="Finance Invest Club">
      <table className={classes.table}>
        <tr>
          <td>Produto</td> <td>Descricao</td>
        </tr>         
      </table>

    </Layout>
  )
}
