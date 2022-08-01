const { GoogleSpreadsheet } = require('google-spreadsheet');
import credentials from '../../credentials/google-api.json'
export default async function(req, res){
    //conection
    const doc = new GoogleSpreadsheet('1ibVTrkoT3JvgtzDH7R5dT68Y9anivz0Igdobcoq_YM4');
    await doc.useServiceAccountAuth({
        client_email: credentials.client_email,
        private_key: credentials.private_key,
      });
    //carregar
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();

    //cadastrar jogo
    //fazer update do id_jogos

    //listar jogos em aberto

    //salvar dados do 001

    //salvar dados do 000 e declarar fechado
    

    rows[0].id_jogo = '1'
    await rows[0].save();
    console.log(rows[0].id_jogo)
    const larryRow = await sheet.addRow({ status: 'aberto', adversario: 'eu', sexo:'ms', pontos:"10", saques:"5", tcerto:"10", terrado:"5", mcerto:'2', merrado:'1'});
    await larryRow.save();
    res.send({
        title: doc.title,
    })
}