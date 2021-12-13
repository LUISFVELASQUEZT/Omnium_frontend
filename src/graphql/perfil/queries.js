import { gql } from "@apollo/client";

const GET_PERFIL = gql`
  query Perfil($_id: String!) {
    Perfil(_id: $_id) {
      _id
      nombre
      apellido
      correo
      identificacion
      rol
      password
      estado
    }
  }
`;
export { GET_PERFIL };
