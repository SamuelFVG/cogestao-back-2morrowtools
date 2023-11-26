const IAModel = require("../Models/IAModel");

class IAController {
  async create(req, res) {
    try{
    const IA = await IAModel.create(req.body);
    
    return res.status(200).json(IA);
    } catch (error) {
      res.status(500).json({message: "Deu ruim aqui!!", error: error.message})
    }
  }

  async read(req, res) {
    try{
    const IA = await IAModel.find();

    return res.status(200).json(IA);
    } catch(error){
      res.status(500).json({message: "Deu ruim aqui!!", error: error.message})
    }
  }

  async destroy(req, res) {
    try{
    const {id} = req.params;
    const ID_encontrado = await IAModel.findById(id);

    if(!ID_encontrado)
    return res.status(404).json({message: "Ferramenta não encontrada"})

    await IAModel.findByIdAndDelete(id);

    return res.status(200).json({ "mensagem": "Ferramenta deletada com sucesso"});
    } catch(error){
      res.status(500).json({message: "Deu ruim aqui!!", error: error.message})
    }
  }

  async update(req, res) {
    try{
    const {id} = req.params;
    const ID_encontrado = await IAModel.findById(id);

    if(!ID_encontrado)
      return res.status(404).json({message: "Ferramenta não encontrada"});   

    const IA = await IAModel.findByIdAndUpdate(id, req.body, {new: true});

    return res.status(200).json(IA);
    } catch(error){
      res.status(500).json({message: "Deu ruim aqui!!", error: error.message})
    }

  }
}

module.exports = new IAController();
