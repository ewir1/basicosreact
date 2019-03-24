import React, { Component } from 'react';
import Productos from './Productos';
import Footer from './Footer';
import Header from './Header';


class Aplicacion extends Component {

    // constructor(props) {
    //     super();
    //     this.state = {
    //         productos : [
    //             {nombre: 'Libro', precio: 200},
    //             {nombre: 'Disco de musica', precio: 100},
    //             {nombre: 'Instrumento Musical', precio: 800},
    //             {nombre: 'Reproductor Musical', precio: 1500},
    //             {nombre: 'Album Ed. Especial', precio: 500}
    //         ]
    //     };
    // }


    state = {
        productos : []
    };

    componentDidMount() {
        // Variable con productos

        const productos = [
                {nombre: 'Libro', precio: 200},
                {nombre: 'Disco de musica', precio: 100},
                {nombre: 'Instrumento Musical', precio: 800},
                {nombre: 'Reproductor Musical', precio: 1500},
                {nombre: 'Album Ed. Especial', precio: 500}
        ]

        setTimeout(() => {
            this.setState({
                productos : productos  
            });
        }, 3000);
    };

  
    

    
    render() {
        return (
            <div>
                <Header titulo="Nuestra tienda virtual" />
                <Productos productos={this.state.productos} />
                <Footer />
            </div>
        )
    }
}


export default Aplicacion;