const { connection } = require("../../config");

module.exports = {
  // addData, getAll, getOne, update, delete
  addData: (req, res) => {
    try {
      connection.query("INSERT INTO tokoh SET ?", req.body, function(
        error,
        results
      ) {
        if (error) {
          res.status(500).send({
            message: `there is something problem: ${error.sqlMessage}`
          });
        } else {
          res.status(200).send({
            message: "Add new tokoh is successfully",
            data: results
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  },

  getAll: (req, res) => {
    connection.query(`SELECT * FROM tokoh`, (error, result) => {
      if (error) {
        res.status(500).send({ message: "there is something problem" });
      } else {
        res.status(200).send({ message: "Show data tokoh", data: result });
      }
    });
  },

  getOne: (req, res) => {
    const getId = req.params.id;
    connection.query(`SELECT * FROM tokoh WHERE id=${getId}`, function(
      error,
      result
    ) {
      if (error) {
        res.status(500).send({ message: "there is something problem" });
      } else {
        res.status(200).send({ message: "Show data tokoh", data: result });
      }
    });
  },

  updateById: (req, res) => {
    try {
      const { id } = req.params;

      connection.query(
        "UPDATE tokoh SET ? WHERE id=?",
        [req.body, id],
        function(error, results, fields) {
          if (error) {
            res.status(500).send({
              message: `there is something problem: ${error.sqlMessage}`
            });
          } else {
            res.status(200).send({
              message: `Update tokoh with id ${id} is successfully`,
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
    connection.query(`DELETE FROM tokoh WHERE id=${getId}`, function(
      error,
      result
    ) {
      if (error) {
        res
          .status(500)
          .send({ message: "there is something problem" + error.sqlMessage });
      } else {
        res
          .status(200)
          .send({ message: "DELETE tokoh where id ", data: result });
      }
    });
  },

  getByCountryId: (req, res) => {
    const getId = req.params.id;
    connection.query(
      `SELECT * FROM tokoh WHERE countryId=${getId}`,
      (error, result) => {
        if (error) {
          res
            .status(500)
            .send({ message: "there is something problem" + error.sqlMessage });
        } else {
          res.status(200).send({ message: "Show data tokoh", data: result });
        }
      }
    );
  },
  countTokoh: (req, res) => {
    connection.query(
      `SELECT count(id) as jmlTokoh FROM tokoh`,
      (error, result) => {
        if (error) {
          res
            .status(500)
            .send({ message: "there is something problem" + error.sqlMessage });
        } else {
          res.status(200).send({ message: "Show data tokoh", data: result });
        }
      }
    );
  },
  likeName: (req, res) => {
    const getName = req.params.name;
    connection.query(
      `SELECT * FROM tokoh WHERE name LIKE '%${getName}%'`,
      (error, result) => {
        if (error) {
          res.status(500).send({
            message: "there is something problem " + error.sqlMessage
          });
        } else {
          res
            .status(200)
            .send({ message: "Show data all tokoh ", data: result });
        }
      }
    );
  }
};
