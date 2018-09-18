var connection = require('./db_connection')

function getUsers(callback) {
    var sql = 'SELECT * FROM usuario_info'
    connection.query(sql, function (err, result, fields) {
        if (err) {
            callback(err, null)
            throw err
        }
        callback(null, result)
    })
}

function getUser(id_usuario, callback) {
    var sql = 'SELECT * FROM Usuarios WHERE id_usuario = ?'
    connection.query(sql, id_usuario, function (err, result, fields) {
        if (err) {
            callback(err, null)
            throw err
        }
        callback(null, result)
    })
}

function getAuth(email, callback) {
    var sql = 'SELECT senha FROM Usuarios WHERE email = ?'
    connection.query(sql, [email], function(err, result) {
        if (err) {
            callback(err, null)
            throw err    
        }
        callback(null, result)
    })
}

function createUser(email, nome, senha, curso, semestre, callback) {
    var sql = 'INSERT INTO Usuarios (email, nome, senha, curso, semestre) VALUES(?, ?, ?, ?, ?)'
    connection.query(sql, [email, nome, senha, curso, semestre], function (err, result, fields) {
        if (err) {
            callback(err, null)
            throw err
        }
        callback(null, result)
    })
}

function deleteUser(id_usuario, callback) {
    // ID_sala ou nome?
    var sql = 'DELETE FROM Usuarios WHERE id_usuario = ?'
    connection.query(sql, id_usuario, function (err, result, fields) {
        if (err) {
            callback(err, null)
            throw err
        }
        callback(null, result)
    })
}

function updateUser(id_usuario, data, callback) {
    var sql = 'UPDATE Usuarios SET ? WHERE id_usuario = ?'
    connection.query(sql, [data, id_usuario], function (err, result, fields) {
        if (err) {
            callback(err, null)
            throw err
        }
        callback(null, result)
    })  
}

module.exports = { getUsers, getUser, getAuth, createUser, deleteUser, updateUser }