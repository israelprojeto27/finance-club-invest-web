import Head from 'next/head'
import Script from 'next/script'
import { useState } from 'react';

export default function Home() {

  const [open, setOpen] = useState(false);

  function handleNavBar(event)  {
      console.log('Clicou no nav bar');
      if ( open === true ){
        setOpen(false)
      }
      else {
        setOpen(true)
      }      
  }

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />

        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />


        <link rel="stylesheet" href="/style.css" />


        <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet' />

        <script>

 {/*        const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{sidebar.classList.toggle("close")})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
}); */}

        </script>

      </Head>

  <body class="dark">
      <main >
        <nav  class={open ? ("sidebar open") : ("sidebar close")}>
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
                <li class="nav-link">
                  <a href="#">
                    <i class='bx bx-home-alt icon' ></i>
                    <span class="text nav-text">Dashboard</span>
                  </a>
                </li>

                <li class="nav-link">
                  <a href="#">
                    <i class='bx bx-bar-chart-alt-2 icon' ></i>
                    <span class="text nav-text">Revenue</span>
                  </a>
                </li>

                <li class="nav-link">
                  <a href="#">
                    <i class='bx bx-bell icon'></i>
                    <span class="text nav-text">Notifications</span>
                  </a>
                </li>

                <li class="nav-link">
                  <a href="#">
                    <i class='bx bx-pie-chart-alt icon' ></i>
                    <span class="text nav-text">Analytics</span>
                  </a>
                </li>

                <li class="nav-link">
                  <a href="#">
                    <i class='bx bx-heart icon' ></i>
                    <span class="text nav-text">Likes</span>
                  </a>
                </li>

                <li class="nav-link">
                  <a href="#">
                    <i class='bx bx-wallet icon' ></i>
                    <span class="text nav-text">Wallets</span>
                  </a>
                </li>

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
      </section>

      </main>

      </body>
    </div>
  )
}
