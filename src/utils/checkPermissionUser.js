const checkPermissionUser = ({ role, idParams, idUser }) => {
  //permission: admin || logged user que busca a si mismo
  if (role !== 'admin' && idUser !== idParams) {
    const error = new Error('Pemrission denied')
    error.status = 403
    next(error)
  } else {
    return
  }
}

module.exports = { checkPermissionUser }
