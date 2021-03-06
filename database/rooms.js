var connection = require('./db_connection')

function getSalas(callback) {
    var sql = 'SELECT * FROM Salas'
    connection.query(sql, function (err, result, fields) {
        if (err) {
            callback(err, null)
            throw err
        }
        callback(null, result)
    })
}

function getSala(id_sala, callback) {
    // ID_sala ou nome?
    var sql = 'SELECT * FROM Salas WHERE id_sala = ?'
    connection.query(sql, id_sala, function (err, result, fields) {
        if (err) {
            callback(err, null)
            throw err
        }
        callback(null, result)
    })
}

function createSala(nome, lugares, callback) {
    var sql = 'INSERT INTO Salas (nome, lugares) VALUES (?, ?)'
    connection.query('START TRANSACTION;')
    connection.query(sql, [nome, lugares], function (err, result, fields) {
        if (err) {
            connection.query('ROLLBACK;')
            callback(err, null)
            throw err
        }
        connection.query('COMMIT;')
        callback(null, result)
    })
}

function deleteSala(id_sala, callback) {
    // ID_sala ou nome?
    var sql = 'DELETE FROM Salas WHERE id_sala = ?'
    connection.query(sql, id_sala, function (err, result, fields) {
        if (err) {
            callback(err, null)
            throw err
        }
        callback(null, result)
    })
}

function updateSala(id_sala, data, callback) {
    // ID_sala ou nome?
    var sql = 'UPDATE Salas SET ? WHERE id_sala = ?'
    connection.query(sql, [data, id_sala], function (err, result, fields) {
        if (err) {
            callback(err, null)
            throw err
        }
        callback(null, result)
    })
}

module.exports = { getSalas, getSala, createSala, deleteSala, updateSala }
