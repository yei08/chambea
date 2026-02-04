function Display_image(props){
    return(
        <section>
           <img
                src={props.imagen}
                alt={props.texto}    
            /> 
        </section>
    );
} 
export{Display_image}