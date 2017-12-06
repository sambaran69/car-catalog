const fs = require("fs");
const path = require("path");

function readJSONFile(filename: string, callback: any) {
  const jsonFilePath = path.resolve(__dirname, `../data/${filename}`);
  fs.readFile(jsonFilePath, (err, data) => {
    if (err) {
      callback(err);
      return;
    }
    try {
      callback(null, JSON.parse(data));
    } catch (exception) {
      callback(exception);
    }
  });
}

function getCarOfWeek(): Promise<any> {
  return new Promise((resolve, reject) => {
    readJSONFile("carOfTheWeek.json", (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
}

function getAllMakes(): Promise<any[]> {
  return new Promise((resolve, reject) => {
    readJSONFile("makes.json", (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
}

function getAllModels(): Promise<any[]> {
  return new Promise((resolve, reject) => {
    readJSONFile("models.json", (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
}

function getModelsByMakeId(makeId: any): Promise<any[]> {
  return new Promise((resolve, reject) => {
    getAllModels().then(values => {
      const models = values.filter(x => x.makeId === makeId);
      resolve(models);
    }).catch(err => reject(err));
  });
}

function getModelByModelId(modelId: any) {
  return new Promise((resolve, reject) => {
    getAllModels().then(values => {
        const model = values.find(x => x.id === modelId);
        resolve(model);
    }).catch(err => reject(err));
  });
}

function getModelsByMakes(makeName: string) {
  return new Promise((resolve, reject) => {
    Promise.all([
      getAllMakes(),
      getAllModels(),
    ]).then(values => {
        const make = values[0].find(x => x.name === makeName);
        if (make) {
          const models = values[1].filter(y => y.makeId ===  make.id);
          resolve(models);
        } else {
          throw (`no make ${makeName} found`);
        }
    }).catch(err => {
        reject(err);
    });
  });
}

module.exports = {
  getCarOfWeek,
  getAllMakes,
  getModelsByMakeId,
  getModelByModelId,
};
