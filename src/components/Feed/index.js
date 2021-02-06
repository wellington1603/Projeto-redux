import React from "react";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button"

import { bindActionCreators } from "redux";
// nossas actions
import * as CarrinhoAction from "../../store/actions/actions";

const Feed = ({ roupas, adicionarCarrinho }) => {
  return (
    <section>
      <h1>Comprar Guitarra</h1>
      
        {roupas.map((item) => (
          <li key={item.id}>
            {item.modelo}
            <Button variant="success" size="sm" onClick={() => adicionarCarrinho(item)}>Comprar</Button>
          </li>
        ))}
      
    </section>
  );
};

const mapStateToProps = (state) => ({
  roupas: state.roupas.feed,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(CarrinhoAction, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
