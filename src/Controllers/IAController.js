//Controler são os responsáveis por toda a funcionalidade do backend
//neles, vocês definem o que cada função faz especificamente

const IAModel = require("../Models/IAModel");

//aqui define-se todas as funções
class IAController {
  //usar async/await porque precisamos de esperar pela operação do mongodb
  async create(req, res) {
    //usar try/catch para pegar os erros
    try {
      const tool = await IAModel.create(req.body);
      // ... para abrir o objeto
      return res.status(200).json({ ...tool, message: "Ferramenta criada com suceesso" });
    } catch (error) {
      return res
        .status(500)
        .json({ error: error.message, message: "Não foi possível criar a ferramenta" });
    }
  }

  async read(req, res) {
    try {
      const tools = await IAModel.find();
      return res.status(200).json(tools);
    } catch (error) {
      return res
        .status(500)
        .json({ error: error.message, message: "Não foi possível pegar as ferramentas" });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      const tool = await IAModel.findByIdAndUpdate(id, req.body);
      //const tool = await IAModel.find({ _id: id });

      if (!tool)
        return res.status(404).json({ message: "Não foi possível encontrar a ferramenta" });

      //set para atualizar, save para salvar
      const modifiedTool = await tool.set(req.body).save();

      return res
        .status(200)
        .json({ ...modifiedTool, message: "Ferramenta modificada com suceesso" });
    } catch (error) {
      return res
        .status(500)
        .json({ error: error.message, message: "Não foi possível modificar a ferramenta" });
    }
  }
}

module.exports = new IAController();
