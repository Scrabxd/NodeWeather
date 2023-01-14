import React, { useState, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Checkbox, FormControlLabel, FormGroup, IconButton, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./FiltersCompanies.scss";
import Chip from "@mui/material/Chip";
import FilterListIcon from "@mui/icons-material/FilterList";
import CardContent from "@mui/material/CardContent";
import { ScrollbarWrapper } from "../../../components/scroll";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Box from '@mui/material/Box';

const checkboxValues = [ 'Agricultura', 'Alimentación', 'Comercio', 'Construcción', 
'Educación', 'Hotelería', 'Industria química', 'Mecánica', 'Electrica', 'Comunicación', 
'Cultura', 'Minería', 'Petroleo y gas', 'Salud', 'Correos', 'Financiero', 'Servicios publicos', 
'Silvicultura', 'Textiles' ];

export default function FiltersCompanies({ onAction }) {
  const [open, setOpen] = useState(false);
  const [jobName, setJobName] = useState(true);
  const [open1, setOpen1] = useState(true);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    
    onAction(filters);
  
  }, [])
  

  const toggleDrawer = () => {
    setOpen(!open);
  };
  const keywords = (filt) => {
    if (filters.includes(filt)) {
      setFilters(filters.filter((item) => item !== filt));
    } else {
      setFilters((prevArray) => [...prevArray, filt]);
    }
  };

  const onHandleApplyFilters = () => {
    onAction(filters)
  }

  return (
    <>
      <Button
        sx={{
          color: "#d97828",
          width: "121px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignSelf: "flex-end",
        }}
        onClick={toggleDrawer}
      >
        <FilterListIcon sx={{ color: "#243071", fontSize: "33px" }} />
        <span style={{ color: "#243071", fontWeight: "bold", fontSize: "9px" }}>
          Filter Companies
        </span>
      </Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer}>
        <div className="FiltersPositionsContainer">
          <div className="titleContainer">
            <span className="findPositionText">Find your perfect companie</span>
            <h1 className="titleFilters">Filters</h1>
            <IconButton
              onClick={() => setOpen(!open)}
              color="error"
              size="large"
              className="iconClose"
            >
              <CloseIcon sx={{ fontSize: 39 }} />
            </IconButton>
          </div>
          <div className="firstTextFieldsContainer">
            <TextField
              size="small"
              id="outlined-basic"
              label="Keywords in description"
              variant="outlined"
              className="inputFilters"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
            <IconButton aria-label="delete" >
              <AddCircleOutlineIcon sx={{ color: "green" }} />
            </IconButton>
            <span className="keywordsPhrase">
              Add keywords to search in category or description
            </span>
          </div>

          <Box component='span' sx={{ fontWeight: 'bold' }}>
              Filter by category:
          </Box>

          <Box sx={{ display: 'flex' }}>
            <FormGroup>
              {
                checkboxValues.slice( 0, 10 ).map(( value, index ) => (
                  <FormControlLabel 
                    key={ index } 
                    control={ 
                      <Checkbox 
                        name={ value }
                        onChange={ ( e ) => keywords(e.target.name) }
                        checked={ filters.includes( value ) }
                      />
                    } 
                    label={ value }
                  />
                ))
              }
            </FormGroup>
            <FormGroup>
              {
                checkboxValues.slice( 10 ).map(( value, index ) => (
                  <FormControlLabel 
                    key={ index } 
                    control={ 
                      <Checkbox 
                        name={ value }
                        onChange={ ( e ) => keywords(e.target.name) }
                        checked={ filters.includes( value ) }
                      />
                    } 
                    label={ value }
                  />
                ))
              }
            </FormGroup>
          </Box>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
          <Button variant="outlined" onClick={ onHandleApplyFilters } sx={{ mt:'2rem' }}>Apply Filters</Button>  
          </div>
        </div>
      </Drawer>
    </>
  );
}
