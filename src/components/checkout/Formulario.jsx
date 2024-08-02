
const Formulario = ({ handleSubmitForm, handleChangeInput, datosForm }) => {
  return (
    <form onSubmit={handleSubmitForm}>
    <label>Nombre:</label>
    <input type="text" name='nombre' value={datosForm.nombre} onChange={handleChangeInput}/>

    <label>Telefono:</label>
    <input type="text" name='telefono' value={datosForm.telefono} onChange={handleChangeInput}/>

    <label>Email:</label>
    <input type="text" name='email' value={datosForm.email} onChange={handleChangeInput}/>

    <button type='submit'>enviar orden</button>
</form>
  )
}

export default Formulario