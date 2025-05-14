const { User } = require('../models/user');

exports.createUser = async (req, res) => {
  const{name,email}=req.body
  try {
    const user = await User.create({name,email});
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try{
    const users = await User.findAll();
  res.json(users);
  }catch(err){
    res.status(500).json({error:err.message});
  }
  
};

exports.getUserById = async (req, res) => {
  try{
      const user = await User.findByPk(req.params.id);
      if(user){
        res.json(user);
      }else{
        res.status(404).send('User not found');
      }
  }catch(err){
      res.status(500).json({error:err.message});
  }
}
  
exports.updateUser = async (req, res) => {
  try {
    const [updated] = await User.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      res.send('User updated');
    } else {
      res.status(404).send('User not found');
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deleted = await User.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.send('User deleted');
    } else {
      res.status(404).send('User not found');
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
