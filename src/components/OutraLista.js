
function OutraLista({itens}){
return(
    <>
        <h3>Lista de coisas boas:</h3>
        {itens.lenght > 0 ? (
             itens.map((item, index) => (//de onde vem esse item? ele é diferente da variavel.
            <p key={index}>{item}</p>//explica melhor sobre esse index. o index nao é a forma mais recomendada de se usar e sim uma chave ID que venha do BackEnd
        ))) : (                               /*se excluir o index a lista aparece normal ao renderizar a pagina, mas da erro no dev tools */
            <p>Não há itens na lista!</p>
        )}                               
            {/*na linha 6 inicia a cindição if. se os itens for > 0 imprime a lista
            e na linha 10 é o else : se nao for maior que zero,imprime a msg que ta dentro do else*/}
    </>
)
}
export default OutraLista