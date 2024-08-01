import getUsuarios from "./usuarios/carga-get-usuarios.js";
import postUsuarios from "./usuarios/post-usuarios.js";
import { group, sleep } from "k6";

export default function(){
    group('GETUSUARIO - Controler Usuario',() => {
        getUsuarios();
    });

    group('POSTUSUARIO - Controler Post Usuarrio', () =>{
        postUsuarios();
    });

    sleep(1);
}