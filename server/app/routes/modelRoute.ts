const express = require("express");
const router = express.Router();
const modelStore = require("../store/modelStore");

router.get("/make", (req, res) => {
    modelStore.getAllMakers().then(makes => {
        res.json(makes);
    }).catch(err => {
        // log err
        res.status(500).send(err);
    });
});

router.get("/make/:makeId", (req, res) => {
    const makeId = +req.params.makeId;
    modelStore.getModelsByMakeId(makeId).then(models => {
        res.json(models);
    }).catch(err => {
        // log err
        res.status(500).send(err);
    });
});

router.get("/model/:modelId", (req, res) => {
    const modelId = +req.params.modelId;
    modelStore.getModelByModelId(modelId).then(model => {
        res.json(model);
    }).catch(err => {
        // log err
        res.status(500).send(err);
    });
});

router.get("/carOfTheWeek", (req, res) => {
    modelStore.getCarOfWeek().then(car => {
        res.json(car);
    }).catch(err => {
        // log err
        res.status(500).send(err);
    });
});

module.exports = router;
