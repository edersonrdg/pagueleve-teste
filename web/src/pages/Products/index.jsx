import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import './styles.css'

const useStyles = makeStyles((theme) => ({
  palette: {
    primary: {
      main: '#2C6271'
    },
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: '6px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 6.8, 3),
    textAlign: 'center'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(2)
  },
  input: {
    marginBottom: theme.spacing(2.6),
    padding: theme.spacing(1.2),
  },
  button: {
    backgroundColor: '#2C6271',
    color: '#FFF',
    fontWeight: 'bold',
    padding: theme.spacing(1, 2),
    marginTop: theme.spacing(2.0),
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transitionDuration: '0.3s',
    '&:hover': {
      backgroundColor: '#3d8ca1',
    }
  }
}));

function Products() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Sidebar />
      <div className="main-content">
      <div id="header">
        <h1>Produtos</h1>
        <button type="button" id="btn-primary" onClick={handleOpen}>Novo produto</button>
        <Modal
        aria-labelledby="transition-modal-title"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Novo produto</h2>
            <form className={classes.form}>
              <input type="text" className={classes.input} name="name" id="name-product" placeholder="Nome"/>
              <input type="text" className={classes.input} name="description" id="description" placeholder="Descrição"/>
              <input type="number" className={classes.input} name="price" id="price" placeholder="Preço"/>
              <input type="number" className={classes.input} name="qntd" id="qntd" placeholder="Quantidade"/>
              <button type="button" className={classes.button}>Cadastrar</button>
            </form>
          </div>
        </Fade> 
      </Modal>
      </div> 
      <div id="product-content">
        <table id="product-table">
          <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th>Data de criação</th>
            <th>Ultima edição</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Banana</td>
            <td>1 kg</td>
            <td>50 reais</td>
            <td>40</td>
            <td>399</td>
            <td>399</td>
            <td>
              <button type="button">Excluir</button>
            </td>
          </tr>
          <tr>
            <td>Banana</td>
            <td>1 kg</td>
            <td>50 reais</td>
            <td>40</td>
            <td>399</td>
            <td>399</td>
            <td>
              <button type="button">Excluir</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    )
    </>
  );
}

export default Products;