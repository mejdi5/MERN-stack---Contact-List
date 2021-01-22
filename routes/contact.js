const express = require('express')
const router = express.Router()
const Contact = require('../models/Contact')

//path localhost:5000/contacts/test
//test route 
//public or private
router.get('/test', (req, res) => {
    res.send('tested')
})

//add contact
//path localhost:5000/contacts/addContact
router.post('/addContact', (req, res) => {
    const {name, email, phone} = req.body
    const newContact = new Contact({
        name, email, phone
    })
    newContact.save()
    .then(contact => res.send(contact))
    .catch((err) => console.log(err))
})

//get all contacts
//path localhost:5000/contacts/all
router.get('/all', (req, res) => {
    Contact.find()
    .then(contacts => res.send(contacts))
    .catch((err) => console.log(err))
})

//get one contact 
//path localhost:5000/contacts/one/id
router.get('/one/:_id', (req, res) => {
    Contact.findOne({_id: req.params._id})
    .then(contact => res.send(contact))
    .catch((err) => console.log(err))
})

//delete contact
//path localhost:5000/contacts/deleteContact/id
router.delete('/deleteContact/:_id', (req, res) => {
    Contact.findOneAndDelete({_id: req.params._id})
    .then(contact => res.send(contact))
    .catch((err) => console.log(err))
})



//edit contact
//path localhost:5000/contacts/editContact/id
router.put('/editContact/:_id', (req, res) => {
    const {_id} = req.params
    const {name, email, phone} = req.body 
    Contact.findOneAndUpdate(_id,{$set:{name, email, phone}} )
    .then(contact => res.send(contact))
    .catch((err) => console.log(err))
})

module.exports = router