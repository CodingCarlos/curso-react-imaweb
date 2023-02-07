import { Usuario, newUsuario } from './usuario';

interface UsuarioAdmin extends Usuario {
    permisos: string[];
}

export interface Oficina {
    manager: UsuarioAdmin;
    empleados: Usuario[];
    direccion: string;
}

export const juan:UsuarioAdmin = {
    ...newUsuario('Juan'),
    permisos: []
};
