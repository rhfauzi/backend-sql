const { connection } = require("../../config");

module.exports = {
  // addData, getAll, getOne, update, delete
  addData: (req, res) => {
    try {
      connection.query("INSERT INTO negara SET ?", req.body, function(
        error,
        results
      ) {
        if (error) {
          res.status(500).send({
            message: `there is something problem: ${error.sqlMessage}`
          });
        } else {
          res.status(200).send({
            message: "Add new Negara is successfully",
            data: results
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  },

  getAll: (req, res) => {
    connection.query(`SELECT * FROM negara`, (error, result) => {
      if (error) {
        res.status(500).send({ message: "there is something problem" });
      } else {
        res.status(200).send({ message: "Show data Negara", data: result });
      }
    });
  },

  getOne: (req, res) => {
    const getId = req.params.id;
    connection.query(`SELECT * FROM negara WHERE id=${getId}`, function(
      error,
      result
    ) {
      if (error) {
        res.status(500).send({ message: "there is something problem" });
      } else {
        res.status(200).send({ message: "Show data Negara", data: result });
      }
    });
  },

  updateById: (req, res) => {
    try {
      const { id } = req.params;

      connection.query(
        "UPDATE negara SET ? WHERE id=?",
        [req.body, id],
        function(error, results, fields) {
          if (error) {
            res.status(500).send({
              message: `there is something problem: ${error.sqlMessage}`
            });
          } else {
            res.status(200).send({
              message: `Update Negara with id ${id} is successfully`,
              data: results
            });
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
  },

  deleteById: (req, res) => {
    const getId = req.params.id;
    connection.query(`DELETE FROM negara WHERE id=${getId}`, function(
      error,
      result
    ) {
      if (error) {
        res.status(500).send({ message: "there is something problem" });
      } else {
        res
          .status(200)
          .send({ message: "DELETE negara where id ", data: result });
      }
    });
  }
};
