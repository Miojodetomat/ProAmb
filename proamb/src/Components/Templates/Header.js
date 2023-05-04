import './Header.css';
import Logo from '../../assets/img/Logo/ProAmb_logo-removebg-preview.png'
import BarraDePesquisa from '../BarraDePesquisa/BarraDePesquisa';
import React, { useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import { meuContext } from '../../Contexto';

export default function Header()
{
    const [user,setUser] = useContext(meuContext)

    useEffect(() => {
        function exibirPerfil() {
            if(user != null)
            {
                let header = document.getElementById('navegacao')
                header.removeChild(header.lastChild)
                header.removeChild(header.lastChild)
                
                let sectionIconPerfil = document.createElement('section')
                sectionIconPerfil.className = 'item'

                let lbUsername = document.createElement('span')
                lbUsername.innerHTML = user.username
                lbUsername.className = 'username'

                let imgPerfil = document.createElement('img')
                imgPerfil.src = user.foto
                imgPerfil.className = 'iconePerfil'

                header.appendChild(sectionIconPerfil)
                sectionIconPerfil.appendChild(lbUsername)
                sectionIconPerfil.appendChild(imgPerfil)
            }
            else
            {
                //fazer codigo pra quando usuario deslogar
            }
        }

        exibirPerfil()
    }, [user])

    return (
        <div className='header'>
            <header id='navegacao'>
                <Link to='/'>
                    <img src={Logo} alt='Logo ProAmb' id="logo"/>
                </Link>
                <h3 className='item'>
                    <Link to='/'>
                        Início
                    </Link>
                </h3>

                <BarraDePesquisa />

                <h3 className='item'>
                    <Link to='/aprender'>
                        Aprender
                    </Link>
                </h3>

                <h3 className='item'>
                    <Link to='/forum'>
                        Fórum
                    </Link>
                </h3>

                <h3 className='item'>
                    <Link to='/cadastrar'>
                        Cadastrar - Se
                    </Link>
                </h3>

                <section>
                    <Link to='/entrar'>
                        <div className='entrar'>
                            <span id="entrar">Entrar</span>
                        </div>
                    </Link>
                </section>
            </header>
        </div>
    )
}