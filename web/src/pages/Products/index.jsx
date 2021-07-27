import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { AiFillDelete } from 'react-icons/ai'
import './styles.css'
import { Redirect, useHistory } from 'react-router-dom';
import { api } from '../../service/api';

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
  const history = useHistory()
  const [products, setProducts] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [qntd, setQntd] = useState('')
  const [description, setDescription] = useState('')
  const user = JSON.parse(localStorage.getItem('user'))

  async function getProducts() {
    try {
      const products = await api.get('/products', {
        headers: {'Authorization': 'Bearer '+ user.token}
      })
      setProducts(products.data)
    } catch (error) {
      console.log(error)
      alert('Erro interno de servidor')
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  console.log(products)

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (!user) {
    history.push('/')
  }

  async function handleSubmit(event) {
    event.preventDefault()

    const sendData = {
      name,
      description,
      price,
      qntd
    }
    try {
      await api.post('/products', sendData, {
        headers: {'Authorization': 'Bearer '+ user.token}
      })
      setProducts([sendData, ...products])
      handleClose()
    } catch (error) {
      alert('Erro de requisição')
    }
  }

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
            <form className={classes.form} onSubmit={handleSubmit}>

              <input type="text" 
              className={classes.input} 
              name="name" id="name-product" 
              placeholder="Nome"
              onChange={({target}) => setName(target.value)}/>

              <input type="text" 
              className={classes.input}
              name="description" 
              id="description" 
              placeholder="Descrição"
              onChange={({target}) => setDescription(target.value)}/>

              <input type="number" 
              className={classes.input} 
              name="price" id="price" 
              placeholder="Preço"
              onChange={({target}) => setPrice(target.value)}/>

              <input type="number" 
              className={classes.input} 
              name="qntd" id="qntd" 
              placeholder="Quantidade"
              onChange={({target}) => setQntd(target.value)}/>

              <button type="submit" 
              className={classes.button}>Cadastrar</button>
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
          </tr>
          </thead>
          <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{`${product.price} reais`}</td>
              <td>{product.qntd}</td>
              <td><AiFillDelete color="red" fontSize="20px"/></td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
    )
    </>
  );
}

export default Products;