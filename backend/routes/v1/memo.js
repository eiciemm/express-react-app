var express = require('express');
var router = express.Router();

var sqlite3 = require('sqlite3');

//データベースオブジェクトの取得
const db = new sqlite3.Database('memo_data.db');

router.get('/', (req, res, next) => {
    db.serialize(() => {
        db.all("select * from memos", (err, rows) => {
            if (!err) {
                const data = {
                    title: 'To Do メモ 一覧表示',
                    content: rows //取得したDBデータ
                }
                res.json({ data });
            }
        })
    })
});

router.post('/', (req, res, next) => {
    const tx = req.body.text;
    db.run('insert into memos (text) values (?)', tx, (err) => {
        if (!err) {
            res.send('OK');
        }
    })
});

router.put('/:id', (req, res, next) => {
    const id = req.params.id
    const tx = req.body.text;
    const q = "update memos set text = ? where id = ?";
    db.run(q, tx, id, (err) => {
        if (!err) {
            res.send('OK');
        }
    })
});

router.delete('/:id', (req, res, next) => {
    const id = req.params.id
    const q = "delete from memos where id = ?";
    db.run(q, id, (err) => {
        if (!err) {
            res.send('OK');
        }
    })
});

module.exports = router;
