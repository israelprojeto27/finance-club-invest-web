import Head from 'next/head'
import { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Link from 'next/link';

const useStyles = makeStyles({
    table: {
        marginLeft: '100px',
        marginTop: '100px'
    },
});


function Layout({ title, children }) {

    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const primaryMenu = [
        { id: 1, label: 'Ações', class: 'bx bx-home-alt icon', path: '/acoes', title: 'Informações sobre Ações' },
        { id: 2, label: 'Revenue', class: 'bx bx-bar-chart-alt-2 icon', path: '/', title: '' },
        { id: 3, label: 'Notifications', class: 'bx bx-pie-chart-alt icon', path: '/', title: '' },
        { id: 4, label: 'Analytics', class: 'bx bx-wallet icon', path: '/', title: '' },
        { id: 5, label: 'Wallets', class: 'bx bx-bell icon', path: '/', title: '' },        
      ];

    function handleNavBar(event) {
        console.log('Clicou no nav bar');
        if (open === true) {
            setOpen(false)
        }
        else {
            setOpen(true)
        }
    }

    return (
        <div className="container">
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />

                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <link rel="stylesheet" href="/style.css" />
                <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet' />
            </Head>

            <main >
                <nav class={open ? ("sidebar open") : ("sidebar close")}>
                    <header>
                        <div class="image-text">
                            <span class="image">

                            </span>

                            <div class="text logo-text">
                                <span class="name">Menu</span>
                            </div>
                        </div>

                        <i class='bx bx-chevron-right toggle' onClick={(e) => handleNavBar(e)}></i>
                    </header>

                    <div class="menu-bar">
                        <div class="menu">

                            <ul class="menu-links">

                                {primaryMenu.map((item) => {
                                    return (
                                        <li class="nav-link">
                                            <Link href={item.path} key={item.id} passHref>
                                                <a title={item.title}>
                                                    <i class={item.class} ></i>
                                                    <span class="text nav-text">{item.label}</span>
                                                </a>
                                            </Link>                                            
                                        </li>
                                    );
                                })}

                            </ul>
                        </div>

                        <div class="bottom-content">
                            <li class="">
                                <a href="#">
                                    <i class='bx bx-log-out icon' ></i>
                                    <span class="text nav-text">Logout</span>
                                </a>
                            </li>
                        </div>
                    </div>
                </nav>

                <section class="home">
                    <div class="text">Finance Invest Club</div>

                    {children}
                </section>    

            </main>

        </div>
    );
}

export default Layout;