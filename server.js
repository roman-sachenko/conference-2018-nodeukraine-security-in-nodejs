const cpusLength = require('os').cpus().length;
const cluster = require('cluster');

const numberOfInstances = cpusLength;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);
  startInstances(cluster, numberOfInstances);
  cluster.on('exit', onExit);

} else {
  console.log(`Worker ${process.pid} started`);
  process
    .on('uncaughtException', onUncaughtException);

  require('./app');
}

function startInstances(inputCluster, instanceLim) {
  for (let i = 0; i < instanceLim; i++) {
    inputCluster.fork();
  }
}

function onExit(worker) {
  console.log(`worker ${worker.process.pid} died`);
}

function onUncaughtException(err) {
  console.log(err);
  process.exit(1);
}