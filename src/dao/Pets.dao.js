import petModel from "./models/Pet.js";



export default class Pet {

    get = (params) => {
        return petModel.find(params)
    }

    getBy = (params) => {
        return petModel.findOne(params);
    }

    save = async (doc) => {
        return await petModel.create(doc);
    }

    update = (id, doc) => {
        return petModel.findByIdAndUpdate(id, { $set: doc })
    }

    delete = (id) => {
        return petModel.findByIdAndDelete(id);
    }
}