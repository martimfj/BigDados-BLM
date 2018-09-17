var connection = require('./db_connection')

function getReservas(callback) {
    var sql = 'SELECT * FROM reserva_info'
    connection.query(sql, function (err, result, fields) {
        if (err) {
            callback(err, null)
            throw err
        }
        callback(null, result)
    })
}

function getReserva(id_reserva, callback) {
    var sql = 'SELECT * FROM Reservas WHERE id_reserva = ?'
    connection.query(sql, id_reserva, function (err, result, fields) {
        if (err) {
            callback(err, null)
            throw err
        }
        callback(null, result)
    })
}

function createReserva(id_usuario, id_sala, callback) {
    var sql = 'CALL adiciona_reserva(?, ?)'
    connection.query(sql, [id_usuario, id_sala], function (err, result, fields) {
        if (err) {
            callback(err, null)
            throw err
        }
        callback(null, result)
    })
}

function deleteReserva(id_reserva, callback) {
    // ID_sala ou nome?
    var sql = 'DELETE FROM Reservas WHERE id_reserva = ?'
    connection.query(sql, id_reserva, function (err, result, fields) {
        if (err) {
            callback(err, null)
            throw err
        }
        callback(null, result)
    })
}

function updateReserva(id_reserva, data, callback) {
    var sql = 'UPDATE Reservas SET ? WHERE id_reserva = ?'
    connection.query(sql, [data, id_reserva], function (err, result, fields) {
        if (err) {
            callback(err, null)
            throw err
        }
        callback(null, result)
    })  
}

module.exports = { getReservas, getReserva, createReserva, deleteReserva, updateReserva }
