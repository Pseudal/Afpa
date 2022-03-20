import React, { useState } from 'react';
import { BsXCircleFill, BsCheckCircleFill } from "react-icons/bs";
import { FaPlusSquare, FaTrashAlt, FaEdit } from "react-icons/fa";


const TableProduct = ({ prods, removeProduct }) => {

  const initialState = {name: "", price: 0, image: "", available: false};
  const [product, setProduct] = useState(initialState);

  const handleChange = (e) =>{
    let { name, value, checked, type } = e.target;
    value = type === 'checkbox' ? checked : value;
        setProduct({...product, [name]:value});
        console.log(product);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const prod = { reference: uid(), ...product};
        props.prodFunc(prod);
        console.log(prod);
        setProduct(initialState);
    }

  const [isOpen, setIsOpen] = useState(false);
  const onClickHeader = (test) => {
    console.log(test);
    test2 = test;
    setIsOpen(!isOpen);
  };

  return (
    <>
            <div className={`row ${isOpen ? "nope" : "visible"}`}>
        <div className="col-4 offset-4">
          <div className="card">
            <div className="card-header">
              <h2>Modifier un produit</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Produit</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Votre produit"
                    onChange={handleChange}
                    value={prods[test2].name}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="price">Prix</label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    className="form-control"
                    placeholder="Votre prix"
                    onChange={handleChange}
                    value={prods[test2].price}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="image">Image</label>
                  <input
                    type="text"
                    id="image"
                    name="image"
                    className="form-control"
                    placeholder="url..."
                    onChange={handleChange}
                    value={prods[test2].image}
                  />
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="available"
                    name="available"
                    onChange={handleChange}
                    checked={prods[test2].available}
                  />
                  <label className="form-check-label" htmlFor="available">
                    Disponibilité
                  </label>
                </div>
                <button className="btn btn-warning col-12">Soumettre</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    <div className='container mt-5'>
      <div>
        <table className='table table-striped table-bordered text-center'>
          <thead>
            <tr>
              <th>#</th>
              <th>Article</th>
              <th>Prix</th>
              <th>Image</th>
              <th>Disponibilité</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {prods.map((prod, index) => (
              <tr key={prod.reference}>
                <td>{prod.reference}</td>
                <td>{prod.name}</td>
                <td>{prod.price}</td>
                <td><img src={`./images/${prod.image}`} className="img-fluid rounded-start" width={50} alt="..." /></td>
                <td>{
                  prod.available ? <BsCheckCircleFill className="text-success fs-4" /> : <BsXCircleFill className="text-danger fs-4" />
                }</td>
                <td>
                  <button className='btn btn-danger' 
                    onClick={() => {
                      if(window.confirm('Etes vous sûr ...'))
                        {removeProduct(index)}}
                    }><FaTrashAlt/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default TableProduct