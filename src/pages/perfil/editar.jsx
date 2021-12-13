
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_PERFIL } from 'graphql/perfil/queries';
import Input from 'components/Input';
import ButtonLoading from 'components/ButtonLoading';
import useFormData from 'hooks/useFormData';
import { toast } from 'react-toastify';
import { EDITAR_PERFIL } from 'graphql/perfil/mutations';
import DropDown from 'components/Dropdown';
import { Enum_EstadoUsuario } from 'utils/enums';

const EditarPerfil = () => {
  const { form, formData, updateFormData } = useFormData(null);
  const { _id } = useParams();

  const {
    data: queryData,
    error: queryError,
    loading: queryLoading,
  } = useQuery(GET_PERFIL, {
    variables: { _id },
  });

  const [EditarPerfil, { data: mutationData, loading: mutationLoading, error: mutationError }] =
    useMutation(EDITAR_PERFIL);

  const submitForm = (e) => {
    e.preventDefault();
    delete formData.rol;
    EditarPerfil({
      variables: { _id, ...formData },
    });
  };

  useEffect(() => {
    if (mutationData) {
      toast.success('Usuario modificado correctamente');
    }
  }, [mutationData]);

  useEffect(() => {
    if (mutationError) {
      toast.error('Error modificando el usuario');
    }

    if (queryError) {
      toast.error('Error consultando el usuario');
    }
  }, [queryError, mutationError]);

  if (queryLoading) return <div>Cargando....</div>;

  return (
    <div className='flew flex-col w-full h-full items-center justify-center p-10'>
      <Link to='/perfil'>
        <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900' />
      </Link>
      <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>Editar Usuario</h1>
      <form
        onSubmit={submitForm}
        onChange={updateFormData}
        ref={form}
        className='flex flex-col items-center justify-center'
      >
         <Input
          label='Nombre de la persona:'
          type='text'
          name='nombre'
          defaultValue={queryData.Perfil.nombre}
          required={true}
          readonly='readonly'                
        />
        <Input
          label='Apellido de la persona:'
          type='text'
          name='apellido'
          defaultValue={queryData.Perfil.apellido}
          required={true} 
        />
        <Input
          label='Correo de la persona:'
          type='email'
          name='correo'
          defaultValue={queryData.Perfil.correo}
          required={true}          
        />
        <Input
          label='Identificación de la persona:'
          type='text'
          name='identificacion'  
          defaultValue={queryData.Perfil.identificacion}
          required={true}
        />
         <Input
          label='Contraseña:'
          type='password'
          name='password'  
          defaultValue={queryData.Perfil.password}
          required={true}
        />
         <DropDown
          label='Estado de la persona:'
          name='estado'
          defaultValue={queryData.Perfil.estado}
          required={true}          
          options={Enum_EstadoUsuario}
          disable={true}
         
        /> 
        <span>Rol del usuario: {queryData.Perfil.rol}</span> 
        <ButtonLoading
          disabled={Object.keys(formData).length === 0}
          loading={mutationLoading}
          text='Confirmar'
        />
      </form>
    </div>
  );
};

export default EditarPerfil;
