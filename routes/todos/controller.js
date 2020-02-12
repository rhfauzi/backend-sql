const { connection } = require("../../config");

module.exports = {
  getAll: (req, res) => {
    connection.query(`SELECT * FROM todolist`, (error, result, fields) => {
      if (error) {
        res.status(500).send({ message: "there is something problem" });
      } else {
        res.status(200).send({ message: "Show data todos", data: result });
      }
    });
  },

  addData: (req, res) => {
    try {
      connection.query("INSERT INTO todolist SET ?", req.body, function(
        error,
        results
      ) {
        if (error) {
          res.status(500).send({
            message: `there is something problem: ${error.sqlMessage}`
          });
        } else {
          res.status(200).send({
            message: "Add new Todo List is successfully",
            data: results
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  },

  updateOne: (req, res) => {
    try {
      const { id } = req.params;

      connection.query(
        "UPDATE todolist SET ? WHERE id=?",
        [req.body, id],
        function(error, results, fields) {
          if (error) {
            res.status(500).send({
              message: `there is something problem: ${error.sqlMessage}`
            });
          } else {
            res.status(200).send({
              message: `Update todo with id ${id} is successfully`,
              data: results
            });
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
};
