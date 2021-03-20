import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';
import { TwitterPicker } from 'react-color';

export default function AjouterDossier({ouvert, setOuvert, gererAjout}) {
  const [nom, setNom] = useState('');
  const [couverture, setCouverture] = useState('');
  const [couleur, setCouleur] = useState('#537169');
  const couleurs = ['#74eedf', '#9900ef', '#3397ef', '#fccd49', '#fd6d9e', '#ff7b00'];

  function viderChamps() {
    setNom('');
    setCouverture('');
    setCouleur('#537169');
  }

  return (
    <div className="AjouterDossier">
      <Dialog margin="normal" open={ouvert} onClose={()=>setOuvert(false)} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Ajouter un dossier</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="normal"
            id="nomDossier"
            label="Nom du dossier"
            type="text"
            fullWidth
            onChange={(e) => setNom(e.target.value)}
            defaultValue={nom}
          />
          <TextField
            margin="normal"
            id="urlImage"
            label="Adresse de l'image de couverture"
            type="text"
            fullWidth
            onChange={(e) => setCouverture(e.target.value)}
            defaultValue={couverture}
          />
          <TwitterPicker 
            width="100%" 
            triangle="hide"
            colors={couleurs}
            onChangeComplete={(couleur, e) => setCouleur(couleur.hex)}
            color={couleur}
          />
        </DialogContent>
        <DialogActions>
          <Button style={{backgroundColor: "#990000", color: "white"}} onClick={()=>{setOuvert(false); viderChamps()}} color="primary">
            Annuler
          </Button>
          <Button style={{backgroundColor: "#009900", color: "white"}} onClick={() => {nom !== '' && gererAjout(nom, couverture, couleur); viderChamps(); }} color="primary">
            Ajouter
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}