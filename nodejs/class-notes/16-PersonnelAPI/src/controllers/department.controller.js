"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */

const Department = reqire('../models/department.model')

module.exports = {

    list: async (req, res) => {
        
        const data = await res.getModelList(Department)
    },
    create: async (req, res) => {
        
    },
    read: async (req, res) => {
        
    },
    update: async (req, res) => {
        
    },
    delete: async (req, res) => {
        
    }

}