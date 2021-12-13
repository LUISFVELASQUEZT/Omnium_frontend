import { gql } from "@apollo/client";

const EDITAR_PERFIL = gql`
  mutation EditarPerfil(
    $id: String!
    $nombre: String!
    $apellido: String!
    $identificacion: String!
    $correo: String!
    $password: String!
    $estado: Enum_EstadoUsuario
  ) {
    editarPerfil(
      _id: $id
      nombre: $nombre
      apellido: $apellido
      identificacion: $identificacion
      correo: $correo
      password: $password
      
    ) {
      _id
      nombre
      apellido
      identificacion
      correo
      rol
      password
      estado
    }
  }
`;

export { EDITAR_PERFIL };
