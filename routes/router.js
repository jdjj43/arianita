const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const db = require("../config/dbConfig");
const { interpretarDatos, nombres } = require("../helpers/interpretar");

router.get("/", (req, res) => {
  res.render("home", { script: "home.js" });
});

router.get("/agregar_paciente", (req, res) => {
  res.render("agregar_paciente", { script: "" });
});

router.post("/agregar_paciente", [
  body("nombre_completo")
    .notEmpty()
    .withMessage("El nombre completo es requerido"),
  body("interrogacion")
    .isInt({ min: 0, max: 150 })
    .withMessage("Interrogante debe estar entre 0 y 150"),
  body("VRIN_r")
    .isInt({ min: 0, max: 150 })
    .withMessage("VRIN_r debe estar entre 0 y 150"),
  body("TRIN_r")
    .isInt({ min: 0, max: 150 })
    .withMessage("TRIN_r debe estar entre 0 y 150"),
  body("F_r")
    .isInt({ min: 0, max: 150 })
    .withMessage("F_r debe estar entre 0 y 150"),
  body("Fp_r")
    .isInt({ min: 0, max: 150 })
    .withMessage("Fp_r debe estar entre 0 y 150"),
  body("Fs")
    .isInt({ min: 0, max: 150 })
    .withMessage("Fs debe estar entre 0 y 150"),
  body("FBS_r")
    .isInt({ min: 0, max: 150 })
    .withMessage("FBS_r debe estar entre 0 y 150"),
  body("L_r")
    .isInt({ min: 0, max: 150 })
    .withMessage("L_r debe estar entre 0 y 150"),
  body("K_r")
    .isInt({ min: 0, max: 150 })
    .withMessage("K_r debe estar entre 0 y 150"),
  body("EID")
    .isInt({ min: 0, max: 150 })
    .withMessage("EID debe estar entre 0 y 150"),
  body("THD")
    .isInt({ min: 0, max: 150 })
    .withMessage("THD debe estar entre 0 y 150"),
  body("BXD")
    .isInt({ min: 0, max: 150 })
    .withMessage("BXD debe estar entre 0 y 150"),
  body("RCd")
    .isInt({ min: 0, max: 150 })
    .withMessage("RCd debe estar entre 0 y 150"),
  body("RC1")
    .isInt({ min: 0, max: 150 })
    .withMessage("RC1 debe estar entre 0 y 150"),
  body("RC2")
    .isInt({ min: 0, max: 150 })
    .withMessage("RC2 debe estar entre 0 y 150"),
  body("RC3")
    .isInt({ min: 0, max: 150 })
    .withMessage("RC3 debe estar entre 0 y 150"),
  body("RC4")
    .isInt({ min: 0, max: 150 })
    .withMessage("RC4 debe estar entre 0 y 150"),
  body("RC6")
    .isInt({ min: 0, max: 150 })
    .withMessage("RC6 debe estar entre 0 y 150"),
  body("RC7")
    .isInt({ min: 0, max: 150 })
    .withMessage("RC7 debe estar entre 0 y 150"),
  body("RC8")
    .isInt({ min: 0, max: 150 })
    .withMessage("RC8 debe estar entre 0 y 150"),
  body("RC9")
    .isInt({ min: 0, max: 150 })
    .withMessage("RC9 debe estar entre 0 y 150"),
  body("MLS")
    .isInt({ min: 0, max: 150 })
    .withMessage("MLS debe estar entre 0 y 150"),
  body("GIC")
    .isInt({ min: 0, max: 150 })
    .withMessage("GIC debe estar entre 0 y 150"),
  body("HPC")
    .isInt({ min: 0, max: 150 })
    .withMessage("HPC debe estar entre 0 y 150"),
  body("NUC")
    .isInt({ min: 0, max: 150 })
    .withMessage("NUC debe estar entre 0 y 150"),
  body("COG")
    .isInt({ min: 0, max: 150 })
    .withMessage("COG debe estar entre 0 y 150"),
  body("SUI")
    .isInt({ min: 0, max: 150 })
    .withMessage("SUI debe estar entre 0 y 150"),
  body("HLP")
    .isInt({ min: 0, max: 150 })
    .withMessage("HLP debe estar entre 0 y 150"),
  body("SFD")
    .isInt({ min: 0, max: 150 })
    .withMessage("SFD debe estar entre 0 y 150"),
  body("NFC")
    .isInt({ min: 0, max: 150 })
    .withMessage("NFC debe estar entre 0 y 150"),
  body("STW")
    .isInt({ min: 0, max: 150 })
    .withMessage("STW debe estar entre 0 y 150"),
  body("AXY")
    .isInt({ min: 0, max: 150 })
    .withMessage("AXY debe estar entre 0 y 150"),
  body("ANP")
    .isInt({ min: 0, max: 150 })
    .withMessage("ANP debe estar entre 0 y 150"),
  body("BRF")
    .isInt({ min: 0, max: 150 })
    .withMessage("BRF debe estar entre 0 y 150"),
  body("MSF")
    .isInt({ min: 0, max: 150 })
    .withMessage("MSF debe estar entre 0 y 150"),
  body("JCP")
    .isInt({ min: 0, max: 150 })
    .withMessage("JCP debe estar entre 0 y 150"),
  body("SUB")
    .isInt({ min: 0, max: 150 })
    .withMessage("SUB debe estar entre 0 y 150"),
  body("AGG")
    .isInt({ min: 0, max: 150 })
    .withMessage("AGG debe estar entre 0 y 150"),
  body("ACT")
    .isInt({ min: 0, max: 150 })
    .withMessage("ACT debe estar entre 0 y 150"),
  body("FML")
    .isInt({ min: 0, max: 150 })
    .withMessage("FML debe estar entre 0 y 150"),
  body("IPP")
    .isInt({ min: 0, max: 150 })
    .withMessage("IPP debe estar entre 0 y 150"),
  body("SAV")
    .isInt({ min: 0, max: 150 })
    .withMessage("SAV debe estar entre 0 y 150"),
  body("SHY")
    .isInt({ min: 0, max: 150 })
    .withMessage("SHY debe estar entre 0 y 150"),
  body("DSF")
    .isInt({ min: 0, max: 150 })
    .withMessage("DSF debe estar entre 0 y 150"),
  body("AES")
    .isInt({ min: 0, max: 150 })
    .withMessage("AES debe estar entre 0 y 150"),
  body("MEC")
    .isInt({ min: 0, max: 150 })
    .withMessage("MEC debe estar entre 0 y 150"),
  body("AGGR_r")
    .isInt({ min: 0, max: 150 })
    .withMessage("AGGR_r debe estar entre 0 y 150"),
  body("PSYC_r")
    .isInt({ min: 0, max: 150 })
    .withMessage("PSYC_r debe estar entre 0 y 150"),
  body("DISC_r")
    .isInt({ min: 0, max: 150 })
    .withMessage("DISC_r debe estar entre 0 y 150"),
  body("NEGE_r")
    .isInt({ min: 0, max: 150 })
    .withMessage("NEGE_r debe estar entre 0 y 150"),
  body("INTR_r")
    .isInt({ min: 0, max: 150 })
    .withMessage("INTR_r debe estar entre 0 y 150"),
  async (req, res) => {
    const result = validationResult(req);
    const errors = result.array();
    console.log(errors);
    if (errors.length > 0) {
      return res.json(errors);
    }

    db.serialize(() => {
      try {
        db.run(
          `INSERT INTO pacientes (nombre_completo, interrogacion, VRIN_r, TRIN_r, F_r, Fp_r, Fs, FBS_r, L_r, K_r, EID, THD, BXD, RCd, RC1, RC2, RC3, RC4, RC6, RC7, RC8, RC9, MLS, GIC, HPC, NUC, COG, SUI, HLP, SFD, NFC, STW, AXY, ANP, BRF, MSF, JCP, SUB, AGG, ACT, FML, IPP, SAV, SHY, DSF, AES, MEC, AGGR_r, PSYC_r, DISC_r, NEGE_r, INTR_r) 
          VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
          [
            req.body["nombre_completo"],
            req.body["interrogacion"],
            req.body["VRIN_r"],
            req.body["TRIN_r"],
            req.body["F_r"],
            req.body["Fp_r"],
            req.body["Fs"],
            req.body["FBS_r"],
            req.body["L_r"],
            req.body["K_r"],
            req.body["EID"],
            req.body["THD"],
            req.body["BXD"],
            req.body["RCd"],
            req.body["RC1"],
            req.body["RC2"],
            req.body["RC3"],
            req.body["RC4"],
            req.body["RC6"],
            req.body["RC7"],
            req.body["RC8"],
            req.body["RC9"],
            req.body["MLS"],
            req.body["GIC"],
            req.body["HPC"],
            req.body["NUC"],
            req.body["COG"],
            req.body["SUI"],
            req.body["HLP"],
            req.body["SFD"],
            req.body["NFC"],
            req.body["STW"],
            req.body["AXY"],
            req.body["ANP"],
            req.body["BRF"],
            req.body["MSF"],
            req.body["JCP"],
            req.body["SUB"],
            req.body["AGG"],
            req.body["ACT"],
            req.body["FML"],
            req.body["IPP"],
            req.body["SAV"],
            req.body["SHY"],
            req.body["DSF"],
            req.body["AES"],
            req.body["MEC"],
            req.body["AGGR_r"],
            req.body["PSYC_r"],
            req.body["DISC_r"],
            req.body["NEGE_r"],
            req.body["INTR_r"],
          ],
          (err) => {
            if (err) {
              console.log(req.body);
              return console.log(err.message);
            }
            return res.redirect('/directorio');
          }
        );
      } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Error al agregar el paciente" });
      }
    });
  },
]);

router.get("/directorio", (req, res) => {
  db.all(`SELECT * FROM pacientes`, (err, rows) => {
    if (err) {
      const error = 'No hay pacientes disponibles';
      return res.render("directorio", { data: [], error, script: "directorio.js" });
    }
    return res.render("directorio", { data: rows, script: "directorio.js" });
  });
});

// router.get("/consulta/:id/", (req, res) => {
//   // Pendiente
// });

router.get("/consulta/:id/interpretar", async (req, res) => {
  db.serialize(() => {
    let sql = `SELECT * FROM pacientes WHERE id = ?`;

    db.get(sql, [req.params.id], (err, row) => {
      if (err) {
        return res.status(404).send(`<div> Paciente no encontrado (404) </div> <a href='/'>Volver al inicio</a>`)
      }
      if (row) {
        return res.render("interpretar", {
          datos: interpretarDatos(row),
          nombres,
          puntuaciones: row,
          script: '',
        });
      } else {
        return res.status(404).send(`<div> Paciente no encontrado (404) </div> <a href='/'>Volver al inicio</a>`)
      }
    });
  });
});

module.exports = router;
