import { useState } from "react";
import "./App.css";
import Restaurante from "./assets/hashtaurante.webp";
import { Nagevacao } from "./Navegacao";
import { ItemCardapio } from "./ItemCardapio";
import { pratosPrincipais, sobremesas, bebidas } from "./cardapio";

export function App() {
  const paginasMenu = [pratosPrincipais, sobremesas, bebidas];
  const [paginaSelecionada, atualizarPaginaSelecionada] = useState(0);
  return (
    <>
      <img src={Restaurante} alt="Capa" className="capa"></img>
      <Nagevacao atualizarPaginaSelecionada={atualizarPaginaSelecionada} />
      <div className="menu">
        {paginasMenu[paginaSelecionada].map((item) => (
          <ItemCardapio
            nome={item.nome}
            descricao={item.descricao}
            preco={item.preco}
            imagem={item.imagem}
          />
        ))}
      </div>
    </>
  );
}
