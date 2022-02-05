const express = require('express');
const router = express.Router();
const pool = require('../db')

router.get('/add', (req, res) => { // FORM
    res.render('links/add');
});

router.post('/add', async (req,res) => {
    const { title,url,description } = req.body;
    const newLink = { 
        title: title, 
        url: url, 
        description: description
    };
    await pool.query('INSERT INTO links set ?',[newLink]);
    res.redirect('/links');
});
router.get('/', async (req,res)=> {
    
    const userLinks = await pool.query('SELECT * FROM links');
    console.log(userLinks);
    res.render('links/list',{userLinks});
});

router.delete('/:id', async (req,res)=> {
    
    const userLinks = await pool.query('SELECT * FROM links');
    console.log(userLinks);
    res.render('links/list',{userLinks});
});


module.exports = router;