import {useState} from 'react';
import './styles/main.css'
import './styles/components.css'

import donald_photo from './assets/images/donald_trump.jpg';
import {Display_image} from './components/display.jsx'

export default function App(){
    return(
        
        <body>
           <header className="Header">
                  <h1> la cabecera </h1>
           </header>
          <br> 
          </br>
            <main className="container">
                <aside  className="left_panel">
                    <h2>panel izquierdo</h2>
                </aside>

                <section className="center_panel">
                    <h2>contenido central</h2>
                </section>

                <aside className="right_panel">
                    <h2> panel derecho </h2>
                </aside>
            </main>

            <footer className="Footer">
                <h2>los pieceros</h2>
            </footer>
        </body>  
    );
}

