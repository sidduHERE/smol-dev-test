const solanaWeb3 = require('solana-web3.js');

const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('mainnet-beta'));

async function getPredictions() {
  const predictionsAccount = new solanaWeb3.PublicKey('PREDICTIONS_ACCOUNT_PUBLIC_KEY');
  const predictionsInfo = await connection.getAccountInfo(predictionsAccount);
  return solanaWeb3.Borsh.deserialize(schema, Prediction, predictionsInfo.data);
}

async function expirePrediction(predictionId) {
  const transaction = new solanaWeb3.Transaction().add(
    new solanaWeb3.TransactionInstruction({
      keys: [{pubkey: predictionId, isSigner: false, isWritable: true}],
      programId: new solanaWeb3.PublicKey('PREDICTION_PROGRAM_ID'),
      data: Buffer.from(solanaWeb3.Borsh.serialize(schema, new ExpirePrediction({predictionId}))),
    }),
  );
  const signers = [];
  return await solanaWeb3.sendAndConfirmTransaction(connection, transaction, signers);
}

async function comingPrediction(predictionId) {
  const transaction = new solanaWeb3.Transaction().add(
    new solanaWeb3.TransactionInstruction({
      keys: [{pubkey: predictionId, isSigner: false, isWritable: true}],
      programId: new solanaWeb3.PublicKey('PREDICTION_PROGRAM_ID'),
      data: Buffer.from(solanaWeb3.Borsh.serialize(schema, new ComingPrediction({predictionId}))),
    }),
  );
  const signers = [];
  return await solanaWeb3.sendAndConfirmTransaction(connection, transaction, signers);
}

module.exports = {
  getPredictions,
  expirePrediction,
  comingPrediction
};