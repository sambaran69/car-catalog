const express = require("express");
const router = express.Router();
const modelStore = require("../store/modelStore");

router.get("/maker", (req, res) => {
    modelStore.getAllMakers().then(makes => {
        res.json(makes);
    }).catch(err => {
        // log err
        res.status(500).send(err);
    });
});

router.get("/maker/:makerId", (req, res) => {
    const makerId = +req.params.makerId;
    modelStore.getModelsByMakerId(makerId).then(models => {
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

router.get("/carOfWeek", (req, res) => {
    modelStore.getCarOfWeek().then(car => {
        res.json(car);
    }).catch(err => {
        // log err
        res.status(500).send(err);
    });
});

module.exports = router;
