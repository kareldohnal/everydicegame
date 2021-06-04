import { useState } from "react";

import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import CasinoIcon from "@material-ui/icons/Casino";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Chance from "chance"

import "./Cloth.scss";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180,
  },
}));

function AddDiceDialog(props) {
  const classes = useStyles();

  const [selectedValue, setSelectedValue] = useState("d6");
  const { onClose, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <Dialog open={open} maxWidth="lg">
      <DialogTitle className="dialog-title" id="dialog-title">
        Add dice
      </DialogTitle>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="dice-select">Select a dice to add:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="dice-select"
          value={selectedValue}
          onChange={handleChange}
        >
          <MenuItem value={"d4"}>D4</MenuItem>
          <MenuItem value={"d6"}>D6</MenuItem>
          <MenuItem value={"d20"}>D20</MenuItem>
        </Select>
        <FormHelperText>
          Number after 'D' represent number of dice faces
        </FormHelperText>
        <Button variant="contained" color="primary" onClick={handleClose}>
          Add
        </Button>
      </FormControl>
    </Dialog>
  );
}

export const Cloth = () => {
  const [dices, setDices] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDel = (item) => () => {
    var d = dices;
    d.splice(item, 1);
    setDices([...d]);
  };

  const handleAdd = () => {
    setDialogOpen(true);
  };

  const handleClose = (value) => {
    setDialogOpen(false);
    pushDice(value);
  };

  const pushDice = (value) => {
    setDices(dices.concat(value));
  };

  const handleRoll = () => {
    const chance = new Chance()
    dices.map((item) => {
      console.log(chance.natural({ min: 1, max: parseInt(item, 10) }))
    })
  }

  return (
    <>
      <div className="cloth">
        Cloth
        <div className="selector">Selector</div>
        <div className="roller">
          <div className="dices">
            Dices
            {
            dices.map((item, index) => (
              <Chip
                key={item + index}
                id={index}
                size="small"
                onDelete={handleDel(index)}
                icon={<CasinoIcon />}
                className="dice-chip"
                label={item}
              />
            ))
            }
            <Chip
              size="small"
              deleteIcon={<AddIcon />}
              onClick={handleAdd}
              onDelete={handleAdd}
              className="dice-chip"
              label="Add dice"
            />
            <AddDiceDialog open={dialogOpen} onClose={handleClose} />
          </div>
          <button onClick={handleRoll}>Roll</button>
        </div>
      </div>
    </>
  );
};
