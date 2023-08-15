import PropTypes from 'prop-types'/* PropTypes esse cara é um pacote que a gente importa,ja vem com react, é utilizado para definir os tipos Ex Number, String ... e tbm fazer validaçoes*/


/* retornando o item por meio de fragment <> </> */
function Item({marca, ano_lancamento}){
    return(
        <>      
        <li>{marca} - {ano_lancamento}</li>
        </>
    )
    }

     Item.propTypes ={ /*propTypes propriedade do componente*/
        marca: PropTypes.string.isRequired,/*aqui executa a logica do q foi importado e espera uma string e tbm obrigatório na propriedade marca */
        ano_lancamento: PropTypes.number,
    }

    /*defaultProps pode ser utilizado quando necessita imprimir alguma coisa e precisa esperar carregar do BD ou quando o usuario nao preencheu la do backEnd aih aqui no front pode usar como padrao N.A (nao preenchido)*/
   Item.defaultProps ={/*quando se declara o defaultProps o requerid nao funciona*/
    marca: 'Faltou a marca',
    ano_lancamento: 0,
   }

         
export default Item